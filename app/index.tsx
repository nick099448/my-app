import { Link, router } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Index() {
  return (
    <>
    <View
      style={{
        // flexDirection: "row",
        // flexWrap: "wrap",
        // justifyContent: "center",
        /// alignItems: "center",
        margin: 20,
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-between",
      }}
    >
      <TouchableOpacity
        style={{
          marginTop: 24,
          padding: 12,
          backgroundColor: "#007AFF",
          borderRadius: 8,
        }}
        onPress={() => router.push("/flexbox/ex01")}
      >
        <Text style={{ color: "#fff", fontWeight: "bold" }}>
          ไปหน้าที่ ex01
        </Text>
      </TouchableOpacity>
      <Link
        href="/flexbox/ex02"
        style={{
          marginTop: 24,
          padding: 12,
          backgroundColor: "#007AFF",
          borderRadius: 8,
        }}
      >
        <Text style={{ color: "#fff", fontWeight: "bold" }}>
          ไปหน้าที่ ex02
        </Text>
      </Link>
      <Link
        href="/flexbox/ex03"
        style={{
          marginTop: 24,
          padding: 12,
          backgroundColor: "#007AFF",
          borderRadius: 8,
        }}
      >
        <Text style={{ color: "#fff", fontWeight: "bold" }}>
          ไปหน้าที่ ex03
        </Text>
      </Link>
      <Link
        href="/flexbox/ex04"
        style={{
          marginTop: 24,
          padding: 12,
          backgroundColor: "#007AFF",
          borderRadius: 8,
        }}
      >
        <Text style={{ color: "#fff", fontWeight: "bold" }}>
          ไปหน้าที่ ex04
        </Text>
      </Link>
      <Link
        href="/flexbox/ex05"
        style={{
          marginTop: 24,
          padding: 12,
          backgroundColor: "#007AFF",
          borderRadius: 8,
        }}
      >
        <Text style={{ color: "#fff", fontWeight: "bold" }}>
          ไปหน้าที่ ex05
        </Text>
      </Link>
      <Link
        href="/flexbox/ex06"
        style={{
          marginTop: 24,
          padding: 12,
          backgroundColor: "#007AFF",
          borderRadius: 8,
        }}
      >
        <Text style={{ color: "#fff", fontWeight: "bold" }}>
          ไปหน้าที่ ex06
        </Text>
      </Link>
      <Link
        href="/flexbox/ex07"
        style={{
          marginTop: 24,
          padding: 12,
          backgroundColor: "#007AFF",
          borderRadius: 8,
        }}
      >
        <Text style={{ color: "#fff", fontWeight: "bold" }}>
          ไปหน้าที่ ex07
        </Text>
      </Link>
      <Link
        href="/flexbox/ex08"
        style={{
          marginTop: 24,
          padding: 12,
          backgroundColor: "#007AFF",
          borderRadius: 8,
        }}
      >
        <Text style={{ color: "#fff", fontWeight: "bold" }}>
          ไปหน้าที่ ex08
        </Text>
      </Link>
      <Link
        href="/flexbox/ex09"
        style={{
          marginTop: 24,
          padding: 12,
          backgroundColor: "#007AFF",
          borderRadius: 8,
        }}
      >
        <Text style={{ color: "#fff", fontWeight: "bold" }}>
          ไปหน้าที่ ex09
        </Text>
      </Link>
      <Link
        href="/flexbox/ex10"
        style={{
          marginTop: 24,
          padding: 12,
          backgroundColor: "#007AFF",
          borderRadius: 8,
        }}
      >
        <Text style={{ color: "#fff", fontWeight: "bold" }}>
          ไปหน้าที่ ex10
        </Text>
      </Link>
      <Link
        href="/flexbox/ex11"
        style={{
          marginTop: 24,
          padding: 12,
          backgroundColor: "#007AFF",
          borderRadius: 8,
        }}
      >
        <Text style={{ color: "#fff", fontWeight: "bold" }}>
          ไปหน้าที่ ex11
        </Text>
      </Link>
      <Link
        href="/flexbox/ex12"
        style={{
          marginTop: 24,
          padding: 12,
          backgroundColor: "#007AFF",
          borderRadius: 8,
        }}
      >
        <Text style={{ color: "#fff", fontWeight: "bold" }}>
          ไปหน้าที่ ex12
        </Text>
      </Link>
     </View>
      <View style={styles.container}>
        ...
        <Link href="/travel" style={styles.link}>
        <Text style={styles.linkText}>Travel</Text>
           </Link>
        <Link href="/resort" style={styles.link}>
        <Text style={styles.linkText}>resort</Text>
      </Link>

      
    </View>
    </>
  );
}
const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  link: {
    margin: 10,
    padding: 10,
    backgroundColor: "#2196F3",
    borderRadius: 5,
  },
  linkText: { color: "#fff", fontSize: 16, textAlign: "center" },
});
