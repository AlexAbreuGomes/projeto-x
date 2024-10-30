import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from 'expo-router';
import React from 'react';
import useLoadFonts from '../../hooks/useLoadFonts'; // Importa o hook personalizado
export default function TabLayout() {
    const fontsLoaded = useLoadFonts(); // Usa o hook de carregamento de fontes
    if (!fontsLoaded) {
        return null; // Retorna nulo até que as fontes sejam carregadas
      }

    return (
        <Tabs screenOptions={{
            headerShown: false,
            tabBarActiveTintColor: '#0361dd',
            tabBarLabelStyle: { fontFamily: 'Orbitron_600SemiBold', fontSize: 12 }, // Aplicando a fonte personalizada
        }}>
            <Tabs.Screen
                name="index"
                options={{
                    title: 'INICÍO',
                    tabBarIcon: ({ color }) => <FontAwesome size={25} name="home" color={color} />,
                }}
            />

            <Tabs.Screen
                name="(categorias)"
                options={{
                    title: 'CATEGORIAS',
                    tabBarIcon: ({ color }) => <FontAwesome size={25} name="list" color={color} />,
                }}
            />

            <Tabs.Screen

                name="(menu)"
                options={{
                    title: 'MENU',
                    tabBarIcon: ({ color }) => <FontAwesome size={25} name="bars" color={color} />,
                }}
            />
            

            <Tabs.Screen

                name="(sobre)"
                options={{
                    title: 'SOBRE',
                    tabBarIcon: ({ color }) => <FontAwesome size={25} name="gear" color={color} />,
                }}
            />
        </Tabs>
    );
}
