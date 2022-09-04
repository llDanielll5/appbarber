import { Formik } from "formik";
import React, { ElementRef, useEffect, useRef, useState } from "react";
import { ScrollView, Text, View } from "react-native";
import * as Yup from "yup";
import FirstStepRegister from "./steps/first";
import SecondStepsRegister from "./steps/second";
import {
  createUserWithEmailAndPassword,
  getAuth,
  updateProfile,
  deleteUser,
} from "firebase/auth";
import styles from "./styles";
import app from "../../firebase/base";
import { addNewDoc, addNewUser, userExists } from "../../firebase/functions";
import { useRecoilState } from "recoil";
import UserData from "../../atoms/UserData";
import AuthStatus from "../../atoms/AuthStatus";
import { SwitchRegisterErrors } from "../../utils/switchRegisterErrors";
import { ClientType } from "../../enums";
import Loading from "../../components/Loading";
import AlertModal from "../../components/AlertModal";

const Register = ({ navigation }: any) => {
  const auth = getAuth(app);
  const { navigate } = navigation;
  const [cardIndex, setCardIndex] = useState(-1);
  const [cardValue, setCardValue] = useState<ClientType | any>(undefined);
  const [stepsRegister, setStepsRegister] = useState(0);
  const [hidePassword, setHidePassword] = useState(true);
  const [{ isAuth }, setAuthStatus] = useRecoilState(AuthStatus);
  const [userData, setUserData] = useRecoilState(UserData);
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

  const changeRecoilState = async (
    authUser: any,
    { username, email, password }: any
  ) => {
    const userValues = {
      id: authUser.user.uid,
      name: username,
      email: email,
      age: "",
      clientType: cardValue,
      appointments: [],
    };

    addNewUser(userValues, authUser.user.uid)
      .then(async () => {
        await updateProfile(authUser.user, { displayName: username }).then(
          () => {
            setUserData(userValues);
            setAuthStatus({ isAuth: true });
          }
        );
      })
      .catch((error: any) => {
        const user = auth.currentUser;
        deleteUser(user).then(() => {
          setLoading(false);
          auth.signOut();
        });
        console.log(error.message);
      });
  };

  const handleRegisterForm = async ({ username, email, password }) => {
    setLoading(true);
    try {
      const authUser = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      if (authUser) changeRecoilState(authUser, { username, email, password });
    } catch (error: any) {
      setLoading(false);
      SwitchRegisterErrors(error);
    }
  };

  useEffect(() => {
    if (isAuth) {
      setLoading(false);
      navigate("HomeNav");
    }
  }, [isAuth]);

  return (
    <ScrollView style={styles.container}>
      <AlertModal
        visible={loading}
        message="Estamos criando sua conta..."
        animationType="fade"
        loadingComponent={
          <Loading
            isLoading={loading}
            size={30}
            style={{ alignSelf: "center" }}
          />
        }
      />
      <View style={{ marginHorizontal: 16 }}>
        <Formik
          initialValues={{ username: "", email: "", password: "" }}
          onSubmit={handleRegisterForm}
          validationSchema={formSchema}
        >
          {({ values, errors, touched, setFieldValue, submitForm }) => (
            <View>
              <Text style={styles.title}>
                Olá! Antes de começarmos diga quem você é:
              </Text>

              {stepsRegister === 0 && (
                <FirstStepRegister
                  cardIndex={cardIndex}
                  setCardIndex={setCardIndex}
                  cardValue={cardValue}
                  setCardValue={setCardValue}
                  onPressContinue={() => setStepsRegister(1)}
                />
              )}
              {stepsRegister === 1 && (
                <SecondStepsRegister
                  cardValue={cardValue}
                  errors={errors}
                  values={values}
                  touched={touched}
                  hidePassword={hidePassword}
                  setHidePassword={setHidePassword}
                  setFieldValue={setFieldValue}
                  submitForm={submitForm}
                />
              )}
            </View>
          )}
        </Formik>
      </View>
    </ScrollView>
  );
};

export default Register;
