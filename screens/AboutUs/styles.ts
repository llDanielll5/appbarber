import { StyleSheet } from "react-native";
import { AppColors } from "../../constants/AppColors";

const styles = StyleSheet.create({
  scrollContainer: {
    backgroundColor: "#fffaf5",
  },
  container: {
    flex: 1,
    marginHorizontal: 16,
  },
  paragraph: {
    fontSize: 16,
    color: AppColors.primary,
    textAlign: "justify",
    marginTop: 10,
  },
  containerImg: {
    alignItems: "center",
    marginTop: 10,
    width: "100%",
    height: 250,
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
    color: AppColors.secondary,
    textAlign: "center",
    marginTop: 20,
  },
  titleImg: {
    fontWeight: "bold",
    color: "white",
    fontSize: 22,
  },
  textContainer: {
    position: "absolute",
    height: 250,
    zIndex: 2,
    width: "100%",
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  img: {
    width: "100%",
    height: 250,
    borderRadius: 12,
  },
  dot: {
    backgroundColor: "rgba(0,0,0,.2)",
  },
  activeDot: {
    backgroundColor: AppColors.primary,
  },
});

export default styles;
