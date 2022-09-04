import React from "react";
import { Image, ScrollView, Text, View } from "react-native";
import { Button } from "react-native-paper";
import { useRecoilState, useRecoilValue } from "recoil";
import AuthStatus from "../../atoms/AuthStatus";
import styles from "./styles";

const Profile = () => {
  const [{ isAuth }, setAuthStatus] = useRecoilState(AuthStatus);
  return (
    <ScrollView style={styles.scrollContainer}>
      {!isAuth && (
        <View style={styles.container}>
          <Text style={styles.titleLogin}>
            Para maiores experiências no aplicativo, Por favor, faça login ou
            crie sua conta agora!
          </Text>

          <Button
            mode="contained"
            uppercase={false}
            style={styles.button}
            color="white"
            labelStyle={styles.buttonLabelStyle}
          >
            Entrar
          </Button>
          <Button
            mode="contained"
            uppercase={false}
            style={styles.button}
            color="white"
            labelStyle={styles.buttonLabelStyle}
          >
            Cadastrar-se
          </Button>
        </View>
      )}
      <Text
        style={{ textAlign: "center", marginTop: 150, marginHorizontal: 16 }}
      >
        App feito por Daniel Mota | Todos direitos reservados 2022.
      </Text>
    </ScrollView>
  );
};

export default Profile;
