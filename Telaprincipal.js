import React, { useRef } from 'react';
import { View, Text, Button, ScrollView, Image, StyleSheet } from 'react-native';

const Telaprincipal = ({ navigation }) => {
  const scrollViewRef = useRef();

  const handleScrollToTop = () => {
    if (scrollViewRef.current) {
      scrollViewRef.current.scrollTo({ y: 0, animated: true });
    }
  };

  const handleDrawerPress = () => {
    navigation.toggleDrawer();
  };

  return (
    <View style={{ flex: 1 }}>
      <Button title="Menu" onPress={handleDrawerPress} />
      <ScrollView ref={scrollViewRef}>
        <View style={styles.card}>
          <Image source={require('./pao1.jpg')} style={styles.image} />
          <Text>Pão francês R$6,99</Text>
        </View>
        <View style={styles.card}>
          <Image source={require('./pao2.jpg')} style={styles.image} />
          <Text>Cacetinho R$3,99</Text>
        </View>
        <View style={styles.card}>
          <Image source={require('./pao3.jpg')} style={styles.image} />
          <Text>Croissant R$8,99</Text>
        </View>
        <View style={styles.card}>
          <Image source={require('./pao4.jpg')} style={styles.image} />
          <Text>Carioquinha R$12,99</Text>
        </View>
      </ScrollView>
      <Button title="Rolar para o Topo" onPress={handleScrollToTop} />
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

export default Telaprincipal;
