import { Stack } from 'expo-router';
import React from 'react';

export default function Layout() {
    return (
        <Stack screenOptions={{ headerShown: false }}>
            {/* Defina a rota "menu" apontando para a página correspondente */}
            <Stack.Screen name="menu" />
        </Stack>
    );
}
