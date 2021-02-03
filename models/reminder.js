class Reminder {
  constructor(
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
    dateAdded,
  ) {
    this.id = id;
    this.title = title;
    this.icon = icon;
    this.iconColor = iconColor;
    this.color = color;
    this.category = category;
    this.date = date;
    this.time = time;
    this.isChecked = isChecked;
    this.whenChecked = whenChecked;
    this.dateAdded = dateAdded;
  }
}

export default Reminder;