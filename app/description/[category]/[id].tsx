// src/app/[id].tsx
import React from 'react';
import { View, StyleSheet, Text, ActivityIndicator } from 'react-native';
import { router, Stack, useLocalSearchParams } from 'expo-router';
import { ProductDetails } from '../../../components/product-details'; // Importa o componente ProductDetails
import { BackButton } from '../../../components/backButton';
import { useProductById } from '../../../hooks/useProductById'; // Importa o novo hook
import { SafeAreaView } from 'react-native-safe-area-context';

export default function ProductDetailsPage() {
    const { id } = useLocalSearchParams(); // Obtém o ID do produto da URL
    const { product, loading, error } = useProductById(id as string); // Usa o hook para buscar o produto

    if (loading) {
        return (
          <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <ActivityIndicator size="large" color="#0361dd" />
          </SafeAreaView>
        );
      }

    if (error) {
        return (
            
            <View style={styles.container}>
                <Text>{error}</Text>
            </View>
        ); // Mostra uma mensagem de erro
    }

    if (!product) {
        return (
            <>
                <Stack.Screen
                    options={{
                        headerShown: true,
                        title: '',
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
                <View style={styles.container}>
                    <Text>Produto não encontrado.</Text>
                </View>
            </>
        );
    }

    return (
        <>
            <Stack.Screen
                options={{
                    headerShown: true,
                    title: product.name,
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
            <View style={styles.container}>
                {/* Renderize o produto usando o componente ProductDetails */}
                <ProductDetails product={product} />
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#f5f5f5',
    },
});
