import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const SettingsDrawer = () => {
  return (
    <View style={styles.container}>
      <Text>SettingsDrawer</Text>
      <Text>Drawer</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default SettingsDrawer;