import { StyleSheet, Platform } from "react-native";

const styles = StyleSheet.create({
  container: {
    height: Platform.OS === "web" ? "100vh" : "100%",
    backgroundColor: "#4e4e4e",
  },
  conteudo1: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    alignItems: "center",
  },
  content: {
    width: "100%",
    backgroundColor: "#292929",
  },
  image: {
    resizeMode: "contain",
  },
  button: {
    height: 50,
    marginTop: 24,
    margin: 15,
    alignItems: "center",
    borderRadius: 30,
    justifyContent: "center",
    backgroundColor: "#000000",
  },
  buttonComprar: {
    marginHorizontal: 80,
    backgroundColor: '#000000'
  }
});

export default styles;
