import React from 'react';
import { View, Text, StyleSheet, Dimensions, StatusBar, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import useLoadFonts from '../../../hooks/useLoadFonts'; // Importa o hook personalizado
import { BackButton } from '../../../components/backButton';
import { router, Stack } from 'expo-router';

const screenWidth = Dimensions.get('window').width;

export default function AboutPage() {

    const fontsLoaded = useLoadFonts(); // Usa o hook de carregamento de fontes

    if (!fontsLoaded) {
        return null; // Retorna nulo até que as fontes sejam carregadas
    }

    return (
        <>
            <Stack.Screen
                options={{
                    headerShown: true,
                    title: "",
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
            <SafeAreaView style={styles.container}>
                <StatusBar />
                <Text style={styles.title}>Sobre Nós</Text>
                <ScrollView contentContainerStyle={styles.content}>
                    <Text style={styles.description}>
                        Bem-vindo ao nosso aplicativo de loja de acessórios! Criado em 2024, nosso app foi desenvolvido com a missão de facilitar a sua experiência de compra, oferecendo uma interface intuitiva e recursos que atendem às suas necessidades.
                    </Text>
                    <Text style={styles.description}>
                        Aqui, você encontrará uma ampla variedade de acessórios de alta performance, cuidadosamente selecionados para garantir qualidade, funcionalidade e estilo. Nossa equipe está sempre atenta às últimas tendências do mercado, para que você tenha acesso aos produtos mais inovadores e desejados.
                    </Text>
                    <Text style={styles.description}>
                        Além disso, nosso aplicativo oferece um sistema de navegação fácil, permitindo que você explore nossas categorias de produtos, faça buscas rápidas e acesse promoções exclusivas. Com segurança e praticidade, você poderá finalizar suas compras em poucos cliques e acompanhar o status dos seus pedidos em tempo real.
                    </Text>
                    <Text style={styles.description}>
                        Agradecemos por escolher nosso aplicativo para suas compras e esperamos que você tenha uma experiência incrível, encontrando os acessórios perfeitos para complementar seu estilo de vida ativo e dinâmico.
                    </Text>
                    <Text style={styles.description}>
                        Vamos juntos transformar sua forma de comprar!
                    </Text>

                </ScrollView>
            </SafeAreaView>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fffdfd',
        paddingHorizontal: 20,
    },
    title: {
        fontSize: 32,
        fontFamily: 'Orbitron_800ExtraBold',
        color: '#24cc02',
        marginBottom: 20,
        textAlign: 'center',
    },
    content: {
        paddingBottom: 20,
    },
    description: {
        fontSize: 20,
        fontFamily: 'Orbitron_600SemiBold',
        color: '#0361dd',
        width:screenWidth*0.85,
        marginBottom: 20,
        marginLeft:10,
        textAlign: 'justify',
        justifyContent:'center'
    },
});
