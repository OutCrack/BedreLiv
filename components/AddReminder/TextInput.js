import React from "react";
import { TextInput, StyleSheet } from "react-native";

const textInput = (props) => {
  return (
    <TextInput
      placeholder={props.placeholder}
      underlineColorAndroid="transparent"
      {...props}
      style={styles.textInput}
    />
  );
};

const styles = StyleSheet.create({
  textInput: {
    marginHorizontal: 20,
    marginTop: 20,
    fontSize: 18,
    borderColor: "#222322",
    borderRadius: 10,
    borderWidth: 1,
    padding: 10,
  },
});

export default textInput;
