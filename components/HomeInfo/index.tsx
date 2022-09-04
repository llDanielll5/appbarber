import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { AppColors } from "../../constants/AppColors";

interface HomeInfoProps {
  title: string;
  description: string;
}

const HomeInfo: React.FC<HomeInfoProps> = (props) => {
  const { title, description } = props;
  return (
    <>
      <Text style={styles.nameBarber}>{title}</Text>
      <Text style={styles.bio}>{description}</Text>
    </>
  );
};

const styles = StyleSheet.create({
  nameBarber: {
    fontSize: 25,
    fontWeight: "bold",
    color: AppColors.secondary,
    textAlign: "center",
    marginTop: 20,
    marginBottom: 10,
  },
  bio: {
    fontSize: 16,
    color: AppColors.primary,
    textAlign: "center",
  },
});

export default HomeInfo;
