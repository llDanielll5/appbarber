import { StyleSheet } from "react-native";
import { AppColors } from "../../constants/AppColors";

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 16,
  },
  img: {
    marginTop: 30,
    width: "100%",
    height: 300,
    borderRadius: 12,
  },
  scrollContainer: {
    backgroundColor: "#fffaf5",
  },
  button: {
    backgroundColor: "white",
    borderRadius: 12,
    borderColor: AppColors.primary,
    borderWidth: 1,
    marginVertical: 8,
    marginBottom: 30,
  },
  buttonLabelStyle: {
    color: AppColors.primary,
    fontWeight: "bold",
  },
});

export default styles;
