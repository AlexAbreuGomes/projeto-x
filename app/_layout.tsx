import { Stack } from 'expo-router/stack';

export default function Layout() {
  return (
    <Stack 
      screenOptions={{
        headerShown: false,  // Desativa o cabeçalho globalmente
      }}
    >
      <Stack.Screen name="(tabs)" />
    </Stack>
  );
}
