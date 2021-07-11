import { Colors } from "./types";

export const baseColors = {
  failure: "#ED4B9E",
  primary: "#565f79",
  primaryBright: "#53DEE9",
  primaryDark: "#0098A1",
  secondary: "#7645D9",
  success: "#31D0AA",
  warning: "#FFB237",
};

export const additionalColors = {
  binance: "#F0B90B",
  overlay: "#452a7a",
};

export const lightColors: Colors = {
  ...baseColors,
  ...additionalColors,
  background: "#FAF9FA",
  backgroundDisabled: "#E9EAEB",
  backgroundAlt: "#FFFFFF",
  cardBorder: "#E7E3EB",
  contrast: "#191326",
  dropdown: "#F6F6F6",
  dropdownDeep: "#EEEEEE",
  invertedContrast: "#FFFFFF",
  input: "#eeeaf4",
  inputSecondary: "#d7caec",
  tertiary: "#EFF4F5",
  text: "#280D5F",
  textDisabled: "#BDC2C4",
  textSubtle: "#565f79",
  disabled: "#E9EAEB",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #E5FDFF 0%, #F3EFFF 100%)",
    inverseBubblegum: "linear-gradient(139.73deg, #F3EFFF 0%, #E5FDFF 100%)",
    cardHeader: "linear-gradient(111.68deg, #F2ECF2 0%, #E8F2F6 100%)",
    blue: "linear-gradient(180deg, #A7E8F1 0%, #94E1F2 100%)",
    violet: "linear-gradient(180deg, #E2C9FB 0%, #CDB8FA 100%)",
    violetAlt: "linear-gradient(180deg, #CBD7EF 0%, #9A9FD0 100%)",
    gold: "linear-gradient(180deg, #FFD800 0%, #FDAB32 100%)",
  },
};

export const darkColors: Colors = {
  ...baseColors,
  ...additionalColors,
  secondary: "#6a7eff",
  background: "#08060B",
  backgroundDisabled: "#3c3742",
  backgroundAlt: "#333238",
  cardBorder: "#adadb8",
  contrast: "#FFFFFF",
  dropdown: "#080145",
  dropdownDeep: "#030130",
  invertedContrast: "#141326",
  input: "#565f79",
  inputSecondary: "#4b4f75",
  primaryDark: "#0046a1",
  tertiary: "#353547",
  text: "#eef2ff",
  textDisabled: "#616671",
  textSubtle: "#adbbd2",
  disabled: "#4b5363",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #313D5C 0%, #2a2c54 100%)",
    inverseBubblegum: "linear-gradient(139.73deg, #2a2c54 0%, #313D5C 100%)",
    cardHeader: "linear-gradient(166.77deg, #3B4155 0%, #303545 100%)",
    blue: "linear-gradient(180deg, #00487f 0%, #7fc7db 100%)",
    violet: "linear-gradient(180deg, #6C4999 0%, #6D4DB2 100%)",
    violetAlt: "linear-gradient(180deg, #434575 0%, #66578D 100%)",
    gold: "linear-gradient(180deg, #FFD800 0%, #FDAB32 100%)",
  },
};
