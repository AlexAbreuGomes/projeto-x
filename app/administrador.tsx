// src/screens/AddProduct.tsx
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView, Image, Alert } from 'react-native';
import { useCategories } from '../hooks/useCategories';

import { CustomCheckbox } from '../components/CustomCheckbox';

export default function AddProduct() {
  const [name, setName] = useState<string>('');
  const [image, setImage] = useState<string>('');
  const [price, setPrice] = useState<string>('');
  const [url, setUrl] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [success, setSuccess] = useState<string>('');
  const [error, setError] = useState<string>('');

  // Hook para obter as categorias
  const { categories, loading, error: fetchError } = useCategories();
  const [selectedCategories, setSelectedCategories] = useState<number[]>([]);

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

    // Aqui você pode enviar os dados para o backend
    setSuccess('Produto adicionado com sucesso!');
  };

  return (
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
        style={styles.input}
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

      <Button title="Adicionar Produto" onPress={handleAddProduct} />
      {success ? <Text style={styles.success}>{success}</Text> : null}
      {error ? <Text style={styles.error}>{error}</Text> : null}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
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
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 15,
    paddingHorizontal: 10,
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
    color: 'red',
    marginTop: 20,
  },
  errorText: {
    color: 'red',
    textAlign: 'center',
  },
});
