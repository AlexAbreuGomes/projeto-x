import { Image, SafeAreaView, StyleSheet, Text, View, StatusBar, FlatList, Dimensions } from 'react-native';
import { list } from './data';
import { Product } from './types/product';
import { ProductItem } from './components/product-item';

// Obtém a largura da tela para centralizar os itens
const screenWidth = Dimensions.get('window').width;

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar />
      <Image 
        source={require('./assets/Leonardo_Phoenix_Create_an_image_for_Alex_Imports_a_modern_and_3.jpg')} 
        resizeMode='cover' 
        style={styles.phoenix}
      />
      <View style={styles.area}>
        <Text style={styles.h1}>Smartphones</Text>
        <FlatList 
          data={list} // Array de dados que será renderizado na lista
          renderItem={({ item }: { item: Product }) => (
            <View style={styles.itemWrapper}>
              <ProductItem product={item} />
            </View>
          )}
          keyExtractor={(item) => item.id.toString()} // Gera uma chave única para cada item
          horizontal={true} // Define que a lista será exibida horizontalmente
          showsHorizontalScrollIndicator={false} // Oculta o indicador de rolagem horizontal
          pagingEnabled={true} // Habilita o comportamento de "paging" para centralizar cada item
          snapToAlignment="center" // Alinha o item centralizado após a rolagem
          decelerationRate="fast" // Faz a rolagem parar rapidamente para uma experiência mais fluida
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  phoenix: {
    width: '100%',
    height: 220,
  },

  area: {
    flex: 1,
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
