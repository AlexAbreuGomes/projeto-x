import { Image, StyleSheet, View, Text, Linking, Button, Pressable, TouchableOpacity, Dimensions } from "react-native";
import { Product } from "../types/product";


type Props = {
    product: Product
}
const { width } = Dimensions.get('window');

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
                ? 'rgb(3, 97, 221)'
                : 'rgb(36, 204, 2)'
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
        width: width - 10,
        height: 40,
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
       
    },

    TextoBotao:{
        color: 'white',
        textAlign: 'center',

    },

});



