import React, { useState } from "react";
import * as Yup from "yup";
import { Image, StyleSheet, View } from "react-native";
import { AppColors } from "../../constants/AppColors";
import Logo from "../../assets/images/BarberLogo.png";
import { Button, TextInput } from "react-native-paper";
import { Formik } from "formik";
import { SwitchLoginErrors } from "../../utils/switchLoginErrors";
import Input from "../../components/Input";
import { getAuth, signInWithEmailAndPassword } from "@firebase/auth";
import app from "../../firebase/base";
import { getUserInfos } from "../../firebase/functions";

const Onboarding = ({ navigation }: any) => {
  const auth = getAuth(app);
  const { navigate } = navigation;
  const [openLogin, setOpenLogin] = useState(false);
  const [hidePassword, setHidePassword] = useState(true);
  const [{ isAuth }, setAuthStatus] = useRecoilState(AuthStatus);
  const [loading, setLoading] = useState(false);
  const formSchema = Yup.object().shape({
    email: Yup.string()
      .required("O email é obrigatório!")
      .email("Digite um email válido"),
    password: Yup.string()
      .required("A senha é obrigatória!")
      .min(8, "A senha deve ter no mínimo 8 caracteres")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
        "A senha deve conter letras maiúsculas, minúsculas e números"
      ),
  });
  const changeRecoilState = async (authUser: any) => {
    const userResult = await getUserInfos(authUser.user.uid);
    // setUserData({ ...userResult })
    // setAuthStatus({ isAuthenticated: true})
  };
  const handleLoginForm = async ({ email, password }) => {
    setLoading(true);
    try {
      const authUser = await signInWithEmailAndPassword(auth, email, password);
      if (authUser) changeRecoilState(authUser);
    } catch (error: any) {
      setLoading(false);
      SwitchLoginErrors(error);
    }
  };
  const openLoginForms = ({ handleSubmit }) => {
    if (!openLogin) {
      setOpenLogin(true);
    } else {
      handleSubmit();
    }
  };
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

  useEffect(() => {
    if (isAuthenticated) {
      setLoading(false);
      navigate("HomeNav");
    }
  }, [isAuthenticated]);
  return (
    <View style={styles.container}>
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={handleLoginForm}
        validationSchema={formSchema}
      >
        {({ errors, values, touched, handleSubmit, setFieldValue }) => (
          <View style={styles.innerContainer}>
            <Image source={Logo} style={styles.logo} />
            {openLogin && (
              <View style={styles.loginContainer}>
                <Input
                  mode="flat"
                  autoCapitalize="none"
                  label="Email"
                  touched={touched.email}
                  error={errors.email}
                  errorMessage={errors.email}
                  value={values.email}
                  onChangeText={(text) => setFieldValue("email", text)}
                />
                <Input
                  mode="flat"
                  autoCapitalize="none"
                  label="Senha"
                  secureTextEntry={hidePassword}
                  touched={touched.password}
                  error={errors.password}
                  errorMessage={errors.password}
                  value={values.password}
                  onChangeText={(text) => setFieldValue("password", text)}
                  right={HidePassword(hidePassword, setHidePassword)}
                />
              </View>
            )}
            <Button
              onPress={() => openLoginForms({ handleSubmit })}
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
              onPress={() => navigate("Register")}
            >
              Cadastrar-se
            </Button>
            <Button
              mode="contained"
              uppercase={false}
              style={styles.buttonGoogle}
              color="white"
              labelStyle={styles.buttonLabelStyleGoogle}
              icon={({ size, color }) => (
                <Image
                  source={require("../../assets/images/GoogleIcon.png")}
                  style={{ width: 25, height: 25 }}
                />
              )}
            >
              Entrar com Google
            </Button>
          </View>
        )}
      </Formik>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: AppColors.orangeBackground,
    flex: 1,
  },
  innerContainer: {
    marginHorizontal: 30,
  },
  logo: {
    width: "90%",
    height: 300,
    marginTop: 36,
  },
  loginContainer: {
    marginTop: 20,
  },
  button: {
    backgroundColor: AppColors.orange,
    borderRadius: 8,
    marginVertical: 8,
    marginTop: 20,
    height: 40,
  },
  buttonGoogle: {
    backgroundColor: "white",
    borderRadius: 8,
    marginTop: 20,
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
  buttonLabelStyleGoogle: {
    color: AppColors.orange,
    fontWeight: "bold",
    fontSize: 20,
    lineHeight: 22,
  },
  inputIconStyle: {
    zIndex: 2,
  },
});
export default Onboarding;
