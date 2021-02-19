import React from "react";
import {
  View,
  Text,
  ScrollView,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import { Card } from "react-native-elements";

import styles from "./styles";
import listaProdutos from "./produtos";

function Products({ navigation }) {
  function voltar() {
    navigation.navigate("Home");
  }
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={voltar}>
        <Text style={{ color: "#F1F1F1", fontSize: 20, fontWeight: "bold" }}>
          Home
        </Text>
      </TouchableOpacity>
      <ScrollView style={styles.container}>
        <View style={styles.conteudo1}>
          <View style={styles.content}>
            {listaProdutos.map((produto, id) => {
              return (
                <Card key={id}>
                  <Card.Title style={{ color: '#9ECE2D', fontSize: 30 }}>OFERTA</Card.Title>
                  <Card.Divider />
                  <Text
                    style={{
                      fontSize: 25,
                      fontWeight: "bold",
                      color: "black",
                      marginBottom: 10,
                      alignSelf: "center",
                    }}
                  >
                    {produto.titulo}
                  </Text>
                  <Text
                    style={{
                      color: "black",
                      marginBottom: 10,
                      alignSelf: "center",
                    }}
                  >
                    {produto.descricao}
                  </Text>
                  <Card.Image
                    style={styles.image}
                    source={produto.avatar}
                  ></Card.Image>
                  <Text
                    style={{
                      fontSize: 25,
                      fontWeight: "bold",
                      color: "black",
                      marginBottom: 10,
                      alignSelf: "center",
                    }}
                  >
                    {produto.valor}
                  </Text>
                  <TouchableOpacity style={[styles.button, styles.buttonComprar]} onPress={voltar}>
                    <Text style={{ color: "#F1F1F1", fontSize: 20, fontWeight: "bold" }}>
                      Comprar
                    </Text>
                  </TouchableOpacity>
                </Card>
              );
            })}
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
export default Products;
