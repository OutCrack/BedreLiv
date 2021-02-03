import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import PickDays from "../../components/AddReminder/PickDays";

const pickDate = (props) => {
  const [everyday, setEveryday] = useState(false);
  const [days, setDays] = useState([])

  const test = (day) => {
    console.log(day);
    
  }

  return (
    <View style={styles.modalView}>
      <Text style={styles.modalText}>Which days?</Text>
      <TouchableOpacity
        style={styles.everyday}
        onPress={() => setEveryday(!everyday)}
      >
        <Text>Everyday</Text>
      </TouchableOpacity>
      <PickDays selectDay={test}/>
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
    paddingVertical: 35,
    paddingHorizontal: 15,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    width: "90%"
  },
  openButton: {
    backgroundColor: "#F194FF",
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    marginTop: 30
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
  everyday: {
    borderColor: "#a9a9a9",
    borderRadius: 25,
    borderWidth: 1,
    paddingHorizontal: 50,
    paddingVertical: 10
  }
});

export default pickDate;
