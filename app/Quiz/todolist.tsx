import { getData, storeData } from "@/components/utils/storage";
import TodoItem from "@/components/week9/Quiz/TodoItem";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from "react";
import { FlatList, TouchableOpacity, View } from "react-native";

export default function TodoList() {
  const navigation = useNavigation();
//   const [todolist, setTodolist] = useState<number[]>([]);
  
  const [todos, setTodos] = useState<any>([
    // { id: '1', completed: false, title:"item={item}" },
    // { id: '2', completed: false, title: "meeting @ 9.00" },
    // { id: '3', completed: false, title: "go to cinema @ 19.00" },
  ]);
const loadTodos = async () => {
    const data = await getData("todos");
    if (data) {
        setTodos(data);
    }
};

useEffect(() => {
    loadTodos();
}, []);

const saveTodos = async (todosData: any) => {
    await storeData("todos", todosData);
};

const onCreate = async () => {
    let new_data = {
        id: "_" + Math.random().toString(36).substr(2, 9),
        title: "",
        completed: false,
    };
    let t = [...todos, new_data];
    setTodos(t);
    await saveTodos(t);
};

const onUpdate = async (new_title: string, id: string) => {
    let t = [...todos];
    let index = t.findIndex((item) => item.id == id);
    t[index].title = new_title;
    setTodos(t);
    await saveTodos(t);
};

const onCheck = async (id: string) => {
    let t = [...todos];
    let index = t.findIndex((item) => item.id == id);
    t[index].completed = !t[index].completed;
    setTodos(t);
    await saveTodos(t);
};

const onDelete = async (id: string) => {
    let t = [...todos];
    let index = t.findIndex((item) => item.id == id);
    t.splice(index, 1);
    setTodos(t);
    await saveTodos(t);
};
  console.log("TODOS:", todos);



  return (
    <View style={{ flex: 1 }}>
      <FlatList
        style={{ marginTop: 15 }}
        data={todos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          // <Text>{item.title}</Text>
          <TodoItem
            item={item}
            onUpdate={onUpdate}
            onCheck={onCheck}
            onDelete={onDelete}
          />
        )}
      />
      <TouchableOpacity
        style={{
          position: "absolute",
          bottom: 20,
          right: 20,
          backgroundColor: "#007bff", 
          borderRadius: 30, 
          width: 60,
          height: 60,
          justifyContent: "center",
          alignItems: "center",
        }}
        onPress={onCreate}
      >
        <FontAwesome name="plus" size={26} />
      </TouchableOpacity>
    </View>
  );
}
