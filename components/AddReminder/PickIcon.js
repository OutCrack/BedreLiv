import React from "react";
import {
  View,
  Modal,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { ICONS } from "../../data/dummy-icons";
import { Ionicons } from "@expo/vector-icons";

const pickDate = (props) => {
  return (
    <View style={styles.modalView}>
      <Text style={styles.modalText}>Select icon</Text>
      <FlatList
        data={ICONS}
        numColumns="5"
        keyExtractor={(item) => item.id}
        renderItem={(icon) => (
          <TouchableOpacity
            style={styles.icon}
            onPress={() => console.log("icon pressed")}
          >
            <Ionicons name={icon.item.name} size={36} color="black" />
          </TouchableOpacity>
        )}
      />
      <TouchableOpacity
        style={{ ...styles.openButton, backgroundColor: "#2196F3" }}
        onPress={props.setVisible}
      >
        <Text style={styles.textStyle}>Done</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    // height: "70%"
    width: "90%"
  },
  openButton: {
    backgroundColor: "#F194FF",
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 20,
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold"
  },
  icon: {
    margin: 10,
  },
});

export default pickDate;
