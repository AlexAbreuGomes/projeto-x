import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, Alert, StatusBar } from 'react-native';
import { useProducts } from '../../hooks/useProducts';
import { useDeleteProducts } from '../../hooks/deleteProdutos';
import { CustomCheckbox } from '../../components/CustomCheckbox';
import { ButtonGeneric } from '../../components/button-general';
import { router, Stack } from 'expo-router';
import { BackButton } from '../../components/backButton';
import { SafeAreaView } from 'react-native-safe-area-context';

const ListProducts = () => {
  const products = useProducts();
  const { deleteProducts, isLoading: isLoadingDelete, error: deleteError, success } = useDeleteProducts();
  const [selectedIds, setSelectedIds] = useState<number[]>([]);

  const toggleSelect = (id: number) => {
    setSelectedIds(prevSelectedIds => 
      prevSelectedIds.includes(id)
        ? prevSelectedIds.filter(selectedId => selectedId !== id)
        : [...prevSelectedIds, id]
    );
  };

  const handleDelete = () => {
    if (selectedIds.length === 0) {
      Alert.alert('Erro', 'Nenhum produto selecionado.');
      return;
    }
    deleteProducts(selectedIds);
    setSelectedIds([]);
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
            <BackButton onPress={() => router.back()} />
          ),
        }} 
      />
      <SafeAreaView style={styles.container}>
        <StatusBar />
        <View style={styles.listContainer}>
          <FlatList
            data={products}
            keyExtractor={item => item.id.toString()}
            renderItem={({ item }) => (
              <View style={styles.itemContainer}>
                <CustomCheckbox
                  value={selectedIds.includes(item.id)}
                  onValueChange={() => toggleSelect(item.id)}
                />
                <Text style={styles.itemText} numberOfLines={2}>{item.name}</Text>
              </View>
            )}
            contentContainerStyle={styles.flatListContent}
          />
        </View>
        
        <View style={styles.buttonContainer}>
          <ButtonGeneric label="Excluir Produtos Selecionados" onPress={handleDelete} disabled={isLoadingDelete} />
          {isLoadingDelete && <Text style={styles.statusText}>Excluindo produtos...</Text>}
          {deleteError && <Text style={styles.error}>{deleteError}</Text>}
          {success && <Text style={styles.success}>Produtos excluídos com sucesso!</Text>}
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  listContainer: {
    flex: 1,
  },
  flatListContent: {
    paddingBottom: 20,
  },
  itemText: {
    marginLeft: 10,
    fontFamily: 'Orbitron_600SemiBold',
    color: '#0361dd',
    fontSize: 12,
  },
  buttonContainer: {
    paddingVertical: 10,
    alignItems: 'center',
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  statusText: {
    marginTop: 10,
    fontSize: 14,
    color: '#333',
  },
  error: {
    color: 'red',
  },
  success: {
    color: 'green',
  },
});

export default ListProducts;
    