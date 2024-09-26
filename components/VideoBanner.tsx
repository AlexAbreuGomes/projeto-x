import { Image, StyleSheet, View, TouchableOpacity } from 'react-native';
import { router } from "expo-router";
import { Banners } from '../types/product';

type Props = {
    product: Banners
}

export const BannerItem = ({ product }: Props) => {
    // Função para navegar para a categoria ou página de ofertas
    const handlePress = () => {
       
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={handlePress} style={styles.touchable}>
                <Image
                    source={product.imageUri}
                    style={styles.image}
                    resizeMode="cover"
                />
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        borderRadius: 10,
        marginVertical: 10,
        marginHorizontal: 5,
        overflow: 'hidden',
        borderWidth: 2,
        borderColor: 'red'
    },
    touchable: {
        width: 300,  // Largura do banner, ajuste conforme necessário
        height: 300, // Altura do banner
         borderWidth: 2,
        borderColor: 'blue'
    },
    image: {
        width: '100%',
        height: 300,
         borderWidth: 2,
        borderColor: 'green'
    }
});
