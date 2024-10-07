import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, FlatList, ScrollView, StatusBar, Dimensions } from 'react-native';
import { useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { BannerItem } from '../../../components/VideoBanner';
import { videoBanners } from '../../../data/videoBanners';
import { Banners } from '../../../types/product';

const categories = [
  { id: 1, title: 'Carregadores', image: 'https://www.baseus.com/cdn/shop/products/Baseus_GaN2_3_Ports_Fast_Charger_65W_Black_1_front_side_700x.jpg?v=1667904127' },
  { id: 2, title: 'Cabos', image: 'https://www.baseus.com/cdn/shop/products/Baseus_USB-C_to_USB-C_Cable_100W_3.3ft_2_ports_700x.jpg?v=1667906429' },
  { id: 3, title: 'Fones de Ouvido', image: 'https://www.baseus.com/cdn/shop/files/Baseus_Bowie_30_Max_Noise_Cancelling_Headphone__1_700x.jpg?v=1726802219' },
  { id: 4, title: 'PowerBanks', image: 'https://www.baseus.com/cdn/shop/products/Baseus_Elf_Power_Bank_65W_20000mAh_2_top_view_700x.jpg?v=1667903935' },
  { id: 5, title: 'Acessórios', image: 'https://www.baseus.com/cdn/shop/products/Baseus_12_in_1_USB-C_Hub_WKSX0302134_700x.jpg?v=1677495214' },
];

const screenWidth = Dimensions.get('window').width;

export default function CategoriasScreen() {
  const router = useRouter();

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
            {categories.map(({ id, title, image }) => (
              <TouchableOpacity key={id} style={styles.category} onPress={() => handleCategoryPress(id)}>
                <Image source={{ uri: image }} style={styles.image} />
                <Text style={styles.categoryTitle}>{title}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    paddingVertical: 20, // Espaçamento vertical para o conteúdo rolável
  },
  container: {
    paddingHorizontal: 20, // Espaçamento interno horizontal
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  categoriesContainer: {
    flexDirection: 'column', // Garante que as categorias fiquem em coluna
  },
  itemWrapper2: {
    width: screenWidth,
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'Orbitron_900Black',
  },
  category: {
    width: '100%', 
    height: 100,
    marginBottom: 20,
    flexDirection: 'row', // Alinha imagem e texto horizontalmente
    alignItems: 'center', 
    borderWidth: 1, 
    borderColor: '#ccc', 
    padding: 10, 
    borderRadius: 10 ,
    backgroundColor: '#fffdfd',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5, // Adiciona sombra e elevação ao item da categoria
  },
  image: {
    width: 80, 
    height: 80,
    borderRadius: 15, // Bordas arredondadas da imagem
    marginRight: 10, // Espaço entre a imagem e o título da categoria
  },
  categoryTitle: {
    fontSize: 22, // Ajuste do tamanho da fonte
    fontFamily: 'Orbitron_600SemiBold',
    color: '#0361dd',
  },
});
