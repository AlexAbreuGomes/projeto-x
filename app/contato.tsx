import React from 'react';
import { View, StyleSheet, Dimensions, Image } from 'react-native';
import { ButtonGeneric } from '../components/button-general';
import { SafeAreaView } from 'react-native-safe-area-context';
import { BackButton } from '../components/backButton';
import { router, Stack } from 'expo-router';
import { useFonts, Orbitron_600SemiBold, Orbitron_700Bold, Orbitron_800ExtraBold, Orbitron_900Black } from '@expo-google-fonts/orbitron';

const { width } = Dimensions.get('window');

export default function Contato() {
  const perfilUrl = `https://avatars.githubusercontent.com/u/153616106?v=4`;
  const whatsappUrl = `https://wa.me/5584981823423?text=${encodeURIComponent("Olá, gostaria de falar com o suporte.")}`;
  const githubUrl = `https://github.com/AlexAbreuGomes`;
  const linkedinUrl = `https://www.linkedin.com/feed/`;
  const emailUrl = `mailto:alex.abreu.softwaredeveloper@gmail.com?subject=${encodeURIComponent("Suporte ao Cliente")}&body=${encodeURIComponent("Olá, gostaria de saber mais sobre...")}`;

  return (
    <>
      <Stack.Screen
        options={{
          headerShown: true,
          title: "Contatos",
          headerTitleStyle: {
            fontSize: 30,
            fontFamily: 'Orbitron_700Bold',
            color: '#0361dd',
          },
          headerTitleAlign: 'center',
          headerLeft: () => (
            <BackButton onPress={() => router.back()} /> // Botão de voltar
          ),
        }} 
      />
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.profileContainer}>
          <Image
            source={{ uri: perfilUrl }} 
            style={styles.profileImage}
          />
        </View>
        <View style={styles.container}>
          <ButtonGeneric url={whatsappUrl} label="WhatsApp" />
          <ButtonGeneric url={githubUrl} label="GitHub" />
          <ButtonGeneric url={linkedinUrl} label="LinkedIn" />
          <ButtonGeneric url={emailUrl} label="Email" />
        </View>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    // justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fffdfd',
  },
  profileContainer: {
    marginTop: 50, // Ajuste este valor para mover a imagem mais para cima ou para baixo
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    fontFamily:'Orbitron_600SemiBold',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fffdfd',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
    padding: 20,
    marginTop:50,
    width: width * 0.9,
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    borderWidth: 2,
    borderColor: '#0361dd',
  },
});
