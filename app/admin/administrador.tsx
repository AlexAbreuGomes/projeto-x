import React from 'react';
import { View, StyleSheet, Dimensions, FlatList, StatusBar } from 'react-native';
import { ButtonGeneric } from '../../components/button-general';
import { SafeAreaView } from 'react-native-safe-area-context';
import { BackButton } from '../../components/backButton';
import { router, Stack } from 'expo-router';
import { videoBanners } from '../../data/videoBanners';
import { BannerItem } from '../../components/VideoBanner';
import { Banners } from '../../types/product';

const screenWidth = Dimensions.get('window').width;


export default function Contato() {
  const addProduto = () => {
    router.push('/admin/addProduto');
  };
  const addCategoria = () => {
    router.push('/admin/addCategoria');
  };
  const deleteProduto = () => {
    router.push('/admin/deleteProduto');
  };

  return (
    <>
      <Stack.Screen
        options={{
          headerShown: true,
          title: "Administrador",
          headerTitleStyle: {
            fontSize: 30,
            fontFamily: 'Orbitron_700Bold',
            color: '#0361dd',
          },
          headerTitleAlign: 'center',
          headerLeft: () => (
            <BackButton onPress={() => router.back()} /> // Botão de voltar
          ),
        }} 
      />
      <SafeAreaView style={styles.safeArea}>
        <StatusBar />
        <FlatList
          data={videoBanners}
          renderItem={({ item }: { item: Banners }) => (
            <View style={styles.itemWrapper2}>
              <BannerItem product={item} />
            </View>
          )}
          keyExtractor={(item) => item.id.toString()}
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          snapToAlignment="center"
          decelerationRate="fast"
        />
        
        {/* Botões de administração */}
        <View style={styles.container}>
          <ButtonGeneric onPress={addProduto} label="Adicionar Produto" />
          <ButtonGeneric onPress={deleteProduto} label="Excluir Produto" />
          <ButtonGeneric onPress={addCategoria} label="Adicionar Categoria" />
          <ButtonGeneric onPress={addProduto} label="Excluir Categoria" />
        </View>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: '#ffffff',
  },

  container: {
    alignItems: 'center',
    marginTop: 50,
    height:500,  
  },

  itemWrapper2: {
    width: screenWidth,
  },
});
