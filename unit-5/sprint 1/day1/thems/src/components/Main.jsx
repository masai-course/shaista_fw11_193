import React, { useContext } from "react";

import { theme } from "../contexts/theme";
import {ThemeSwitch} from "../contexts/ThemeSwitch"

import { ThemeContext } from "../contexts/ThemeProvider";


const getStyles = (mode) => ({
  header: {
    fontSize: 34,
    fontWeight: "400"
  },
  app1: {
    height: "100%",
    width: "100%",
    padding: 16,
    backgroundColor: theme[mode].backgroundColor
  },
  text: {
    fontWeight: "200",
    color: theme[mode].color
  },
  theme: {
    color: theme[mode].highlight
  }
});

export default function Main() {
  const { mode } = useContext(ThemeContext);
  const styles = getStyles(mode);
  return (
    <div style={styles.app1}>
      <h1 style={(styles.header, styles.text)}>Have a nice day... PAVAN KALYAN!</h1>
      <h2 style={styles.text}>
        Current theme is <span style={styles.theme}>{mode}</span> mode
      </h2>
      <ThemeSwitch />
    </div>
  );
}
