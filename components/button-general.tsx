import { StyleSheet, View, Text, Linking, Pressable, Dimensions } from "react-native";
import React from "react";
import { RFPercentage } from "react-native-responsive-fontsize";

type ButtonShopProps = {
    label: string;               // Texto do botão
    url?: string;                // URL opcional para navegação externa
    onPress?: () => void;        // Função de ação local opcional
};

const { width } = Dimensions.get('window');

export const ButtonGeneric = ({label, url, onPress }: ButtonShopProps )=> {
    const handlePress = () => {
        if (url) {
            Linking.openURL(url);
        }else if (onPress){
            onPress();
        }
    }

    return (
        <Pressable
            onPress={handlePress}
            style={({ pressed }) => [
                {
                    backgroundColor: pressed ?'rgb(36, 204, 2)'  : 'rgb(3, 97, 221)',
                },
                styles.button
            ]}
        >
            <Text style={styles.buttonText}>{label}</Text>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    button: { 
        width: width - 80,
        height: 40,
        padding: 10,
        marginBottom: 10,
        borderRadius: 5,
        alignItems: 'center',
    },
    buttonText: {
        color: 'white',
        textAlign: 'center',
        fontFamily: 'Orbitron_600SemiBold',
        fontSize: RFPercentage(2.2), // Ajuste conforme necessário
    },
});
