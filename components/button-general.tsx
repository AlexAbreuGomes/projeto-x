import { StyleSheet, View, Text, Linking, Pressable, Dimensions } from "react-native";
import React from "react";
import { RFPercentage } from "react-native-responsive-fontsize";

type ButtonShopProps = {
    url: string;
    label: string; // Texto do botão para maior flexibilidade
};

const { width } = Dimensions.get('window');

export const ButtonGeneric = ({ url, label }: ButtonShopProps) => {
    const openLink = () => {
        Linking.openURL(url);
    }

    return (
        <Pressable
            onPress={openLink}
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
