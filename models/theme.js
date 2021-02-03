import { back } from "react-native/Libraries/Animated/src/Easing";

class theme {
  constructor ( id, title, background, icon, switchOff, switchOn) {
    this.id = id;
    this.title = title;
    this.background = background;
    this.icon = icon;
    // this.switchOff = switchOff;
    // this.switchOn = switchOn;
  }
}

export default theme;