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
                   source={ product.imageUri }
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
        width: '100%', // Ajuste a largura do item conforme necessário
    },

    touchable: {
        width: '100%',  // Largura do banner, ajuste conforme necessário
        height: 200, // Altura do banner
       
    },
    image: {
        width: '100%',
        height: 200,
       
        
    }
});
