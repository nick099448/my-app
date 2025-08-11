import React from "react";
import { FlatList, Image, Text, View } from "react-native";

export default function Event(props: any) {
  const tours = [
    {
      id: "1",
      title: "Truckfighters: Performing",
      uri: "https://raw.githubusercontent.com/arc6828/myreactnative/master/assets/all/event-1.jpg",
      month: "DEC",
      date: "30",
      datetime: "Thu, DEC 30, 09.00 am",
      place: "London",
    },
    {
      id: "2",
      title: "Paris Motor Show",
      uri: "https://raw.githubusercontent.com/arc6828/myreactnative/master/assets/all/event-2.jpg",
      month: "DEC",
      date: "31",
      datetime: "Thu, DEC 31, 09.00 am",
      place: "Paris",
    },
    {
      id: "3",
      title: "Bearded Theory Spring",
      uri: "https://raw.githubusercontent.com/arc6828/myreactnative/master/assets/all/event-3.jpg",
      month: "JAN",
      date: "01",
      datetime: "Thu, JAN 01, 09.00 am",
      place: "Canada",
    },
    {
      id: "4",
      title: "BBC Music Introducing",
      uri: "https://raw.githubusercontent.com/arc6828/myreactnative/master/assets/all/event-4.jpg",
      month: "JAN",
      date: "11",
      datetime: "Thu, JAN 11, 09.00 am",
      place: "USA",
    },
    {
      id: "5",
      title: "Start-Up Meeting 2022",
      uri: "https://raw.githubusercontent.com/arc6828/myreactnative/master/assets/all/event-5.jpg",
      month: "JAN",
      date: "21",
      datetime: "Thu, JAN 21, 09.00 am",
      place: "Thailand",
    },
  ];

  return (
    <View style={props.style}>
      <Text style={{ fontSize: 20 }}>Upcoming Event</Text>
      <Text style={{ color: "grey" }}>
        Let find out what most interesting things
      </Text>

      <FlatList
        horizontal={true}
        data={tours}
        renderItem={({ item }) => {
          return (
            <View style={{ marginRight: 10 }}>
              {/* Image */}
              <Image
                style={{
                  width: 230,
                  height: 120,
                  borderTopLeftRadius: 10,
                  borderTopRightRadius: 10,
                }}
                source={{ uri: item.uri }}
              />

              {/* Bottom View */}
              <View
                style={{
                  flexDirection: "row",
                  borderBottomLeftRadius: 10,
                  borderBottomRightRadius: 10,
                  borderWidth: 1,
                  borderColor: "#ccc",
                  overflow: "hidden",
                }}
              >
                {/* Date View */}
                <View style={{ padding: 5, alignItems: "center" }}>
                  <Text
                    style={{ fontSize: 16, color: "red", textAlign: "center" }}
                  >
                    {item.month}
                  </Text>
                  <Text
                    style={{
                      fontSize: 16,
                      color: "black",
                      textAlign: "center",
                    }}
                  >
                    {item.date}
                  </Text>
                </View>

                {/* Detail View */}
                <View style={{ padding: 5, flex: 1 }}>
                  <Text style={{ fontSize: 14, color: "black" }}>
                    {item.title}
                  </Text>
                  <Text style={{ color: "grey" }}>{item.datetime}</Text>
                  <Text style={{ color: "grey" }}>{item.place}</Text>
                </View>
              </View>
            </View>
          );
        }}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}
