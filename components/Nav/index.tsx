import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { IconButton } from "react-native-paper";
import { useRecoilValue } from "recoil";
import AuthStatus from "../../atoms/AuthStatus";
import { AppColors } from "../../constants/AppColors";

interface NavProps {
  onPressLogin: () => void;
  onPressLogout: () => void;
}

const Nav: React.FC<NavProps> = (props) => {
  const { onPressLogin, onPressLogout } = props;
  const { isAuth } = useRecoilValue(AuthStatus);
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <Text style={styles.logo}>Logo Barb</Text>
        <TouchableOpacity
          onPress={() => {
            if (isAuth) {
              onPressLogout();
            } else {
              onPressLogin();
            }
          }}
        >
          <IconButton
            icon={!isAuth ? "login" : "logout"}
            size={20}
            style={{ margin: 0 }}
            color={AppColors.primary}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: AppColors.background,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "lightgray",
    padding: 5,
  },
  innerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    width: "100%",
    paddingHorizontal: 16,
  },
  logo: {
    fontSize: 20,
    fontWeight: "bold",
    color: AppColors.primary,
  },
});

export default Nav;
