import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Dimensions, ScrollView } from 'react-native';
import { Product } from '../types/product';  // Importa o tipo de produto
import { SafeAreaView } from 'react-native-safe-area-context';
import { ButtonShop } from './button-general';
import { RFPercentage } from 'react-native-responsive-fontsize'; // Para fontes responsivas

const { width } = Dimensions.get('window');
// Defina as props que o componente vai receber
type ProductDetailsProps = {
    product: Product;
};

export const ProductDetails = ({ product }: ProductDetailsProps) => {
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.infoProductName}>{product.name}</Text>
            <View style={styles.containerImage}>
            
                <Image
                    source={{ uri: product.image }}
                    style={styles.image}
                    resizeMode="contain"  // Garante que a imagem seja redimensionada dentro da caixa sem estourar
                />
            </View>
            <ButtonShop product={product} />
            <Text style={styles.infoProductPrice}>
                    {`$ ${new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(product.price).replace('$', '')}`}
                </Text>
                <ScrollView>
            <View style={styles.infoProduct}>
                
                <Text style={styles.infoProductDescripion}>{product.description}</Text>
               
            </View>
            </ScrollView>
        </SafeAreaView>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1
    },

    containerImage: {
        justifyContent:'center',
        alignItems: 'center',
        backgroundColor: '#ffffff',
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 5,
        margin: 15,
        width: width - 40, 
        height: 250,  // Ajustado para acomodar bem os elementos
    },
    touchable: {
        width: '100%',
        height: 180,  // Ajuste o tamanho da área de toque
    },
    image: {
        width: '90%',
        height: '100%',  // A imagem vai se ajustar ao tamanho do Touchable
        borderRadius: 10,
    },
    infoProduct: {
        
        alignItems: 'center',
        justifyContent: 'center',
        width: width - 30,  // O item ocupará cerca de 45% da largura da tela
        height: undefined,  // Ajustado para acomodar bem os elementos
        marginLeft:10,
        marginBottom:50
    },
    infoProductName: {
        fontSize: RFPercentage(2.8), // Ajuste conforme necessário
        fontFamily: 'Orbitron_600SemiBold',
        textAlign: 'center',
        color: '#0361dd',
    },

    infoProductDescripion: {
        fontSize: RFPercentage(2.8), // Ajuste conforme necessário
        fontFamily: 'Orbitron_600SemiBold',
        textAlign: 'justify',
        marginTop: 15,
        marginBottom:15,
        color: '#0361dd',
    },

    infoProductPrice: {
        fontSize: 26,  // Ajuste o tamanho da fonte para o preço
        fontFamily: 'Orbitron_800ExtraBold',
        color: '#24cc02',
    }

});
