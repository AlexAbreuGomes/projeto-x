import { Image, SafeAreaView, StyleSheet, Text, View, StatusBar, FlatList, Dimensions, ScrollView } from 'react-native';
import { list } from '../data/data';
import { Product } from '../types/product';
import { SearchDevice} from '../components/search';
import { ProductItem } from '../components/product-item';
import { smartwatch } from '../data/data2';
import { acessorios } from '../data/dataAcessorios';
import { notebooks } from '../data/dataNotebooks';
import { router } from 'expo-router';



// Obtém a largura da tela para centralizar os itens
const screenWidth = Dimensions.get('window').width;

export default function App() {
  
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
      <StatusBar/>
      
      <Image
        source={require('../assets/Leonardo_Phoenix_Create_an_image_for_Alex_Imports_a_modern_and_3.jpg')}
        resizeMode='cover'
        style={styles.phoenix}
      />

      <SearchDevice 
        search={{
          placeholder: 'Pesquisar...',
          onChangeText: () => {},
          onPress: () => {},
        }}
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
        <View >
        <Text style={styles.h1}>Notebooks</Text>
        <FlatList
          data={notebooks} // Array de dados que será renderizado na lista
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
        <View >
        <Text style={styles.h1}>Smartwatches</Text>
        <FlatList
          data={smartwatch} // Array de dados que será renderizado na lista
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
        <View >
        <Text style={styles.h1}>Acessórios</Text>
        <FlatList
          data={acessorios} // Array de dados que será renderizado na lista
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
