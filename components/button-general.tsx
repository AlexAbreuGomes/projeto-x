import { Image, StyleSheet, View, Text, Linking, Button, Pressable, TouchableOpacity } from "react-native";
import { Product } from "../types/product";

type Props = {
    product: Product
}

export const ButtonShop = (props: Props) => {
    const link = () => {
        const url = props.product.url;
        Linking.openURL(url);
    }
 return (
        <Pressable onPress={link}
        style={({pressed}) =>[
            {
                backgroundColor: pressed
                ? 'rgb(210, 230, 255)'
                : 'rgb(0, 0, 0)'
            },
            styles.botao
        ]}>
         
            <Text style={styles.TextoBotao}>
                Comprar
            </Text>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    botao:{ 
        width: 100,
        height: 40,
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
        margin: 10,
    },

    TextoBotao:{
        color: 'white',
        textAlign: 'center',

    },

});



