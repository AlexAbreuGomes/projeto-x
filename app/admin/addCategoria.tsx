import React, { useState } from 'react';
import { View, Text, TextInput, Alert, StyleSheet, ScrollView, StatusBar } from 'react-native';
import { router, Stack } from 'expo-router';
import { BackButton } from '../../components/backButton';
import { ButtonGeneric } from '../../components/button-general';
import { useAddCategory } from '../../hooks/addCategorias'; // Hook para adicionar categoria

export default function AddCategory() {
  const [title, setTitle] = useState<string>('');
  const [image, setImage] = useState<string>('');

  // Hook para adicionar categoria
  const { addCategory, isLoading, success, error } = useAddCategory();

  const handleAddCategory = async () => {
    if (!title.trim() || !image.trim()) {
      Alert.alert('Erro', 'Por favor, preencha todos os campos.');
      return;
    }

    const categoryData = {
      title,
      image,
    };

    await addCategory(categoryData); // Chama o hook para enviar a categoria

    if (success) {
      Alert.alert('Sucesso', 'Categoria adicionada com sucesso!');
    } else if (error) {
      Alert.alert('Erro', 'Erro ao adicionar categoria.');
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
        <StatusBar />
        <Text style={styles.title}>Adicionar Categoria</Text>
        <TextInput
          style={styles.input}
          placeholder="Título da Categoria"
          value={title}
          onChangeText={setTitle}
        />
        <TextInput
          style={styles.input}
          placeholder="URL da Imagem"
          value={image}
          onChangeText={setImage}
        />

        <View style={{ alignItems: 'center', marginTop: 20 }}>
          <ButtonGeneric label="Adicionar Categoria" onPress={handleAddCategory} />
        </View>

        {isLoading && <Text>Adicionando categoria...</Text>}
        {success && <Text style={styles.success}>Categoria adicionada com sucesso!</Text>}
        {error && <Text style={styles.error}>Erro ao adicionar categoria.</Text>}
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
  success: {
    color: 'green',
    marginTop: 20,
  },
  error: {
    fontFamily: 'Orbitron_600SemiBold',
    color: 'red',
    marginTop: 20,
  },
});
