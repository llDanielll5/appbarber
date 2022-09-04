import * as React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { IconButton } from "react-native-paper";
import Home from "../screens/Home";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { AppColors } from "../constants/AppColors";
import Nav from "../components/Nav";
import AboutUs from "../screens/AboutUs";
import Profile from "../screens/Profile";
import Onboarding from "../screens/Onboarding";
import Register from "../screens/Register";
import { useRecoilState, useResetRecoilState, useSetRecoilState } from "recoil";
import app from "../firebase/base";
import { getAuth } from "@firebase/auth";
import UserData from "../atoms/UserData";
import AuthStatus from "../atoms/AuthStatus";

export default function Navigation() {
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
}

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Onboarding"
        component={Onboarding}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Register"
        component={Register}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="HomeNav"
        component={BottomTabNavigator}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

const BottomTab = createMaterialTopTabNavigator();

function BottomTabNavigator() {
  const auth = getAuth(app);
  const { navigate } = useNavigation();
  const resetUserData = useResetRecoilState(UserData);
  const [{ isAuth }, setAuthStatus] = useRecoilState(AuthStatus);
  const logout = async () => {
    await auth.signOut().then(() => {
      setAuthStatus({ isAuth: false });
      resetUserData();
    });
  };

  React.useEffect(() => {
    if (!isAuth) navigate("Onboarding");
  }, [isAuth]);
  return (
    <>
      <Nav onPressLogin={() => navigate("Login")} onPressLogout={logout} />
      <BottomTab.Navigator
        initialRouteName="Home"
        tabBarPosition="bottom"
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused }) => {
            let iconName;

            switch (route.name) {
              case "Home":
                iconName = "home";
                break;
              case "About":
                iconName = "account-group";
                break;
              case "Profile":
                iconName = "account";
                break;
              default:
                break;
            }

            return (
              <IconButton
                icon={iconName}
                color={focused ? AppColors.primary : "gray"}
                size={25}
              />
            );
          },
          tabBarShowLabel: false,
          tabBarStyle: {
            backgroundColor: AppColors.background,
          },
          tabBarIconStyle: {
            margin: 0,
            padding: 0,
            bottom: 10,
          },
          tabBarIndicatorStyle: { width: 0 },
        })}
      >
        <BottomTab.Screen name="Home" component={Home} />
        <BottomTab.Screen name="About" component={AboutUs} />
        <BottomTab.Screen name="Profile" component={Profile} />
      </BottomTab.Navigator>
    </>
  );
}
