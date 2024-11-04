import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions, ScrollView } from 'react-native';
import { Product } from '../types/product';  // Importa o tipo de produto
import { SafeAreaView } from 'react-native-safe-area-context';
import { ButtonGeneric } from './button-general';
import { RFPercentage } from 'react-native-responsive-fontsize'; // Para fontes responsivas

const screenWidth = Dimensions.get('window').width;

// Defina as props que o componente vai receber
type ProductDetailsProps = {
    product: Product;
};

export const ProductDetails = ({ product }: ProductDetailsProps) => {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollContainer}>
                <Text style={styles.infoProductName}>{product.name}</Text>
                <View style={styles.containerImage}> 
                    <Image
                        source={{ uri: product.image }}
                        style={styles.image}
                        resizeMode="contain"  // Garante que a imagem seja redimensionada dentro da caixa sem estourar
                    />
                </View> 
                <Text style={styles.infoProductPrice}>
                    {`$ ${new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(product.price).replace('$', '')}`}
                </Text>
                <View style={styles.infoProduct}>
                    <Text style={styles.infoProductDescripion}>{product.description}</Text>
                </View>
            </ScrollView>
            <View>
                <ButtonGeneric url={product.url} label="Comprar" />
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start', // Muda para flex-start para alinhar o conteúdo no topo
        alignItems: 'center', // Centraliza horizontalmente
    },
    scrollContainer: {
        alignItems: 'center', // Centraliza os itens do ScrollView
        paddingBottom: 80, // Adiciona espaço inferior para evitar que o texto fique sobre o botão
    },
    containerImage: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff',
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 5,
        width: 300,
        height: 250,  // Ajustado para acomodar bem os elementos
        marginBottom: 15, // Espaçamento abaixo da imagem
    },
    image: {
        width: '90%',
        height: '100%',  // A imagem vai se ajustar ao tamanho do Touchable
        borderRadius: 10,
    },
    infoProduct: {
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 15, // Espaçamento abaixo da descrição
    },
    infoProductName: {
        fontSize: RFPercentage(2.5), // Ajuste conforme necessário
        fontFamily: 'Orbitron_600SemiBold',
        textAlign: 'center',
        color: '#0361dd',
        marginBottom: 15
    },
    infoProductDescripion: {
        fontSize: RFPercentage(2.5), // Ajuste conforme necessário
        fontFamily: 'Orbitron_600SemiBold',
        textAlign: 'justify',
        color: '#0361dd',
        margin: 10,
        width: screenWidth*0.80,
        padding:10
    },
    infoProductPrice: {
        fontSize: 26,  // Ajuste o tamanho da fonte para o preço
        fontFamily: 'Orbitron_800ExtraBold',
        color: '#24cc02',
    },
});
