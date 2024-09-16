import { View, Text, Image, StyleSheet } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import { list } from '../../../data/datasmartphone'; // Lista de smartphones
import { smartwatch } from '../../../data/datawatchs'; // Lista de smartwatches
import { acessorios } from '../../../data/dataAcessorios'; // Lista de acessórios
import { notebooks } from '../../../data/dataNotebooks'; // Lista de notebooks
import { Product } from '../../../types/product'; // Importa o tipo Product

export default function ProductDetails() {
    const { id, category }: { id: string; category: string } = useLocalSearchParams();  // Pega o ID e a categoria da URL

    // Função para selecionar a lista com base na categoria
    const getProductList = (category: string): Product[] => {
        switch (category) {
            case 'smartphones':
                return list;
            case 'watchs':
                return smartwatch;
            case 'acessorios':
                return acessorios;
            case 'notebooks':
                return notebooks;
            default:
                return [];
        }
    };

    // Obter a lista de produtos correta
    const productList: Product[] = getProductList(category);

    // Procurando o produto na lista selecionada
    const product: Product | undefined = productList.find((item: Product) => item.id === Number(id));

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
            <Text style={styles.textStyle}> ohhhhh minino lindo </Text>



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
    textStyle:{
        fontSize: 20,
        color: 'black',
        fontWeight: 'bold'

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
