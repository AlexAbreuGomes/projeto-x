import { Image, SafeAreaView, StyleSheet, Text, View, StatusBar, FlatList, Dimensions, ScrollView } from 'react-native';
import { Product } from '../../../types/product';
import { ProductItem } from '../../../components/product-item';
import { notebooks } from '../../../data/dataNotebooks';

// Obtém a largura da tela para centralizar os itens
const screenWidth = Dimensions.get('window').width;

export default function App() {

  return (
    <SafeAreaView style={styles.container}>
        <ScrollView>
            <StatusBar />

            <Image
                source={require('../../../assets/Leonardo_Phoenix_Create_an_image_for_Alex_Imports_a_modern_and_3.jpg')}
                resizeMode='cover'
                style={styles.phoenix}
            />
            <View >
                <Text style={styles.h1}>Categorias</Text>
                <View>
                  
                </View>
            </View>

        </ScrollView>
    </SafeAreaView>
);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  imput: {
    width: '96%',
    height: 40,
    alignContent: 'center',
    backgroundColor: '#f5f5f5',
    borderRadius: 8,
    padding: 10,
    margin: 10,
    borderWidth: 1,
    borderColor: '#ddd',
  },

  phoenix: {
    width: '100%',
    height: 220,
  },

  area: {
    padding: 10,
    justifyContent: 'center',
  },

  h1: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },

  itemWrapper: {
    width: screenWidth, // Define a largura do item como a largura da tela para centralizar
    justifyContent: 'center',
    alignItems: 'center',
  },



});
