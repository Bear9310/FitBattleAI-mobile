import { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

import socket from "../services/socket";

export default function HomeScreen() {
  const [username, setUsername] = useState("");
  const [status, setStatus] = useState("Ready");

  useEffect(() => {
    socket.on("waiting", () => {
      setStatus("Searching for opponent...");
    });

    socket.on("matchFound", (data) => {
      setStatus(
        "Matched with " +
          data.players.find((p: any) => p.id !== socket.id)?.username
      );

      console.log(data);
    });

    return () => {
      socket.off("waiting");
      socket.off("matchFound");
    };
  }, []);

  function findMatch() {
    if (username.trim().length === 0) return;

    socket.emit("findMatch", username);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>FitBattle AI</Text>

      <TextInput
        style={styles.input}
        placeholder="Enter Username"
        value={username}
        onChangeText={setUsername}
      />

      <TouchableOpacity
        style={styles.button}
        onPress={findMatch}
      >
        <Text style={styles.buttonText}>
          Find Match
        </Text>
      </TouchableOpacity>

      <Text style={styles.status}>
        {status}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 25,
  },

  title: {
    fontSize: 34,
    fontWeight: "bold",
    marginBottom: 40,
    textAlign: "center",
  },

  input: {
    borderWidth: 1,
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
  },

  button: {
    backgroundColor: "#2563EB",
    padding: 16,
    borderRadius: 10,
  },

  buttonText: {
    color: "#fff",
    textAlign: "center",
    fontSize: 18,
    fontWeight: "bold",
  },

  status: {
    marginTop: 25,
    textAlign: "center",
    fontSize: 18,
  },
});
