import { StyleSheet, View, Text, Linking, Pressable, Dimensions } from "react-native";
import React from "react";
import { RFPercentage } from "react-native-responsive-fontsize";

type ButtonShopProps = {
    label: string;               // Texto do botão
    url?: string;                // URL opcional para navegação externa
    onPress?: () => void;        // Função de ação local opcional
    disabled?: boolean;           // Propriedade para desabilitar o botão
};

const { width } = Dimensions.get('window');

export const ButtonGeneric = ({label, url, onPress, disabled = false }: ButtonShopProps )=> {
    const handlePress = () => {
        if (disabled) return; // Não faz nada se o botão estiver desabilitado

        if (url) {
            Linking.openURL(url);
        } else if (onPress) {
            onPress();
        }
    };

    return (
        <Pressable
            onPress={handlePress}
            style={({ pressed }) => [
                {
                    backgroundColor: disabled ? 'gray' : (pressed ? 'rgb(36, 204, 2)' : 'rgb(3, 97, 221)'),
                },
                styles.button
            ]}
            disabled={disabled} // Desabilita o Pressable se a propriedade estiver true
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
