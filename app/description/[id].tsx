import { View, Text, Image, StyleSheet } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import { list } from '../../data/data'; // Importe sua lista de produtos
import { smartwatch } from '../../data/data2'; 
import { acessorios } from '../../data/dataAcessorios';
import { notebooks } from '../../data/dataNotebooks';

export default function ProductDetails() {
    const { id } = useLocalSearchParams();  // Pega o ID da URL
    const allProducts = [...list, ...smartwatch, ...acessorios, ...notebooks];

    // Procurando o produto nas listas combinadas
    const product = allProducts.find((item) => item.id === Number(id));
    

    if (!product) {
        return (
            <View style={styles.container}>
                <Text>Produto não encontrado.</Text>
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <Text style={styles.name}>{product.name}</Text>
            <Image source={{ uri: product.image }} style={styles.image} />
            <Text> parabens Alex vc é fodah</Text>
            
            
            
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
