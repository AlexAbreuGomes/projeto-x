import React from 'react';
import { View, Text, StyleSheet, Dimensions, StatusBar, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import useLoadFonts from '../../../hooks/useLoadFonts'; // Importa o hook personalizado

const { width, height } = Dimensions.get('window');

export default function AboutPage() {

    const fontsLoaded = useLoadFonts(); // Usa o hook de carregamento de fontes

    if (!fontsLoaded) {
        return null; // Retorna nulo até que as fontes sejam carregadas
      }

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar />
            <Text style={styles.title}>Sobre Nós</Text>
            <ScrollView style={styles.content}>
                <Text style={styles.description}>
                    Bem-vindo à nossa loja de acessórios! Fundada em 2024, nós nos especializamos em 
                    oferecer acessórios de alta performance que atendem às necessidades dos nossos 
                    clientes. Nossa missão é proporcionar produtos que não apenas complementem seu estilo, 
                    mas também ofereçam funcionalidade e durabilidade.
                </Text>
                <Text style={styles.description}>
                    Cada um de nossos produtos é cuidadosamente selecionado para garantir a mais alta 
                    qualidade, visando a satisfação e o conforto de nossos clientes. Estamos sempre em 
                    busca das últimas tendências e inovações para trazer o que há de melhor no mercado.
                </Text>
                <Text style={styles.description}>
                    Agradecemos por escolher nossa loja e esperamos que você encontre o acessório perfeito para 
                    acompanhar seu estilo de vida ativo e dinâmico.
                </Text>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fffdfd',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    title: {
        fontSize: 32,
        fontFamily: 'Orbitron_800ExtraBold',
        color: '#24cc02',
        marginBottom: 20,
    },
    content: {
        width: width * 0.9, // O conteúdo ocupará 90% da largura da tela
        height: height * 0.8, // Você pode remover isso se o ScrollView estiver apenas dentro do SafeAreaView
        padding: 10, // Adicionando padding para criar espaço
    },
    description: {
        fontSize: 20,
        fontFamily: 'Orbitron_600SemiBold',
        color: '#0361dd',
        marginBottom: 20, // Aumentando a margem inferior para mais espaço entre os textos
        textAlign:'justify'
    },
});
