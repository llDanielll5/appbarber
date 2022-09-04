import React from "react";
import { Modal, StyleSheet, Text, View } from "react-native";
import { AppColors } from "../../constants/AppColors";

interface AlertModalProps {
  visible: boolean;
  animationType?: "none" | "slide" | "fade";
  onRequestClose?: () => void;
  loadingComponent: any;
  message: string;
}

const AlertModal: React.FC<AlertModalProps> = (props) => {
  const { visible, animationType, onRequestClose, loadingComponent, message } =
    props;
  return (
    <Modal
      visible={visible}
      transparent={true}
      animationType={animationType}
      onRequestClose={onRequestClose}
    >
      <View style={styles.modalLoading}>
        <View style={styles.innerModal}>{loadingComponent}</View>
        <Text style={styles.message}>{message}</Text>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalLoading: {
    width: "100%",
    alignItems: "center",
    top: "40%",
  },
  innerModal: {
    backgroundColor: "white",
    width: "80%",
    height: 120,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: AppColors.orange,
  },
  message: {
    position: "absolute",
    bottom: 15,
    fontSize: 16,
    fontWeight: "bold",
    color: AppColors.orange,
  },
});

export default AlertModal;
