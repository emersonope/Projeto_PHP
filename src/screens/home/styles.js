import { StyleSheet, Platform } from "react-native";

const styles = StyleSheet.create({
  container: {
    height: Platform.OS === "web" ? "100vh" : "100%",
    backgroundColor: "#292929",
  },
  conteudo: {
    width: "100%",
    height: "100%",
    justifyContent: 'center',
    alignItems: 'center'
},
  inputs: {
    marginHorizontal: 30,
    marginTop: 30,
    alignItems: "center",
  },
  input: {
    height: 50,
    width: "100%",
    margin: 5,
    padding: 15,
    textAlign: "center",
    borderRadius: 30,
    backgroundColor: "#fff",
    fontSize: 20,
  },
  button: {
    height: 50,
    width: "100%",
    alignItems: "center",
    borderRadius: 30,
    justifyContent: "center",
    backgroundColor: "#000000",
  },
  buttonLogoff: {
    borderColor: "#000000",
    backgroundColor: "transparent",
    borderWidth: 2,
    marginTop: 15,
  },
});

export default styles;
