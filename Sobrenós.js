import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';

const Sobrenós = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.text}>
        Bem-vindo à "Delícias do Povo"!{"\n\n"}
        Somos uma padaria dedicada a proporcionar experiências gastronômicas inesquecíveis, onde cada mordida é uma celebração do sabor e da tradição. Localizada no coração da cidade, a nossa padaria é um refúgio acolhedor para os amantes de pães frescos, bolos irresistíveis e uma variedade de delícias assadas diariamente.{"\n\n"}
        Na "Delícias do Povo", valorizamos a qualidade e a autenticidade em tudo o que fazemos. Nossos pães são feitos à mão, com ingredientes selecionados, seguindo receitas tradicionais que passaram de geração em geração. Cada pedaço é uma obra de arte, repleto de sabor e aroma.{"\n\n"}
        Além dos nossos pães frescos, oferecemos uma ampla seleção de bolos, tortas, biscoitos e outros produtos assados que certamente satisfarão os seus desejos mais doces. Desde os clássicos até os mais criativos, cada item é cuidadosamente preparado para encantar o seu paladar.{"\n\n"}
        Na "Delícias do Povo", não somos apenas uma padaria, somos uma comunidade. Estamos comprometidos em servir não apenas produtos de qualidade, mas também oferecer um ambiente acolhedor e um atendimento caloroso a cada cliente que entra pela nossa porta. Aqui, todos são bem-vindos para desfrutar de momentos deliciosos e memoráveis.{"\n\n"}
        Venha nos visitar e faça parte da nossa história na "Delícias do Povo". Estamos ansiosos para recebê-lo e compartilhar com você o melhor da arte da panificação.{"\n\n"}
        
      </Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
    paddingVertical: 40,
  },
  text: {
    fontSize: 16,
    lineHeight: 24,
    textAlign: 'left',
    fontFamily: 'Montserrat-Regular', // Usando a fonte Montserrat
  },
});

export default Sobrenós;