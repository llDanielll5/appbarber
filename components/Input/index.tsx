import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { TextInput } from "react-native-paper";
import { AppColors } from "../../constants/AppColors";

interface InputProps {
  label?: string;
  value?: string;
  onChangeText?: (text: string) => void;
  secureTextEntry?: boolean;
  mode: "flat" | "outlined";
  style?: any;
  autoCapitalize?: "none" | "sentences" | "words" | "characters";
  disabled?: boolean;
  error?: any;
  errorMessage?: string;
  touched?: any;
  placeholder?: string;
  placeholderTextColor?: string;
  right?: any;
}
const Input: React.FC<InputProps> = (props) => {
  const {
    label,
    value,
    onChangeText,
    secureTextEntry,
    mode,
    style,
    autoCapitalize,
    disabled,
    error,
    errorMessage,
    touched,
    placeholder,
    placeholderTextColor,
    right,
  } = props;
  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        mode={mode}
        onChangeText={onChangeText}
        value={value}
        style={[style, styles.input]}
        secureTextEntry={secureTextEntry}
        activeOutlineColor={"transparent"}
        outlineColor={"transparent"}
        underlineColor={"transparent"}
        activeUnderlineColor={"transparent"}
        autoCapitalize={autoCapitalize}
        disabled={disabled}
        placeholder={placeholder}
        placeholderTextColor={placeholderTextColor}
        right={right}
      />
      {error && touched && <Text style={styles.error}>{errorMessage}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  label: {
    color: AppColors.orange,
    fontSize: 14,
    fontWeight: "bold",
    marginTop: 10,
  },
  input: {
    backgroundColor: "white",
    borderRadius: 8,
    height: 40,
  },
  error: {
    color: "red",
    fontSize: 12,
    marginTop: 5,
  },
});

export default Input;
