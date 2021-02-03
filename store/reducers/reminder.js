import {
  CREATE_REMINDER,
  READ_REMINDER,
  UPDATE_REMINDER,
  DELETE_REMINDER,
} from "../actions/reminder";

import { REMINDERS } from "../../data/dummy-reminders";

import Reminder from "../../models/reminder";

const initalState = {
  reminders: REMINDERS,
};

export default (state = initalState, action) => {
  switch (action.type) {
    case CREATE_REMINDER:
      const newReminder = new Reminder(
        new Date().toString(),
        action.reminderData.title,
        action.reminderData.icon,
        action.reminderData.iconColor,
        action.reminderData.color,
        action.reminderData.category,
        action.reminderData.date,
        action.reminderData.time,
        action.reminderData.isChecked,
        action.reminderData.whenChecked,
        action.reminderData.dateAdded
      );
      return {
        reminders: state.reminders.concat(newReminder),
      };
    case DELETE_REMINDER:
      console.log("DELETE_REMINDER reducer");
      return {
        ...state,
        reminders: state.reminders.filter(
          (reminder) => reminder.id !== action.reminderData.id
        ),
      };
    case READ_REMINDER:
      return {
        state,
      };
    case UPDATE_REMINDER:
      console.log(action.id);
      const updateReminder = new Reminder(
        action.id,
        action.reminderData.title,
        action.reminderData.icon,
        action.reminderData.iconColor,
        action.reminderData.color,
        action.reminderData.category,
        action.reminderData.date,
        action.reminderData.time,
        action.reminderData.isChecked,
        action.reminderData.whenChecked,
        action.reminderData.dateAdded
      );
      const reminderIndex = state.reminders.findIndex(
        (reminder) => reminder.id === action.id
      );
      const updatedReminders = [...state.reminders];
      updatedReminders[reminderIndex] = updateReminder;
      return {
        ...state,
        reminders: updatedReminders,
      };
    default:
      return state;
  }
};
