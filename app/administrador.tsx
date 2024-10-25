import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import axios from 'axios';

const AddProduct: React.FC = () => {
    const [name, setName] = useState<string>('');
    const [price, setPrice] = useState<string>('');
    const [error, setError] = useState<string>('');
    const [success, setSuccess] = useState<string>('');

    const handleAddProduct = async () => {
        try {
            // Substitua 'http://localhost:3000/api/admin/products' pelo IP do seu servidor se necessário
            const token = 'seu_token_jwt'; // O token deve ser obtido durante o login do admin
            const response = await axios.post('http://localhost:3000/api/admin/products', {
                name,
                price: parseFloat(price), // Converter o preço para um número
            }, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            setSuccess('Produto adicionado com sucesso!');
            setError('');
            // Limpar os campos após o sucesso
            setName('');
            setPrice('');
        } catch (error) {
            console.error('Erro ao adicionar produto:', error);
            setError('Erro ao adicionar produto. Verifique os dados e tente novamente.');
            setSuccess('');
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Adicionar Produto</Text>
            <TextInput
                style={styles.input}
                placeholder="Nome do Produto"
                value={name}
                onChangeText={setName}
            />
            <TextInput
                style={styles.input}
                placeholder="Preço do Produto"
                value={price}
                onChangeText={setPrice}
                keyboardType="numeric"
            />
            {error ? <Text style={styles.error}>{error}</Text> : null}
            {success ? <Text style={styles.success}>{success}</Text> : null}
            <Button title="Adicionar Produto" onPress={handleAddProduct} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        justifyContent: 'center',
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 15,
        paddingHorizontal: 10,
    },
    error: {
        color: 'red',
        marginBottom: 10,
    },
    success: {
        color: 'green',
        marginBottom: 10,
    },
});

export default AddProduct;
