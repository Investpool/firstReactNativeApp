import React from "react";
import { View, Image, StyleSheet, Text, TouchableOpacity } from "react-native";
import { Ionicons } from '@expo/vector-icons';

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <View
        style={{ flex: 0.3, justifyContent: "center", alignItems: "center"}}>
        <Text style={styles.header}>Edit Profile</Text>
      </View>

      <View style={styles.imageContainer}>
        <Image
        height={80}
        width={80}
          style={styles.image,{height: 80, width: 80, borderRadius: 50} }
          source={require("../../assets/indiab.jpg")}/>
      </View>

      <View style={styles.detailsContainer}>
        <View style={styles.details}>
          <Text style={styles.detailLable}>School</Text>
          <Text style={styles.detailContent}>Packsville Tech Inst.</Text>
        </View>

        <View style={styles.email}>
          <Text style={styles.emailLable}>Email Address</Text>
          <Text style={styles.emailContent}>hcb@yahoo.com</Text>
        </View>

        <View style={styles.personal}>
          <Text style={styles.personalLable}>Name </Text>
          <Text style={styles.personalContent}>Louisa Packs</Text>
          <Text style={styles.personalLine}></Text>
        </View>

        <View style={styles.nicky}>
          <Text style={styles.personalLable}>Nick Name</Text>
          <Text style={styles.personalContent}>Biriful</Text>
          <Text style={styles.personalLine}></Text>
        </View>

        <View style={styles.nicky}>
          <Text style={styles.personalLable}>Emergency Contact</Text>
          <Text style={styles.personalContent}>+233-243779704</Text>
          <Text style={styles.personalLine}></Text>
        </View>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>UPDATE PROFILE</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 5,
    marginHorizontal: 30,
  },

  imageContainer: {
    flex: 0.25,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 5,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 100,
    marginTop: 10,
  },

  details: {
    marginVertical: 10,
  },

  detailsContainer: {
    flex: 0.55,
  },

  detailLable: {
    color: "#ABB2B9",
    marginBottom: 5,
  },

  detailContent: {
    fontWeight: "bold",
    fontSize: 17,
  },

  emailLable: {
    color: "#ABB2B9",
    marginTop: 5,
  },

  emailContent: {
    fontSize: 17,
    fontWeight: "bold",
    marginTop: 5,
  },

  personalLable: {
    color: "#3FC8F7",
    marginBottom: 8,
    fontWeight: "bold",
    fontSize: 15,
  },
  personalContent: {
    fontSize: 17,
    fontWeight: "bold",
  },

  personalLine: {
    backgroundColor: "#ECF0F1",
    width: "100%",
    height: 3,
    marginTop: 10,
    marginBottom: 20,
  },

  buttonContainer: {
    flex: 0.1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 200,
    marginBottom: 20,
  },

  button: {
    width: "100%",
    height: 40,
    backgroundColor: "#2FC8F7",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
    marginTop: 20,
  },

  buttonText: {
    color: "white",
    fontSize: 20,
  },
  header:{
      marginBottom:5,
  }
});
