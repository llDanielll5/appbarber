import * as React from "react";
import { StyleProp, View, ViewStyle } from "react-native";
import { ActivityIndicator } from "react-native-paper";
import { AppColors } from "../../constants/AppColors";

type PropType = {
  isLoading: boolean;
  color?: string;
  size?: number;
  style?: StyleProp<ViewStyle>;
};

const Loading = ({ isLoading, color, size, style }: PropType) => (
  <View
    style={[
      {
        height: "100%",
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
      },
      style,
    ]}
  >
    <ActivityIndicator
      animating={isLoading}
      color={color ?? AppColors.orange}
      size={size ?? 30}
    />
  </View>
);
export default Loading;
