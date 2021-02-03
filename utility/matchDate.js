const matchDate = (reminderDate, dateToday) => {
  if (reminderDate === "Everyday") {
    return true;
  } else if (/^\d+$/.test(reminderDate)) {
    return reminderDate == dateToday.getDate();
  } else if (reminderDate.includes(";")) {
    const days = reminderDate.split(";");
    let found = false;
    days.forEach((element) => {
      if (matchDayOfTheWeek(element, dateToday)) {
        found = true;
        return;
      }
    });
    return found;
  } else if (reminderDate.length > 3) {
    return matchDayOfTheWeek(reminderDate, dateToday);
  }
};

const matchDayOfTheWeek = (reminderDate, dateToday) => {
  const dayOfTheWeek = dateToday.getDay();
  switch (reminderDate) {
    case "Sunday":
      return dayOfTheWeek === 0;
    case "Monday":
      return dayOfTheWeek === 1;
    case "Tuesday":
      return dayOfTheWeek === 2;
    case "Wednesday":
      return dayOfTheWeek === 3;
    case "Thursday":
      return dayOfTheWeek === 4;
    case "Friday":
      return dayOfTheWeek === 5;
    case "Saturday":
      return dayOfTheWeek === 6;
  }
};

export default matchDate;
