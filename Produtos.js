import React, { useRef } from 'react';
import { View, Text, Button, ScrollView, Image, StyleSheet } from 'react-native';

const Produtos = ({ navigation }) => {
  const scrollViewRef = useRef();

  const handleScrollToTop = () => {
    if (scrollViewRef.current) {
      scrollViewRef.current.scrollTo({ y: 0, animated: true });
    }
  };

  const handleDrawerPress = () => {
    navigation.toggleDrawer();
  };

  const produtosPadaria = [
    { nome: 'Pão Francês', preco: 'R$ 6,99', imagem: require('./paop.jpg') },
    { nome: 'Croissant', preco: 'R$ 8,99', imagem: require('./croissantp.jpg') },
    { nome: 'Bolo de Chocolate', preco: 'R$ 25,99', imagem: require('./bolop.jpg') },
    { nome: 'Rosquinha', preco: 'R$ 3,99', imagem: require('./rosquinhap.jpg') },
  ];

  return (
    <View style={{ flex: 1 }}>
      <Button
        title="Menu"
        onPress={handleDrawerPress}
        color="#F1C40F" // Cor laranja para o botão Menu
      />
      <ScrollView ref={scrollViewRef}>
        {produtosPadaria.map((produto, index) => (
          <View key={index} style={styles.card}>
            <Image source={produto.imagem} style={styles.image} />
            <Text>{produto.nome}</Text>
            <Text>{produto.preco}</Text>
          </View>
        ))}
      </ScrollView>
      <Button
        title="Rolar para o Topo"
        onPress={handleScrollToTop}
        color="#F1C40F" // Cor laranja para o botão Rolar para o Topo
      />
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    borderRadius: 10,
    elevation: 3,
    margin: 20,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
  },
  image: {
    width: '100%',
    height: 250,
    borderRadius: 10,
    marginBottom: 10,
  },
});

export default Produtos;