import { Image, StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { Product } from "../types/product";
import { ButtonShop } from "./button-general";
import { router } from "expo-router";

type Props = {
    product: Product
}

export const ProductItem = ({ product }: Props) => {
    // Função para navegar para a página de detalhes do produto
    const handlePress = () => {
        // Inclui a categoria e o id na navegação
        router.push(`/description/${product.category}/${product.id}`);
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={handlePress} style={styles.touchable}>
                <Image
                    source={{ uri: product.image }}
                    style={styles.image}
                    resizeMode="contain"
                />
            </TouchableOpacity>

            <View style={styles.infoProduct}>
                <Text style={styles.infoProductName}>{product.name}</Text>
                <Text style={styles.infoProductPrice}>
                    {`$ ${new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(product.price).replace('$', '')}`}
                </Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: '#fffdfd',
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 5,
        margin: 5, // Ajuste de margem
        width: '90%', // Ajuste a largura do item conforme necessário
        height: 310
    },


    touchable: {
        width: '100%',
        height: 200,
    },
    image: {
        width: '100%',
        height: 200,
        borderRadius: 10,
    },

    infoProduct: {
        alignItems: 'center',

        fontFamily: 'Orbitron_600SemiBold',
    },

    infoProductName: {
        fontSize: 18,
        fontFamily: 'Orbitron_600SemiBold',
        
        textAlign: 'center',
        marginBottom: 10,
        color: '#0361dd',

    },

    infoProductPrice: {
        fontSize: 22,
        fontFamily: 'Orbitron_800ExtraBold',
        color: '#24cc02',
    }
});
