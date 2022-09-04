import React from "react";
import styles from "./styles";
import { View, Image, ScrollView, Text } from "react-native";
import HomeInfo from "../../components/HomeInfo";
import { Button } from "react-native-paper";

const Home = () => {
  const image =
    "https://cdn.pixabay.com/photo/2016/06/12/21/41/barber-1453064__340.jpg";
  return (
    <ScrollView style={styles.scrollContainer}>
      <View style={styles.container}>
        <HomeInfo
          title={"Barbearia Top!"}
          description={
            "A barbearia top trabalha sempre para trazer a auto estima e confiança de todos seus clientes. Contamos com atendimentos especializados e profissionais excelentes."
          }
        />
        <Image source={{ uri: image }} style={styles.img} />

        <HomeInfo
          title="Ótimas avaliações!"
          description="A Barbearia Logo Barb sempre mantendo as melhores avaliações, para trazer para o cliente a confiabilidade do serviço!"
        />

        <HomeInfo
          title="Agende seu horário!"
          description="Agende seu horário e venha nos conhecer!"
        />

        <Button
          mode="contained"
          uppercase={false}
          style={styles.button}
          color="white"
          labelStyle={styles.buttonLabelStyle}
        >
          Agendar Horário!
        </Button>

        <Text style={{ textAlign: "center", marginBottom: 30 }}>
          App feito por Daniel Mota | Todos direitos reservados 2022.
        </Text>
      </View>
    </ScrollView>
  );
};

export default Home;
