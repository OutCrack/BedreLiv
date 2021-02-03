export const CREATE_REMINDER = "CREATE_REMINDER";
export const READ_REMINDER = "READ_REMINDER";
export const UPDATE_REMINDER = "UPDATE_REMINDER";
export const DELETE_REMINDER = "DELETE_REMINDER";
// export const CHECK_

export const createReminder = (
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
  return {
    type: CREATE_REMINDER,
    reminderData: {
      title: title,
      icon: icon,
      iconColor: iconColor,
      color: color,
      category: category,
      date: date,
      time: time,
      isChecked: isChecked,
      whenChecked: whenChecked,
      dateAdded: dateAdded,
    },
  };
};

export const deleteReminder = (id) => {
  return {
    type: DELETE_REMINDER,
    reminderData: {
      id: id,
    },
  };
  // return async (dispatch) => {
  //   try {
  //     const dbResult = await removeShift(id);
  //     console.log("------------------ Delete Shift ------------------");
  //     console.log(dbResult);
  //     dispatch({ type: DELETE_SHIFT, shiftData: { id: dbResult.insertId } });
  //   } catch (err) {
  //     console.log(err);
  //     throw err;
  //   }
  // };
};

export const updateReminder = (
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
  return {
    type: UPDATE_REMINDER,
    id: id,
    reminderData: {
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
    },
  };
};
