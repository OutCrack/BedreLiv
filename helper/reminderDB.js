import * as SQLite from "expo-sqlite";

const reminderDb = SQLite.openDatabase("reminder.db");

export const init = () => {
  const promise = new Promise((resolve, reject) => {
    reminderDb.transaction((tx) => {
      tx.executeSql(
        "CREATE TABLE IF NOT EXISTS reminders (id INTEGER PRIMARY KEY NOT NULL, title TEXT NOT NULL, icon TEXT NOT NULL, iconColor TEXT NOT NULL, color TEXT NOT NULL, category TEXT, date TEXT NOT NULL, time TEXT, isChecked INTEGER, whenChecked INTEGER, dateAdded TEXT NOT NULL);",
        [],
        // SUCCESS FUNCTION
        () => {
          resolve();
        },
        // EROOR FUNCTION
        (_, err) => {
          reject(err);
        }
      );
    });
  });
  return promise;
};

export const insertReminder = (
  title,
  icon,
  iconColor,
  color,
  category,
  date,
  time,
  isChecked,
  whenChecked,
  dateAdded
) => {
  const promise = new Promise((resolve, reject) => {
    reminderDb.transaction((tx) => {
      tx.executeSql(
        "INSERT INTO reminders (title, icon, iconColor, color, category, date, time, isChecked, whenChecked, dateAdded);",
        [
          title,
          icon,
          iconColor,
          color,
          category,
          date,
          time,
          isChecked,
          whenChecked,
          dateAdded,
        ],
        // SUCCESS FUNCTION
        (_, result) => {
          resolve(result);
        },
        // ERROR FUNCTION
        (_, err) => {
          reject(err);
        }
      );
    });
  });
  return promise;
};

export const editReminder = (
  id,
  title,
  icon,
  iconColor,
  color,
  category,
  date,
  time,
  isChecked,
  whenChecked,
  dateAdded
) => {
  const promise = new Promise((resolve, reject) => {
    reminderDb.transaction((tx) => {
      tx.executeSql(
        'UPDATE reminders SET title = ?, icon = ?, iconColor = ?, color = ?, category = ?, date = ?, time = ?, isChecked = ?, whenChecked = ?, dateAdded = ? WHERE id = ?;',
        [
          title,
          icon,
          iconColor,
          color,
          category,
          date,
          time,
          isChecked,
          whenChecked,
          dateAdded,
          id,
        ],
        // SUCCESS FUNCTION
        (_, result) => {
          resolve(result);
        },
        // ERROR FUNCTION
        (_, err) => {
          reject(err);
        }
      );
    });
  });
  return promise;
};

export const removeReminder = (id) => {
  const promise = new Promise((resolve, reject) => {
    reminderDb.transaction((tx) => {
      tx.executeSql(
        `DELETE FROM reminders WHERE id = ?;`,
        [id],
        // SUCCESS FUNCTION
        (_, result) => {
          resolve(result);
        },
        // ERROR FUNCTION
        (_, err) => {
          reject(err);
        }
      );
    });
  });
  return promise;
};

export const fetchReminders = (props) => {
  const promise = new Promise((resolve, reject) => {
    reminderDb.transaction((tx) => {
      tx.executeSql(
        props,
        [],
        // SUCCESS FUNCTION
        (_, result) => {
          resolve(result);
        },
        // ERROR FUNCTION
        (_, err) => {
          reject(err);
        }
      );
    });
  });
  return promise;
};