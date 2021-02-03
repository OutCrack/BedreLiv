import React, { useState } from "react";
import { View, Text, Pressable, Switch, StyleSheet } from "react-native";

import { Ionicons } from "@expo/vector-icons";

const reminder = (props) => {
  return (
    <Pressable style={[styles.container, {backgroundColor: props.color}]} onPress={() => console.log("todayDate")} onLongPress={props.onLongPress}>
      <View style={styles.iconContainer}>
        <Ionicons name={props.icon} size={36} color={props.iconColor} />
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.titleText}>{props.title}</Text>
      </View>
      <Switch
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={props.isChecked ? "#f5dd4b" : "#f4f3f4"}
        // ios_backgroundColor="#3e3e3e"
        onValueChange={props.checkedHandler}
        value={props.isChecked}
      />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 15,
    padding: 10,
    borderRadius: 25,
    // borderWidth: 1,
    // borderColor: "#660000",
    // backgroundColor: "#ffe5e5"
  },
  iconContainer: {

  },
  infoContainer: {
    justifyContent: "center",
    alignItems: "center"
  },
  titleText: {
    fontSize: 18,
  }
});

export default reminder;
