import React, { useState } from "react";
import {
  StyleSheet,
  Pressable,
  Text,
  FlatList,
  TouchableOpacity,
  View,
  Alert,
  KeyboardAvoidingView,
  Platform,
  Modal,
} from "react-native";
import { useDispatch } from "react-redux";
import { Ionicons } from "@expo/vector-icons";
import { THEMES } from "../data/dummy-theme";

import Reminder from "../components/ReminderUI/ReminderListItem";
import TextInput from "../components/AddReminder/TextInput";
import PickDate from "../components/AddReminder/PickDate";
import PickIcon from "../components/AddReminder/PickIcon";
import * as remindersActions from "../store/actions/reminder";

const AddReminderScreen = () => {
  const [pickDateVisible, setPickDateVisible] = useState(false);
  const [pickIconVisible, setPickIconVisible] = useState(false);
  const [title, setTitle] = useState("New Reminder");
  const [icon, setIcon] = useState("md-alert");
  const [iconColor, setIconColor] = useState("");
  const [color, setColor] = useState("#e86a82");
  const [category, setCategory] = useState("");
  const [date, setDate] = useState("29");
  const [time, setTime] = useState("");
  // const [isChecked, setIsChecked] = useState("");
  // const [whenChecked, setWhenChecked] = useState("");
  // const [dateAdded, setDateAdded] = useState("");

  const dispatch = useDispatch();

  const saveReminderHandler = () => {
    dispatch(
      remindersActions.createReminder(
        title,
        icon,
        iconColor,
        color,
        category,
        date,
        time,
        false,
        "",
        ""
      )
    );
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <Modal
        animationType="slide"
        transparent={true}
        visible={pickDateVisible || pickIconVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed");
        }}
      >
        <View style={styles.centeredView}>
          {pickDateVisible ? <PickDate
            setVisible={() => {
              setPickDateVisible(!pickDateVisible);
            }}
          /> : null}
          {pickIconVisible ? <PickIcon
            setVisible={() => {
              setPickIconVisible(!pickIconVisible);
            }}
          />: null}
        </View>
      </Modal>
      <View style={styles.reminderContainer}>
        <Text style={styles.previewText}>Preview</Text>
        <Reminder
          title={title}
          icon={icon}
          iconColor={iconColor}
          color={color}
        />
      </View>
      <View style={styles.rowContainer}>
        <TouchableOpacity
          style={styles.rowContainerBox}
          onPress={() => setPickIconVisible(!pickIconVisible)}
        >
          {/* <Text>Icon:</Text> */}
          <Ionicons name="md-alert" size={50} color="#31c6a1" />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.rowContainerBox}
          onPress={() => setPickDateVisible(!pickDateVisible)}
        >
          {/* <Text>When?</Text> */}
          <Ionicons name="md-calendar" size={50} color="#29166c" />
        </TouchableOpacity>
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Title"
          onChangeText={(text) => setTitle(text)}
        />
        <View style={styles.pickThemeContainer}>
          <FlatList
            data={THEMES}
            numColumns="4"
            renderItem={(item) => (
              <Pressable
                style={[
                  styles.theme,
                  { backgroundColor: item.item.background },
                ]}
                onPress={() => {
                  setColor(item.item.background);
                  setIconColor(item.item.icon);
                }}
              />
            )}
            keyExtractor={(item) => item.id}
          />
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.saveButton}
          onPress={() => saveReminderHandler()}
        >
          <Ionicons name="md-checkmark" size={36} color="#eef9f6" />
        </TouchableOpacity>
        {/* <TouchableOpacity
          style={styles.nextButton}
          onPress={() => console.log("Button Next pressed")}
        >
          <Ionicons name="md-arrow-forward" size={36} color="#ecf0f9" />
        </TouchableOpacity> */}
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  reminderContainer: {
    flex: 2,
    justifyContent: "flex-end",
    padding: 20,
    // backgroundColor: "blue"
  },
  rowContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "flex-end",
  },
  rowContainerBox: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  inputContainer: {
    flex: 5,
    paddingHorizontal: 10,
    marginTop: 20,
    backgroundColor: "#fff",
    justifyContent: "flex-end",
  },
  pickThemeContainer: {
    alignItems: "center",
    marginTop: 30,
    height: 200,
  },
  theme: {
    width: 50,
    height: 50,
    borderRadius: 50,
    backgroundColor: "#d9675b",
    margin: 10,
  },
  buttonContainer: {
    flex: 2,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "flex-start",
    paddingHorizontal: 20,
    // backgroundColor: "blue"
  },
  previewText: {
    textAlign: "center",
    fontSize: 20,
    color: "#a9a9a9",
  },
  textInput: {
    fontSize: 18,
    borderColor: "#808080",
    borderRadius: 10,
    borderWidth: 1,
    padding: 10,
  },
  saveButton: {
    backgroundColor: "#59c7ad",
    borderRadius: 30,
    paddingVertical: 30,
    paddingHorizontal: 35,
  },
  nextButton: {
    backgroundColor: "#4770c9",
    borderRadius: 30,
    paddingVertical: 30,
    paddingHorizontal: 35,
  },

  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
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
    marginBottom: 15,
    textAlign: "center",
  },
});

export default AddReminderScreen;
