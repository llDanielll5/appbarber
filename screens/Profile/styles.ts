import { StyleSheet } from "react-native";
import { AppColors } from "../../constants/AppColors";

const styles = StyleSheet.create({
  scrollContainer: {
    backgroundColor: "#fffaf5",
  },
  container: {
    marginHorizontal: 16,
    flex: 1,
  },
  titleLogin: {
    marginTop: "50%",
    fontSize: 20,
    fontWeight: "bold",
    color: AppColors.secondary,
    textAlign: "center",
  },
  button: {
    backgroundColor: "white",
    borderRadius: 12,
    borderColor: AppColors.primary,
    borderWidth: 2,
    marginVertical: 8,
    marginTop: 20,
  },
  buttonLabelStyle: {
    color: AppColors.primary,
    fontWeight: "bold",
    fontSize: 18,
  },
});

export default styles;
