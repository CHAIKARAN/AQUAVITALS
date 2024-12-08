import React, { useState } from "react";
import { StyleSheet, Text, View, ImageBackground, TextInput, TouchableOpacity, Alert } from "react-native";

const UserProfile = () => {
  const [name, setName] = useState("John Doe");
  const [email, setEmail] = useState("johndoe@example.com");
  const [isEditing, setIsEditing] = useState(false);

  const toggleEditing = () => {
    if (isEditing) {
      Alert.alert("Profile Updated", `Name: ${name}\nEmail: ${email}`);
    }
    setIsEditing(!isEditing);
  };

  return (
    <ImageBackground
      source={{
        uri: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
      }}
      style={styles.background}
    >
      <View style={styles.container}>
        <Text style={styles.title}>User Profile</Text>
        <View style={styles.card}>
          <Text style={styles.label}>Name:</Text>
          {isEditing ? (
            <TextInput
              style={styles.input}
              value={name}
              onChangeText={setName}
              placeholder="Enter your name"
            />
          ) : (
            <Text style={styles.value}>{name}</Text>
          )}
          <Text style={styles.label}>Email:</Text>
          {isEditing ? (
            <TextInput
              style={styles.input}
              value={email}
              onChangeText={setEmail}
              placeholder="Enter your email"
              keyboardType="email-address"
            />
          ) : (
            <Text style={styles.value}>{email}</Text>
          )}
          <TouchableOpacity style={styles.button} onPress={toggleEditing}>
            <Text style={styles.buttonText}>
              {isEditing ? "Save Changes" : "Edit Profile"}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    padding: 20,
    borderRadius: 15,
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#004D40",
    marginBottom: 20,
  },
  card: {
    width: "100%",
    backgroundColor: "white",
    borderRadius: 10,
    padding: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
    alignItems: "center",
  },
  label: {
    fontSize: 18,
    color: "#00796B",
    fontWeight: "600",
    alignSelf: "flex-start",
  },
  value: {
    fontSize: 16,
    color: "#004D40",
    marginBottom: 10,
    alignSelf: "flex-start",
  },
  input: {
    width: "100%",
    borderWidth: 1,
    borderColor: "#00796B",
    borderRadius: 5,
    padding: 8,
    marginBottom: 10,
    fontSize: 16,
    color: "#004D40",
  },
  button: {
    marginTop: 15,
    backgroundColor: "#00796B",
    padding: 10,
    borderRadius: 5,
    width: "80%",
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
});

export default UserProfile;
