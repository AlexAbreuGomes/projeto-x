import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions, Modal, TextInput, Button, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { ButtonGeneric } from '../../../components/button-general';

const { width } = Dimensions.get('window');

export default function MenuPage() {
    const router = useRouter();
    const adminPassword = "12345"; // Defina a senha desejada
    const [isModalVisible, setModalVisible] = useState(false);
    const [password, setPassword] = useState("");

    const handleProducts = () => {
        setPassword(""); // Limpa o campo de senha
        setModalVisible(true); // Exibe o modal para solicitar a senha
    };

    const verifyPassword = () => {
        if (password === adminPassword) {
            setModalVisible(false); // Fecha o modal
            router.push('/admin/administrador'); // Navega para a página de administrador
        } else {
            Alert.alert("Senha incorreta", "A senha digitada está incorreta. Tente novamente.");
            setPassword(""); // Limpa o campo de senha
        }
    };

    const handleAbout = () => {
        router.push('/sobre');
    };

    const handleCart = () => {
        console.log('Navegando para Carrinho');
    };

    const handleContact = () => {
        router.push('/contato');
    };

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>Menu</Text>

            <View style={styles.menuContainer}>
                <TouchableOpacity onPress={handleProducts} style={styles.menuButton}>
                    <Text style={styles.menuButtonText}>Administrador</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={handleAbout} style={styles.menuButton}>
                    <Text style={styles.menuButtonText}>Sobre Nós</Text>
                </TouchableOpacity>

                {/* <TouchableOpacity onPress={handleCart} style={styles.menuButton}>
                    <Text style={styles.menuButtonText}>Carrinho</Text>
                </TouchableOpacity> */}

                <TouchableOpacity onPress={handleContact} style={styles.menuButton}>
                    <Text style={styles.menuButtonText}>Contato</Text>
                </TouchableOpacity>
            </View>

            {/* Modal para solicitar a senha */}
            <Modal
                visible={isModalVisible}
                transparent={true}
                animationType="slide"
                onRequestClose={() => setModalVisible(false)}
            >
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <Text style={styles.modalTitle}>Digite a senha de acesso</Text>
                        <TextInput
                            style={styles.input}

                            placeholder="Digite sua SENHA"
                            secureTextEntry
                            value={password}
                            onChangeText={setPassword}
                        />
                        <ButtonGeneric label="Confirmar" onPress={verifyPassword} />

                        <ButtonGeneric label="Cancelar" onPress={() => {
                            setModalVisible(false);
                            setPassword(""); 
                            // Limpa o campo de senha ao cancelar
                        }} />

                    </View>
                </View>
            </Modal>
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
        color: '#24cc02',
        marginBottom: 20,
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
    modalContainer: {
        flex: 1,

        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
        width: width * 0.95,
        padding: 20,
        backgroundColor: '#fff',
        borderRadius: 10,
        alignItems: 'center',
        elevation: 10,
    },
    modalTitle: {
        fontFamily: "Orbitron_600SemiBold",
        fontSize: 18,
        marginBottom: 15,
    },
    input: {

        width: '100%',
        padding: 10,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        marginBottom: 15,
        textAlign: 'center',
    },
});

