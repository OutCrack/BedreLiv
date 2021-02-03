import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";

import ReminderScreen from "../screens/ReminderScreen";
import AddReminderScreen from "../screens/AddReminderScreen";
import SettingsDrawer from "../screens/SettingsDrawer";
import ReminderListScreen from "../screens/ReminderListScreen";

// const Drawer = createDrawerNavigator();

// const HomeScreen = () => {
//   return (
//     <Drawer.Navigator initialRouteName="Reminder">
//       <Drawer.Screen name="Reminder" component={ReminderScreen} />
//       <Drawer.Screen name="Settings" component={SettingsDrawer} />
//     </Drawer.Navigator>
//   );
// };

const MainStack = createStackNavigator();

const AppNavigation = (props) => {
  return (
    <NavigationContainer>
      <MainStack.Navigator>
        <MainStack.Screen
          name="Home"
          component={ReminderScreen}
          options={{ title: "Better Life" }}
        />
        <MainStack.Screen
          name="AddReminder"
          component={AddReminderScreen}
          options={{ title: "Add Reminder" }}
        />
        <MainStack.Screen
          name="ReminderListScreen"
          component={ReminderListScreen}
          options={{title: "All Reminders"}}
        />
      </MainStack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
