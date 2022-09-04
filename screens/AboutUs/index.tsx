import React, { useRef } from "react";
import { Image, ScrollView, Text, View } from "react-native";
import AppIntroSlider from "react-native-app-intro-slider";
import styles from "./styles";

const AboutUs = () => {
  const sliderRef = useRef(null);
  const images = [
    {
      img: "https://cdn.pixabay.com/photo/2015/11/01/19/43/barber-1017457__340.jpg",
      title: "Atendimento Personalizado",
    },
    {
      img: "https://cdn.pixabay.com/photo/2016/08/22/19/27/barbershop-1612726__340.jpg",
      title: "Amamos o que fazemos",
    },
    {
      img: "https://cdn.pixabay.com/photo/2016/02/04/17/13/razor-1179458__340.jpg",
      title: "Cortes de qualidade",
    },
  ];

  const renderItem = ({ item }) => (
    <View style={styles.containerImg}>
      <View style={styles.textContainer}>
        <Text style={styles.titleImg}>{item.title}</Text>
      </View>
      <Image source={{ uri: item.img }} style={styles.img} />
    </View>
  );
  return (
    <ScrollView style={styles.scrollContainer}>
      <View style={styles.container}>
        <Text style={styles.title}>Sobre Nós...</Text>
        <Text style={styles.paragraph}>
          description="Criada em 2022 a Barbearia Tal é uma empresa que tem como
          objetivo oferecer um serviço de qualidade e com um preço justo. Nossa
          equipe é formada por profissionais altamente qualificados e com muita
          experiência no ramo. Venha nos conhecer e fazer parte da nossa
          família... "
        </Text>
        <Text style={styles.paragraph}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit iure
          iste sunt fuga, provident vitae aliquam perspiciatis maxime, nihil
          dolorum dignissimos quidem temporibus aspernatur! Recusandae quasi
          magni explicabo mollitia autem.
        </Text>

        <AppIntroSlider
          data={images}
          renderItem={renderItem}
          showPrevButton={true}
          prevLabel="Anterior"
          nextLabel="Próximo"
          dotStyle={styles.dot}
          activeDotStyle={styles.activeDot}
          showDoneButton={false}
        />
      </View>
    </ScrollView>
  );
};

export default AboutUs;
