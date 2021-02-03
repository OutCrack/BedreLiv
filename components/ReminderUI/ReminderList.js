import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Alert,
} from "react-native";
import { useDispatch } from "react-redux";
import { Ionicons } from "@expo/vector-icons";
import ReminderListItem from "./ReminderListItem";
import * as remindersActions from "../../store/actions/reminder";

const reminderList = (props) => {
  const dispatch = useDispatch();
  const allReminders = props.remindersToday;
  const notCheckedList = [];

  allReminders.forEach((element) => {
    if (!element.isChecked) {
      notCheckedList.push(element);
    }
  });

  const deleteHandler = (id) => {
    console.log("deleteHandler");
    Alert.alert(
      "",
      "Delete this reminder?",
      [
        { text: "No", style: "cancel" },
        {
          text: "Delete",
          onPress: () => {
            dispatch(remindersActions.deleteReminder(id));
          },
        },
      ],
      { cancelable: true }
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.listHeaderText}>{props.header}</Text>
        <TouchableOpacity onPress={props.navigate}>
          <Ionicons name="md-arrow-forward" size={36} color="#D3D3D3" />
        </TouchableOpacity>
      </View>
      <View style={styles.listContainer}>
        <FlatList
          data={notCheckedList}
          renderItem={(item) => (
            <ReminderListItem
              title={item.item.title}
              icon={item.item.icon}
              iconColor={item.item.iconColor}
              color={item.item.color}
              isChecked={item.item.isChecked}
              onLongPress={() => deleteHandler(item.item.id)}
              checkedHandler={() => 
                dispatch(
                  remindersActions.updateReminder(
                    item.item.id,
                    item.item.title,
                    item.item.icon,
                    item.item.iconColor,
                    item.item.color,
                    item.item.category,
                    item.item.date, 
                    item.item.time,
                    !(item.item.isChecked),
                    item.item.whenChecked,
                    item.item.dateAdded,
                  )
                )
              }
            />
          )}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // paddingHorizontal: 10,
    paddingTop: 10,
  },
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    marginBottom: 5,
  },
  listHeaderText: {
    fontWeight: "bold",
    fontSize: 20,
    color: "#808080",
  },
  listContainer: {
    height: 300,
    // borderColor: "#808080",
    // borderRadius: 25,
    // borderWidth: 0.5,
    backgroundColor: "#fff",
    height: 300,
    paddingHorizontal: 10,
  },
});

export default reminderList;
