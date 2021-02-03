import React from "react";
import { View, FlatList, StyleSheet, Alert } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import * as remindersActions from "../store/actions/reminder";

import ReminderListItem from "../components/ReminderUI/ReminderListItem";

const ReminderListScreen = (props) => {
  const dispatch = useDispatch();
  const reminders = useSelector((state) => state.reminders.reminders);

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
      <FlatList
        data={reminders}
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
                  !item.item.isChecked,
                  item.item.whenChecked,
                  item.item.dateAdded
                )
              )
            }
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default ReminderListScreen;
