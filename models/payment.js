class  Payment {
  constructor(
    id,
    title,
    icon,
    iconColor,
    color,
    category,
    amount,
    date,
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
    this.amount = amount;
    this.isChecked = isChecked;
    this.whenChecked = whenChecked;
    this.dateAdded = dateAdded;
  }
}

export default Payment;