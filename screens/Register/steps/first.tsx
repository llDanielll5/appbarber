import React from "react";
import { View } from "react-native";
import { Button } from "react-native-paper";
import Card from "../../../components/Card";
import { ClientType } from "../../../enums";
import { cardsMock } from "../../../mock";
import styles from "../styles";

interface FirstStepRegisterProps {
  cardIndex: number;
  setCardIndex: (index: number) => void;
  cardValue?: ClientType;
  setCardValue: (value: ClientType) => void;
  onPressContinue: () => void;
}

const FirstStepRegister: React.FC<FirstStepRegisterProps> = (props) => {
  const { cardIndex, setCardIndex, cardValue, setCardValue, onPressContinue } =
    props;
  return (
    <View>
      <View style={styles.cards}>
        {cardsMock.map((card, index) => (
          <Card
            key={index}
            icon={card.icon}
            title={card.title}
            style={[
              cardIndex === index && styles.cardSelected,
              { marginHorizontal: 50 },
            ]}
            onPress={() => {
              setCardIndex(index);
              setCardValue(card.title);
            }}
          />
        ))}
      </View>

      {cardIndex > -1 && (
        <Button
          mode="contained"
          uppercase={false}
          style={styles.button}
          color="white"
          labelStyle={styles.buttonLabelStyle}
          onPress={onPressContinue}
        >
          {`Prosseguir >`}
        </Button>
      )}
    </View>
  );
};

export default FirstStepRegister;
