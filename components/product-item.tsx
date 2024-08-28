import { Image, StyleSheet, View, Text, Linking, Button } from "react-native";
import { Product } from "../types/product";

type Props = {
    product: Product
}

export const ProductItem = (props: Props) => {
    const link = () => {
        const url = props.product.url; 
        Linking.openURL(url);
    }
        
    return (
        <View style={styles.container}>
            <Image 
                source={{uri: props.product.image}} 
                style={styles.image} 
                resizeMode="cover" 
            />
            <View style={styles.infoProduct}>
                <Text style={styles.infoProductName}>{props.product.name}</Text>
                <Text style={styles.infoProductPrice}>{props.product.price}</Text>
            </View>
            <Button title="Comprar" onPress={link} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: '#fff',
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 5,
        padding: 15,
        marginVertical: 10, // Gap vertical entre os itens
        width: 320, // Largura do item (ajuste conforme necessário)
    },

    image: {     
        width: '100%',
        height: 300,
        borderRadius: 10,
        marginBottom: 10,
    },

    infoProduct: {
        alignItems: 'center',
        marginBottom: 10,
    },

    infoProductName: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 5,
    },

    infoProductPrice: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'green',
    }
});

