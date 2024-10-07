import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const { width } = Dimensions.get('window');

export default function MenuPage() {
    const handleProducts = () => {
        console.log('Navegando para Produtos');
    };

    const handleAbout = () => {
        console.log('Navegando para Sobre Nós');
    };

    const handleCart = () => {
        console.log('Navegando para Carrinho');
    };

    const handleContact = () => {
        console.log('Navegando para Contato');
    };

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>Menu</Text>
            
            <View style={styles.menuContainer}>
                <TouchableOpacity onPress={handleProducts} style={styles.menuButton}>
                    <Text style={styles.menuButtonText}>Produtos</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={handleAbout} style={styles.menuButton}>
                    <Text style={styles.menuButtonText}>Sobre Nós</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={handleCart} style={styles.menuButton}>
                    <Text style={styles.menuButtonText}>Carrinho</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={handleContact} style={styles.menuButton}>
                    <Text style={styles.menuButtonText}>Contato</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fffdfd',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 32,
        fontFamily: 'Orbitron_800ExtraBold',
        color: 'rgb(3, 97, 221)',
        marginBottom: 40,
    },
    menuContainer: {
        width: width * 0.8,
        alignItems: 'center',
    },
    menuButton: {
        backgroundColor: 'rgb(3, 97, 221)',
        width: '100%',
        padding: 15,
        borderRadius: 10,
        marginBottom: 20,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 5,
    },
    menuButtonText: {
        color: '#ffffff',
        fontSize: 20,
        fontFamily: 'Orbitron_600SemiBold',
    },
});
