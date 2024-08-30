import { TextInput, StyleSheet, View, Button } from 'react-native';
import { Search } from '../types/product';
import { useState } from 'react'; // Importe useState de 'react'

type Props = {
    search: Search
}

export const SearchDevice = (props: Props) => {
    const [searchText, setSearchText] = useState(''); // Declare uma variável de estado para o texto de pesquisa

    const handleSearch = () => {
        // Execute a lógica de pesquisa usando a variável de estado searchText
        console.log(searchText);
    };

    return (
        <View>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder={props.search.placeholder}
                    onChangeText={text => setSearchText(text)} // Atualize a variável de estado searchText
                />
                <Button
                    title="Pesquisar"
                    onPress={handleSearch} // Chame a função handleSearch quando o botão for pressionado
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 15,
        width: '90%',
        margin: 10,
        borderWidth: 1,
        borderColor: '#ddd',
        alignSelf: 'center',
    },
    input: {
        flex: 1,
    },
});