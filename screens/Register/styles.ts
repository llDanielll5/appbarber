import { StyleSheet } from "react-native";
import { AppColors } from "../../constants/AppColors";

const styles = StyleSheet.create({
  container: {
    backgroundColor: AppColors.orangeBackground,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: AppColors.secondary,
    textAlign: "center",
    marginTop: 200,
  },
  cards: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 70,
  },
  cardSelected: {
    borderWidth: 2,
    borderColor: AppColors.orange,
    borderRadius: 12,
  },
  button: {
    backgroundColor: AppColors.orange,
    borderRadius: 8,
    marginVertical: 8,
    marginTop: 60,
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
});

export default styles;
