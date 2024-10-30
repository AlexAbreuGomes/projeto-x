// src/components/CategorySelector.tsx
import React from 'react';
import { View, Text, Image, StyleSheet, ActivityIndicator } from 'react-native';
import CheckBox from '@react-native-community/checkbox';

type Category = {
  id: number;
  title: string;
  image: string;
};

type CategorySelectorProps = {
  categories: Category[];
  selectedCategories: number[];
  onToggleCategory: (categoryId: number) => void;
  loading: boolean;
  error: string | null;
};

export default function CategorySelector({
  categories,
  selectedCategories,
  onToggleCategory,
  loading,
  error,
}: CategorySelectorProps) {
  return (
    <View>
      <Text style={styles.categoryTitle}>Selecione a Categoria:</Text>
      {loading ? (
        <ActivityIndicator size="large" color="#0361dd" />
      ) : error ? (
        <Text style={styles.errorText}>Erro ao carregar categorias. Tente novamente mais tarde.</Text>
      ) : (
        categories.map(({ id, title, image }) => (
          <View key={id} style={styles.categoryContainer}>
            <CheckBox
              value={selectedCategories.includes(id)}
              onValueChange={() => onToggleCategory(id)}
            />
            <Image source={{ uri: image }} style={styles.categoryImage} />
            <Text style={styles.categoryText}>{title}</Text>
          </View>
        ))
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  categoryTitle: {
    
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
  errorText: {
    color: 'red',
    textAlign: 'center',
  },
});
