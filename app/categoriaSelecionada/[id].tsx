import { useLocalSearchParams, useRouter, Stack } from 'expo-router';
import { Text, View, FlatList, StyleSheet, Dimensions, ActivityIndicator } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { BackButton } from '../../components/backButton';
import { ProductItem } from '../../components/product-item';
import useFetchProducts from '../../hooks/categoryProducts';
import React from 'react';

const screenWidth = Dimensions.get('window').width;

export default function CategoriaSelecionadaScreen() {
  const { id } = useLocalSearchParams(); // Pega o ID da categoria da URL
  const router = useRouter(); // Usado para navegação

  // Verifique se o ID é uma string e converta para número
  const categoryId = Array.isArray(id) ? parseInt(id[0]) : parseInt(id as string);

  // Utiliza o hook customizado para buscar produtos da API
  const { products, loading, error } = useFetchProducts(categoryId);

  // Caso esteja carregando os dados
  if (loading) {
    return (
      <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="#0361dd" />
      </SafeAreaView>
    );
  }

  // Caso ocorra erro ou a categoria não tenha produtos, exibir uma mensagem
  if (error || !products.length) {
    return (
      <>
        <Stack.Screen
          options={{
            headerShown: true,
            title: 'Erro',
            headerTitleStyle: {
              fontSize: 30,
              fontFamily: 'Orbitron_700Bold',
              color: '#0361dd',
            },
            headerTitleAlign: 'center',
            headerLeft: () => <BackButton onPress={() => router.back()} />,
          }}
        />

        <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text style={styles.infoProductNull}>{error ? 'Erro ao carregar produtos' : 'Categoria não encontrada'}</Text>
          <Text style={styles.infoProductNullEmoji}>😒</Text>
          <Text style={styles.infoProductNull2}>Tente novamente mais tarde</Text>
        </SafeAreaView>
      </>
    );
  }

  // Exibição dos produtos
  return (
    <>
      <Stack.Screen
        options={{
          headerShown: true,
          title: ``, // Coloque o nome dinâmico da categoria
          headerTitleStyle: {
            fontSize: 30,
            fontFamily: 'Orbitron_700Bold',
            color: '#0361dd',
          },
          headerTitleAlign: 'center',
          headerLeft: () => <BackButton onPress={() => router.back()} />,
        }}
      />

      <SafeAreaView style={styles.container}>
        <FlatList
          style={{ flex: 1 }}
          contentContainerStyle={{ paddingBottom: 20 }}
          data={products}
          renderItem={({ item }) => (
            <View style={styles.container}>
              <ProductItem product={item} />
            </View>
          )}
          keyExtractor={(item) => item.id.toString()}
          numColumns={2}
          showsHorizontalScrollIndicator={false}
        />
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  infoProductNull: {
    fontSize: 50,
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
