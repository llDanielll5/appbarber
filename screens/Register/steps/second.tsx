import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button, TextInput } from "react-native-paper";
import { AppColors } from "../../../constants/AppColors";
import { ClientType } from "../../../enums";

interface SecondStepsRegisterProps {
  cardValue: ClientType;
  values: any;
  errors: any;
  touched: any;
  setFieldValue: any;
  submitForm: any;
  hidePassword: boolean;
  setHidePassword: any;
}

const SecondStepsRegister: React.FC<SecondStepsRegisterProps> = (props) => {
  const {
    cardValue,
    values,
    errors,
    touched,
    setFieldValue,
    submitForm,
    hidePassword,
    setHidePassword,
  } = props;

  const HidePassword = (hide: any, setHide: any) => (
    <TextInput.Icon
      name={hide ? "eye" : "eye-off"}
      style={styles.inputIconStyle}
      color={AppColors.orange}
      animated
      onPress={() => {
        setHide(!hide);
      }}
      forceTextInputFocus={false}
    />
  );
  return (
    <View style={{ height: "20%" }}>
      <Text style={styles.title}>
        {`Você é um: `}
        <Text style={styles.cardValue}>{cardValue ?? ""}</Text>
      </Text>
      <Text style={styles.info}>Como quer ser chamado?</Text>
      <TextInput
        mode="flat"
        autoCapitalize="none"
        value={values.username}
        onChangeText={(text) => setFieldValue("username", text)}
        underlineColor="transparent"
        activeUnderlineColor="transparent"
        outlineColor="transparent"
        activeOutlineColor="transparent"
        style={styles.input}
      />
      {errors.username && touched.username && (
        <Text style={styles.error}>{errors.username}</Text>
      )}
      <Text style={styles.info}>Seu e-mail</Text>
      <TextInput
        mode="flat"
        autoCapitalize="none"
        value={values.email}
        onChangeText={(text) => setFieldValue("email", text)}
        underlineColor="transparent"
        activeUnderlineColor="transparent"
        outlineColor="transparent"
        activeOutlineColor="transparent"
        style={styles.input}
      />
      {errors.email && touched.email && (
        <Text style={styles.error}>{errors.email}</Text>
      )}

      <Text style={styles.info}>Sua senha</Text>
      <TextInput
        mode="flat"
        autoCapitalize="none"
        value={values.password}
        secureTextEntry={hidePassword}
        onChangeText={(text) => setFieldValue("password", text)}
        underlineColor="transparent"
        activeUnderlineColor="transparent"
        outlineColor="transparent"
        activeOutlineColor="transparent"
        style={styles.input}
        right={HidePassword(hidePassword, setHidePassword)}
      />
      {errors.password && touched.password && (
        <Text style={styles.error}>{errors.password}</Text>
      )}

      <Button
        mode="contained"
        uppercase={false}
        style={styles.button}
        color="white"
        labelStyle={styles.buttonLabelStyle}
        onPress={submitForm}
      >
        {`Cadastrar-se`}
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginVertical: 10,
    color: AppColors.secondary,
    textAlign: "center",
  },
  cardValue: {
    fontSize: 20,
    fontWeight: "bold",
    marginVertical: 10,
    color: AppColors.orange,
    textAlign: "center",
  },
  input: {
    backgroundColor: "white",
    height: 40,
    marginTop: 5,
    borderTopRightRadius: 8,
    borderTopLeftRadius: 8,
    borderBottomRightRadius: 8,
    borderBottomLeftRadius: 8,
  },
  info: {
    fontSize: 16,
    fontWeight: "bold",
    color: AppColors.secondary,
    marginTop: 10,
  },
  button: {
    backgroundColor: AppColors.orange,
    borderRadius: 8,
    marginVertical: 8,
    marginTop: 30,
    height: 40,
    width: "90%",
    alignSelf: "center",
  },
  buttonLabelStyle: {
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
    lineHeight: 22,
  },
  error: {
    color: "red",
    fontSize: 14,
    marginTop: 5,
  },
  inputIconStyle: {
    zIndex: 2,
  },
});

export default SecondStepsRegister;
