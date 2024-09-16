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
            <ButtonShop product={product} />

            <View style={styles.infoProduct}>
                <Text style={styles.infoProductName}>{product.name}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: '#fff',
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 5,
        padding: 15,
        marginVertical: 10,
        width: '90%', // Ajuste a largura do item conforme necessário
    },

    touchable: {
        width: '100%',
        height: 200,
    },
    image: {
        width: '100%',
        height: '100%',
        borderRadius: 10,
    },

    infoProduct: {
        alignItems: 'center',
        marginBottom: 10,
    },

    infoProductName: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 5,
    },

    infoProductPrice: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'green',
    }
});
