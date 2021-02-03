import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const pickDays = (props) => {
  const [mo, setMo] = useState(false);
  const [tu, setTu] = useState(false);
  const [we, setWe] = useState(false);
  const [th, setTh] = useState(false);
  const [fr, setFr] = useState(false);
  const [Sa, setSa] = useState(false);
  const [Su, setSu] = useState(false);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.days}
        onPress={() => props.selectDay("Mo")}
      >
        <Text>Mo</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.days}
        onPress={() => props.selectDay("Tu")}
      >
        <Text>Tu</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.days}
        onPress={() => props.selectDay("We")}
      >
        <Text>We</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.days}
        onPress={() => props.selectDay("Th")}
      >
        <Text>Th</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.days}
        onPress={() => props.selectDay("Fr")}
      >
        <Text>Fr</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.days}
        onPress={() => props.selectDay("Sa")}
      >
        <Text>Sa</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.days}
        onPress={() => props.selectDay("Su")}
      >
        <Text>Su</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginTop: 15
  },
  days: {
    borderWidth: 1,
    borderRadius: 25,
    borderColor: "#a9a9a9",
    padding: 8,
    marginHorizontal: 10,
  },
});

export default pickDays;
