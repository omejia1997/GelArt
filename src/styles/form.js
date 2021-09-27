import { StyleSheet } from "react-native";
import colors from "./colors";

const formStyles = StyleSheet.create({
  containerInput: {
    height: 59,
    backgroundColor: "#364057",
    borderRadius: 15,
    borderWidth: 1,
    borderColor: "solid rgba(252,250,250,1)",
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 3,
      height: 3,
    },
    elevation: 5,
    shadowOpacity: 0.36,
    shadowRadius: 0,
    flexDirection: "row",
  },
  input: {
    height: 59,
    width: "75%",
    backgroundColor: "#364057",
    fontSize: 14,
  },
  btnSucess: {
    height: 55,
    color: "white",
    backgroundColor: "rgba(3,55,114,1)",
    borderRadius: 18,
    borderColor: "rgba(255,255,255,1)",
    borderWidth: 2,
    shadowColor: "rgba(0,0,0,1)",
    width: "100%",
    elevation: 5,
    shadowOpacity: 0.24,
    shadowRadius: 0,
    overflow: "visible",
    justifyContent: "center",
  },
  textButton: {
    width: "100%",
    textAlign: "center",
    color: "rgba(255,255,255,1)",
    alignSelf: "center",
  },
  icon: {
    color: "rgba(255,255,255,1)",
    fontSize: 33,
    width: 33,
    height: 33,
    marginLeft: 15,
    alignSelf: "center",
  },
});

export default formStyles;
