import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView, Image, Alert } from 'react-native';
import { useCategories } from '../hooks/useCategories';
import { CustomCheckbox } from '../components/CustomCheckbox';
import { router, Stack } from 'expo-router';
import { BackButton } from '../components/backButton';
import { ButtonGeneric } from '../components/button-general';
import { useAddProduct } from '../hooks/useAddProduct'; // Importa o hook

export default function AddProduct() {
  const [name, setName] = useState<string>('');
  const [image, setImage] = useState<string>('');
  const [price, setPrice] = useState<string>('');
  const [url, setUrl] = useState<string>('');
  const [description, setDescription] = useState<string>('');

  // Hook para obter as categorias
  const { categories, loading, error: fetchError } = useCategories();
  const [selectedCategories, setSelectedCategories] = useState<number[]>([]);

  // Hook para adicionar produtos
  const { addProduct, isLoading, success, error } = useAddProduct();

  // Função para lidar com a seleção das categorias
  const handleCategoryToggle = (categoryId: number) => {
    setSelectedCategories((prevSelected) =>
      prevSelected.includes(categoryId)
        ? prevSelected.filter(id => id !== categoryId)
        : [...prevSelected, categoryId]
    );
  };

  const handleAddProduct = async () => {
    if (selectedCategories.length === 0) {
      Alert.alert('Selecione pelo menos uma categoria');
      return;
    }

    const priceNumber = parseFloat(price); // Converte o preço para número
    if (isNaN(priceNumber)) {
      Alert.alert('Preço inválido');
      return;
    }

    const productData = {
      name,
      image,
      price: priceNumber,
      url,
      description,
      category_id: selectedCategories[0], // Usando apenas a primeira categoria para simplificar
    };

    await addProduct(productData); // Chama o hook para enviar o produto

    if (success) {
      Alert.alert('Sucesso', 'Produto adicionado com sucesso!');
    } else if (error) {
      Alert.alert('Erro', 'Erro ao adicionar produto.');
    }
  };

  return (
    <>
      <Stack.Screen
        options={{
          headerShown: true,
          title: 'Administrador',
          headerTitleStyle: {
            fontSize: 30,
            fontFamily: 'Orbitron_700Bold',
            color: '#0361dd',
          },
          headerTitleAlign: 'center',
          headerLeft: () => <BackButton onPress={() => router.back()} />,
        }}
      />
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Adicionar Produto</Text>
        <TextInput
          style={styles.input}
          placeholder="Nome do Produto"
          value={name}
          onChangeText={setName}
        />
        <TextInput
          style={styles.input}
          placeholder="URL da Imagem"
          value={image}
          onChangeText={setImage}
        />
        <TextInput
          style={styles.input}
          placeholder="Preço"
          value={price}
          onChangeText={setPrice}
          keyboardType="numeric"
        />
        <TextInput
          style={styles.input}
          placeholder="URL do Produto"
          value={url}
          onChangeText={setUrl}
        />
        <TextInput
          style={styles.inputDescription}
          placeholder="Descrição"
          value={description}
          onChangeText={setDescription}
          multiline
          numberOfLines={4}
        />

        <Text style={styles.categoryTitle}>Selecione a Categoria:</Text>
        {loading ? (
          <Text>Carregando categorias...</Text>
        ) : fetchError ? (
          <Text style={styles.errorText}>Erro ao carregar categorias. Tente novamente mais tarde.</Text>
        ) : (
          categories.map(({ id, title, image }) => (
            <View key={id} style={styles.categoryContainer}>
              <CustomCheckbox
                value={selectedCategories.includes(id)}
                onValueChange={() => handleCategoryToggle(id)}
              />
              <Image source={{ uri: image }} style={styles.categoryImage} />
              <Text style={styles.categoryText}>{title}</Text>
            </View>
          ))
        )}

        <View style={{ alignItems: 'center', marginTop: 10 }}>
          <ButtonGeneric label="Adicionar Produto" onPress={handleAddProduct} />
        </View>

        {isLoading && <Text>Adicionando produto...</Text>}
        {success && <Text style={styles.success}>Produto adicionado com sucesso!</Text>}
        {error && <Text style={styles.error}>Erro ao adicionar produto.</Text>}
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignContent: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontFamily: 'Orbitron_600SemiBold',
    color: '#0361dd',
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    fontFamily: 'Orbitron_600SemiBold',
    color: '#0361dd',
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 50,
    marginBottom: 15,
    paddingHorizontal: 10,
  },
  inputDescription: {
    fontFamily: 'Orbitron_600SemiBold',
    color: '#0361dd',
    height: 120,
    textAlignVertical: 'top',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
  },
  categoryTitle: {
    fontFamily: 'Orbitron_600SemiBold',
    color: '#0361dd',
    fontSize: 18,
    marginTop: 20,
    marginBottom: 10,
  },
  categoryContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#fffdfd',
  },
  categoryImage: {
    width: 50,
    height: 50,
    borderRadius: 10,
    marginRight: 10,
  },
  categoryText: {
    fontFamily: 'Orbitron_600SemiBold',
    color: '#0361dd',
  },
  success: {
    color: 'green',
    marginTop: 20,
  },
  error: {
    fontFamily: 'Orbitron_600SemiBold',
    color: 'red',
    marginTop: 20,
  },
  errorText: {
    fontFamily: 'Orbitron_600SemiBold',
    color: 'red',
    textAlign: 'center',
  },
});
