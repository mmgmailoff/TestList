import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  checkbox: {
    width: 24,
    height: 24,
    borderWidth: 2,
    borderColor: "black",
    borderRadius: 4,
    justifyContent: "center",
    alignItems: "center",
  },
  innerCheckbox: {
    width: 8,
    height: 8,
    backgroundColor: "white",
  },
  checked: {
    backgroundColor: "blue",
  },
});
export default styles;
