import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { AppColors } from "../../constants/AppColors";

interface CardProps {
  icon: any;
  title: string;
  onPress: () => void;
  style?: any;
}

const Card: React.FC<CardProps> = (props) => {
  const { icon, title, onPress, style } = props;
  return (
    <TouchableOpacity onPress={onPress} style={[style]}>
      <View
        style={{
          backgroundColor: "white",
          height: 80,
          width: 80,
          justifyContent: "center",
          alignItems: "center",
          borderRadius: 12,
        }}
      >
        <Image source={icon} style={{ width: 40, height: 40 }} />
        <Text
          style={{ fontSize: 14, color: AppColors.orange, fontWeight: "500" }}
        >
          {title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default Card;
