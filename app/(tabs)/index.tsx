import React, { useEffect, useCallback } from 'react';
import { Image, SafeAreaView, StyleSheet, Text, View, StatusBar, FlatList, Dimensions, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient'; // Importa o LinearGradient
import { list } from '../../data/datasmartphone';
import { Product } from '../../types/product';
import { useFonts, Orbitron_700Bold } from '@expo-google-fonts/orbitron';
import * as SplashScreen from 'expo-splash-screen'; // Importa o SplashScreen
import { ProductItem } from '../../components/product-item';
import { smartwatch } from '../../data/datawatchs';
import { acessorios } from '../../data/dataAcessorios';
import { notebooks } from '../../data/dataNotebooks';

SplashScreen.preventAutoHideAsync(); // Evita que o SplashScreen feche automaticamente

const screenWidth = Dimensions.get('window').width;

export default function App() {
  let [fontsLoaded] = useFonts({
    Orbitron_700Bold,
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <LinearGradient
      colors={['#bebebe',  '#30dfd3e6']} // Gradiente de cinza para o verde
      style={styles.container}
      start={{ x: 0, y: 0 }} // Início do gradiente
      end={{ x: 1, y: 1 }}   // Fim do gradiente
    >
      <SafeAreaView onLayout={onLayoutRootView}>
        <ScrollView>
          <StatusBar />

          <Image
            source={require('../../assets/Leonardo_Phoenix_Design_an_image_for_Alex_Imports_a_sleek_and_3.jpg')}
            resizeMode='cover'
            style={styles.phoenix}
          />

          <View style={styles.area}>
            <Text style={styles.h1}>SMARTPHONES</Text>
            <FlatList
              data={list}
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
            <Text style={styles.h1}>Notebooks</Text>
            <FlatList
              data={notebooks}
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
            <Text style={styles.h1}>Smartwatches</Text>
            <FlatList
              data={smartwatch}
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
            <Text style={styles.h1}>Acessórios</Text>
            <FlatList
              data={acessorios}
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
    </LinearGradient>
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
    padding: 10,
    justifyContent: 'center',
  },
  h1: {
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 10,
    fontFamily: 'Orbitron_700Bold',
  },
  itemWrapper: {
    width: screenWidth,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
