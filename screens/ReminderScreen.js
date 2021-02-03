import React, { useEffect } from "react";
import { StyleSheet, View, TouchableOpacity, ScrollView } from "react-native";
import { useSelector } from "react-redux";
import { Ionicons } from "@expo/vector-icons";
import Colors from "../constants/Colors";

import ReminderList from "../components/ReminderUI/ReminderList";
import matchDate from "../utility/matchDate";

import { PAYMENTS } from "../data/dummy-payments";

const ReminderScreen = (props) => {
  const reminders = useSelector((state) => state.reminders.reminders);
  const remindersToday = [];
  const paymentsThisMonth = [];
  const today = new Date();

  reminders.forEach((element) => {
    if (matchDate(element.date, today)) {
      remindersToday.push(element);
    }
  });

  PAYMENTS.forEach((element) => {
    if (matchDate(element.date, today)) {
      paymentsThisMonth.push(element);
    }
  });

  return (
    <View style={styles.container}>
      <ScrollView>
        <ReminderList
          header="Today's Reminders"
          remindersToday={remindersToday}
          navigate={() => props.navigation.navigate("ReminderListScreen")}
        />
        <ReminderList header="Payments" remindersToday={paymentsThisMonth} />
      </ScrollView>
      <TouchableOpacity
        onPress={() => props.navigation.navigate("AddReminder")}
        // onPress={() => console.log(reminders)}
        style={styles.addReminderButton}
      >
        <Ionicons name={"md-add"} size={40} color="#052055" />
      </TouchableOpacity>
      {/* <TouchableOpacity
        // onPress={() => props.navigation.navigate("AddReminder")}
        onPress={() => console.log(reminders)}
        style={styles.testButton}
      >
        <Ionicons name={"md-warning"} size={40} color="#052055" />
      </TouchableOpacity> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
  },
  addReminderButton: {
    position: "absolute",
    width: 70,
    height: 70,
    backgroundColor: Colors.Blue,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    bottom: 40,
    right: 30,
  },
  testButton: {
    position: "absolute",
    width: 70,
    height: 70,
    backgroundColor: Colors.Red,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    bottom: 40,
    right: 200,
  },
});

export default ReminderScreen;
