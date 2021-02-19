import { StyleSheet, Platform } from 'react-native';

const styles = StyleSheet.create({
  conteiner: {
        height: Platform.OS === "web" ? "100vh" : "100%",
        backgroundColor: '#292929',
    },
    conteudo: {
        width: "100%",
        height: "100%",
        justifyContent: 'center',
        alignItems: 'center'
    },
    titulo: {
        color: "white",
        fontSize: 32
    },
    inputs: {
        width: "100%",
        padding: 8,
        alignItems: 'center',
        
    },
    input: {
        backgroundColor: "white",
        width: "94%",
        padding: 8,
        marginTop: 12,
        height: 50,
        margin: 5,
        borderRadius: 30,
    },
    btn:{
        height: 70,
        width: 70,
        margin: 15,
        alignItems: "center",
        borderRadius: 50,
        justifyContent: "center",
        backgroundColor: "#000000",
    },
    texto:{
        fontSize: 18,
        color: "white",
        textAlign: 'center'
    }
})

export default styles;