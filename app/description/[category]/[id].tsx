import { View, StyleSheet, Text } from 'react-native';
import { router, Stack, useLocalSearchParams } from 'expo-router';
import { carregadores } from '../../../data/dataCarregadores';
import { powerBanks } from '../../../data/dataPowerBanks';
import { acessorios } from '../../../data/dataAcessorios';
import { cabos } from '../../../data/dataCabos';
import { fones } from '../../../data/dataFones';
import { Product } from '../../../types/product';
import { ProductDetails } from '../../../components/product-details';  // Importa o novo componente
import { BackButton } from '../../../components/backButton';

export default function ProductDetailsPage() {
    const { id, category }: { id: string; category: string } = useLocalSearchParams();

    // Função para selecionar a lista com base na categoria
    const getProductList = (category: string): Product[] => {
        switch (category) {
            case 'carregadores':
                return carregadores;
            case 'cabos':
                return cabos;
            case 'powerbanks':
                return powerBanks;
            case 'acessorios':
                return acessorios;
            case 'fones':
                return fones;
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
            <>
            <Stack.Screen
                options={{
                    headerShown: true,
                    title: category,
                    headerTitleStyle: {
                        fontSize: 30,
                        fontFamily: 'Orbitron_700Bold',
                        color: '#0361dd',
                    },
                    headerTitleAlign: 'center',
                    headerLeft: () => (
                        <BackButton onPress={() => router.back()} /> // Botão de voltar
                    ),
                }} />
                
                <View style={styles.container}>
                    <Text>Produto não encontrado.</Text>
                </View></>
        );
    }

    return (


        <><Stack.Screen
            options={{
                headerShown: true,
                title:'',
                headerTitleStyle: {
                    fontSize: 30,
                    fontFamily: 'Orbitron_700Bold',
                    color: '#0361dd',
                },
                headerTitleAlign: 'center',
                headerLeft: () => (
                    <BackButton onPress={() => router.back()} /> // Botão de voltar
                ),
            }} />
            
            <View style={styles.container}>
                {/* Renderize o produto usando o novo componente ProductDetails */}
                <ProductDetails product={product} />
            </View></>
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
