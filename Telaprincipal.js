import React from 'react';
import { View, Text, ScrollView, Image, StyleSheet, TouchableOpacity } from 'react-native';

const Telaprincipal = ({ navigation }) => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.promotionCard}>
        <Text style={styles.promotionText}>Promoções do dia</Text>
      </View>

      <View style={styles.card}>
        <Image source={require('./pao1.jpg')} style={styles.image} />
        <Text style={styles.cardText}>Pão francês R$6,99</Text>
      </View>

      <View style={styles.card}>
        <Image source={require('./pao2.jpg')} style={styles.image} />
        <Text style={styles.cardText}>Cacetinho R$3,99</Text>
      </View>

      <View style={styles.card}>
        <Image source={require('./pao3.jpg')} style={styles.image} />
        <Text style={styles.cardText}>Croissant R$8,99</Text>
      </View>

      <View style={styles.card}>
        <Image source={require('./pao4.jpg')} style={styles.image} />
        <Text style={styles.cardText}>Carioquinha R$12,99</Text>
      </View>

      <TouchableOpacity 
        style={styles.button} 
        onPress={() => navigation.navigate('Produtos')} // Navigate to the Produtos screen
      >
        <Text style={styles.buttonText}>Ver mais produtos</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#FFF8F0',
  },
  promotionCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    elevation: 3,
    margin: 20,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#A8DADC',
  },
  promotionText: {
    fontSize: 22,
    fontFamily: 'Montserrat-Bold',
    color: '#E76F51',
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    elevation: 3,
    margin: 20,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    borderWidth: 1,
    borderColor: '#A8DADC',
  },
  cardText: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 16,
    textAlign: 'center',
    color: '#2F3E46',
  },
  image: {
    width: '100%',
    height: 250,
    borderRadius: 10,
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#E9C46A',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    margin: 20,
  },
  buttonText: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 16,
    color: '#2F3E46',
  },
});

export default Telaprincipal;
