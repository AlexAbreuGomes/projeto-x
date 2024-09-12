import { View, Text, Image, StyleSheet } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import { list } from '../../data/data'; // Importe sua lista de produtos

export default function ProductDetails() {
    const { id } = useLocalSearchParams();  // Pega o ID da URL
    const product = list.find((item) => item.id === Number(id)); // Encontra o produto pelo ID

    if (!product) {
        return (
            <View style={styles.container}>
                <Text>Produto não encontrado.</Text>
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <Image source={{ uri: product.image }} style={styles.image} />
            <Text style={styles.name}>{product.name}</Text>
            
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },

    image: {
        width: 200,
        height: 200,
        borderRadius: 10,
        marginBottom: 20,
    },

    name: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
        textAlign: 'center',
    },

    description: {
        fontSize: 16,
        textAlign: 'center',
        color: '#666',
    },
});
