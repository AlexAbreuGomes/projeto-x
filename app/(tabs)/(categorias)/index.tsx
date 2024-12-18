import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, FlatList, ScrollView, StatusBar, Dimensions, ActivityIndicator } from 'react-native';
import { useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { BannerItem } from '../../../components/VideoBanner';
import { videoBanners } from '../../../data/videoBanners';
import { Banners } from '../../../types/product';
import { useCategories } from '../../../hooks/useCategories'; // Importando o hook customizado
import useLoadFonts from '../../../hooks/useLoadFonts'; // Importa o hook personalizado

const screenWidth = Dimensions.get('window').width;

export default function CategoriasScreen() {
  const router = useRouter();
  const fontsLoaded = useLoadFonts(); // Usa o hook de carregamento de fontes
  const { categories, loading, error } = useCategories(); // Usando o hook customizado para buscar categorias

   if (!fontsLoaded) {
    return null; // Retorna nulo até que as fontes sejam carregadas
  }

  const handleCategoryPress = (categoryId: number) => {
    router.push(`/categoriaSelecionada/${categoryId}`);
  };
  

  return (
    <SafeAreaView style={{ flex: 1 }}> 
      <StatusBar />

      <View>
        {/* FlatList para os banners */}
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

      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.container}>
          <View style={styles.categoriesContainer}>
            {
            loading ? (
              <ActivityIndicator size="large" color="#0361dd" /> // Indicador de carregamento
            ) : error ? (
              <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text style={styles.infoProductNull}>{error ? 'Erro ao carregar categorias' : 'Categorias não encontradas'}</Text>
          <Text style={styles.infoProductNullEmoji}>😒</Text>
          <Text style={styles.infoProductNull2}>Tente novamente mais tarde</Text>
        </SafeAreaView>
            ) : (
              categories.map(({ id, title, image }) => ( // Alterar 'nome' e 'imagem' para os nomes corretos retornados pela API
                <TouchableOpacity key={id} style={styles.category} onPress={() => handleCategoryPress(id)}>
                  <Image source={{ uri: image }} style={styles.image} />
                  <Text style={styles.categoryTitle}>{title}</Text>
                </TouchableOpacity>
              ))
            )}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    paddingVertical: 20,
  },
  container: {
    paddingHorizontal: 20,
  },
  categoriesContainer: {
    flexDirection: 'column',
  },
  itemWrapper2: {
    width: screenWidth,
    justifyContent: 'center',
    alignItems: 'center',
  },
  category: {
    width: '100%',
    height: 100,
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#fffdfd',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 15,
    marginRight: 10,
  },
  categoryTitle: {
    fontSize: 22,
    fontFamily: 'Orbitron_600SemiBold',
    color: '#0361dd',
  },
  infoProductNull: {
    fontSize: 40,
    fontFamily: 'Orbitron_600SemiBold',
    textAlign: 'center',
    margin: 10,
    color: '#0361dd',
  },
  infoProductNull2: {
    fontSize: 45,
    fontFamily: 'Orbitron_600SemiBold',
    textAlign: 'center',
    margin: 10,
    color: '#24cc02',
  },
  infoProductNullEmoji: {
    fontSize: 80,
  },
});
