
import { Image, SafeAreaView, StyleSheet, Text, View, StatusBar, FlatList} from 'react-native';
import { list } from './data';
import { Product } from './types/product';
import { ProductItem } from './components/product-item';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar/>
      <Image source={require('./assets/Leonardo_Phoenix_Create_an_image_for_Alex_Imports_a_modern_and_3.jpg')} 
      resizeMode='cover' 
      style={styles.phoenix}
      />
    <View style= {styles.area}>
      <Text style={styles.h1}> Smartphones </Text>

      <FlatList
       data={list}
       renderItem={({item}:{item: Product}) => (<ProductItem product={item}/>)}
        keyExtractor={(item) => item.id.toString()}
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
  },

  h1: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    
  },

});
