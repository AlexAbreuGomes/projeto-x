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
        
    return(
            <View style={styles.container}>
                <Image source={{uri: props.product.image}}
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

    container:{ 
        alignItems: 'center', 
    },

    image: {     
        width: 300,
        height: 300,
        borderRadius: 5, // Add this line to create a border radius
        
    },

    infoProduct: {
        flex: 1,
        
    },

    infoProductName: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'left'
    },

    infoProductPrice: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'green',
    }
})