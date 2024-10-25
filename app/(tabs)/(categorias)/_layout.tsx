import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Stack } from 'expo-router';
import React from 'react';

export default function Layout() {
  return (
    <Stack 
      screenOptions={{
        headerShown: false
      }}>
      <Stack.Screen 
        name="index" 
        options={{ title: 'Categoria' }}  // Definir o título para "Categoria"
      />
    </Stack>
  );
}
