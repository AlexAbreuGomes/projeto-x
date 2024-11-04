import { Image, StyleSheet, View, Text, TouchableOpacity, Dimensions } from 'react-native';
import { Product } from "../types/product";
import { ButtonGeneric } from "./button-general";
import { router } from "expo-router";
import { RFPercentage } from 'react-native-responsive-fontsize'; // Para fontes responsivas
import React from 'react';



// Obtenha as dimensões da tela
const { width } = Dimensions.get('window');

type Props = {
    product: Product
}

export const ProductItem = ({ product }: Props) => {
    // Função para navegar para a página de detalhes do produto
    const handlePress = () => {
        // Inclui a categoria e o id na navegação
        router.push(`/description/${product.category_id}/${product.id}`);
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={handlePress} style={styles.touchable}>
                <Image
                    source={{ uri: product.image }}
                    style={styles.image}
                    resizeMode="contain"  // Garante que a imagem seja redimensionada dentro da caixa sem estourar
                />
            </TouchableOpacity>

            <View style={styles.infoProduct}>
                <Text style={styles.infoProductName} numberOfLines={2}>{product.name}</Text>
                <Text style={styles.infoProductPrice}>
                    {`$ ${new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(product.price).replace('$', '')}`}
                </Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,  // Permite que o contêiner expanda conforme necessário
        alignItems: 'center',
        backgroundColor: '#fffdfd',
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 5,
        margin: 10,
        width: width * 0.45,  // O item ocupará cerca de 45% da largura da tela
    },
    touchable: {
        width: '100%',
        height: undefined,  // Remover altura fixa
        aspectRatio: 1, // Ajusta o tamanho da área de toque
    },
    image: {
        width: '100%',
        height: undefined, // Remover altura fixa
        aspectRatio: 1, // Ajusta a imagem para manter uma proporção
        borderRadius: 10,
    },
    infoProduct: {
        padding: 10,  // Ajuste conforme necessário
        alignItems: 'center',
        justifyContent: 'center',
    },
    infoProductName: {
        fontSize: RFPercentage(2.8), // Ajuste conforme necessário
        fontFamily: 'Orbitron_600SemiBold',
        textAlign: 'justify',
        marginBottom: 5,
        color: '#0361dd',
    },
    infoProductPrice: {
        fontSize: RFPercentage(3.2), // Ajuste conforme necessário
        fontFamily: 'Orbitron_800ExtraBold',
        color: '#24cc02',
    }
});
