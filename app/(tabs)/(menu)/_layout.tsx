import { Stack } from 'expo-router';

export default function Layout() {
    return (
        <Stack screenOptions={{ headerShown: false }}>
            {/* Defina a rota "menu" apontando para a página correspondente */}
            <Stack.Screen name="menu" />
        </Stack>
    );
}
