import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Stack } from 'expo-router';

export default function Layout() {
    return (
    <Stack 
      screenOptions={{
              headerShown: false
      }}>
      <Stack.Screen name="favoritos" />
      
  
    </Stack>
    );
}