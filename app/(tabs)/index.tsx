import React, { useEffect, useCallback, useState } from 'react';
import { Image, StyleSheet, Text, View, StatusBar, FlatList, Dimensions, ScrollView } from 'react-native';
import { Banners, Product } from '../../types/product';
import { ProductItem } from '../../components/product-item';
import { videoBanners } from '../../data/videoBanners';
import { BannerItem } from '../../components/VideoBanner';
import { SafeAreaView } from 'react-native-safe-area-context';
import useLoadFonts from '../../hooks/useLoadFonts'; // Importa o hook personalizado
import { useProducts } from '../../hooks/useProducts';


const screenWidth = Dimensions.get('window').width;

export default function App() {
 
  const fontsLoaded = useLoadFonts(); // Usa o hook de carregamento de fontes
  const products = useProducts(); // Usa o hook para obter produtos

  if (!fontsLoaded) {
    return null; // Retorna nulo até que as fontes sejam carregadas
  }



  return (
    <SafeAreaView  style={styles.container}>
      <ScrollView>
        <StatusBar />
        <View>
          <FlatList
            data={videoBanners}
            renderItem={({ item }: { item: Banners }) => (
              <View style={styles.itemWrapper2}>
                <BannerItem product={item} />
              </View>
            )}
            keyExtractor={(item) => item.id.toString()}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            pagingEnabled={true}
            snapToAlignment="center"
            decelerationRate="fast"
          />
        </View>

        <View>
          <Text style={styles.h1}>Carregadores</Text>
          <FlatList
            data={products.filter(product => product.category_id === 1)} // Filtra produtos pela categoria
            renderItem={({ item }: { item: Product }) => (
              <View style={styles.itemWrapper}>
                <ProductItem product={item} />
              </View>
            )}
            keyExtractor={(item) => item.id.toString()}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            pagingEnabled={true}
            snapToAlignment="center"
            decelerationRate="fast"
          />
        </View>

        <View>
          <Text style={styles.h1}>Cabos</Text>
          <FlatList
            data={products.filter(product => product.category_id === 2)} // Filtra produtos pela categoria
            renderItem={({ item }: { item: Product }) => (
              <View style={styles.itemWrapper}>
                <ProductItem product={item} />
              </View>
            )}
            keyExtractor={(item) => item.id.toString()}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            pagingEnabled={true}
            snapToAlignment="center"
            decelerationRate="fast"
          />
        </View>

        <View>
          <Text style={styles.h1}>Fones De Ouvido</Text>
          <FlatList
            data={products.filter(product => product.category_id === 3)} // Filtra produtos pela categoria
            renderItem={({ item }: { item: Product }) => (
              <View style={styles.itemWrapper}>
                <ProductItem product={item} />
              </View>
            )}
            keyExtractor={(item) => item.id.toString()}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            pagingEnabled={true}
            snapToAlignment="center"
            decelerationRate="fast"
          />
        </View>

        <View>
          <Text style={styles.h1}>Power Banks</Text>
          <FlatList
            data={products.filter(product => product.category_id === 4 )} // Filtra produtos pela categoria
            renderItem={({ item }: { item: Product }) => (
              <View style={styles.itemWrapper}>
                <ProductItem product={item} />
              </View>
            )}
            keyExtractor={(item) => item.id.toString()}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            pagingEnabled={true}
            snapToAlignment="center"
            decelerationRate="fast"
          />
        </View>

        <View>
          <Text style={styles.h1}></Text>
          <FlatList
            data={products.filter(product => product.category_id === 5)} // Filtra produtos pela categoria
            renderItem={({ item }: { item: Product }) => (
              <View style={styles.itemWrapper}>
                <ProductItem product={item} />
              </View>
            )}
            keyExtractor={(item) => item.id.toString()}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            pagingEnabled={true}
            snapToAlignment="center"
            decelerationRate="fast"
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

  h1: {
    fontSize: 30,
    textAlign: 'center',
    fontFamily: 'Orbitron_600SemiBold',
    color: '#0361dd',
    padding: 10,
  },
  itemWrapper: {
    width: screenWidth / 2,
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'Orbitron_700Bold',
  },

  itemWrapper2: {
    width: screenWidth,
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'Orbitron_900Black',
  },
});
