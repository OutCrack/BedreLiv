import React from "react";
import { View, FlatList, Pressable, StyleSheet } from "react-native";

import { THEMES } from "../../data/dummy-theme";

const pickTheme = (props) => {
  return (
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
            onPress={() => console.log("Yey")}
          />
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  pickThemeContainer: {
    alignItems: "center",
    marginTop: 30,
    height: 200
  },
  theme: {
    width: 50,
    height: 50,
    borderRadius: 50,
    backgroundColor: "#d9675b",
    margin: 10
  },
});

export default pickTheme;
