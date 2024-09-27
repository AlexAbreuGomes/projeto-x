import React, { useEffect, useCallback } from 'react';
import { Image,  StyleSheet, Text, View, StatusBar, FlatList, Dimensions, ScrollView } from 'react-native';
import { list } from '../../data/datasmartphone';
import { Banners, Product } from '../../types/product';
import { useFonts, Orbitron_700Bold, Orbitron_800ExtraBold, Orbitron_900Black, Orbitron_500Medium, Orbitron_400Regular, Orbitron_600SemiBold } from '@expo-google-fonts/orbitron';
import { ProductItem } from '../../components/product-item';
import { smartwatch } from '../../data/datawatchs';
import { acessorios } from '../../data/dataAcessorios';
import { notebooks } from '../../data/dataNotebooks';
import * as SplashScreen from 'expo-splash-screen'; // Importa o SplashScreen
import { videoBanners } from '../../data/videoBanners';
import { BannerItem } from '../../components/VideoBanner';
import { SafeAreaView } from 'react-native-safe-area-context';



SplashScreen.preventAutoHideAsync(); // Evita que o SplashScreen feche automaticamente

const screenWidth = Dimensions.get('window').width;

export default function App() {
  let [fontsLoaded] = useFonts({
    Orbitron_600SemiBold,
    Orbitron_700Bold,
    Orbitron_800ExtraBold,
    Orbitron_900Black,
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
  <SafeAreaView onLayout={onLayoutRootView} style={styles.container}>
        
        <ScrollView>
          <StatusBar />
          <View>

            <FlatList
              data={videoBanners}
              renderItem={({item}:{item: Banners})=>(
                <View style={styles.itemWrapper2}>
                <BannerItem product={item}/>
                </View >
              )}

              keyExtractor={(item) => item.id.toString()}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              pagingEnabled={true}
              snapToAlignment="center"
              decelerationRate="fast"
            
            />


          </View>

          <View >
            <Text style={styles.h1}>Carregadores</Text>
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

          <View >
            <Text style={styles.h1}>Cabos</Text>
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
            <Text style={styles.h1}>Power Banks</Text>
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

          <View >
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
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  
  h1: {
    fontSize: 25,
    textAlign: 'justify',
    fontFamily: 'Orbitron_600SemiBold',
    color: '#0361dd',
    padding:10
  },
  itemWrapper: {
    width: screenWidth/2,
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
