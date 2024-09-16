import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from 'expo-router';

export default function TabLayout() {
    return (
        <Tabs screenOptions={{
            headerShown: false,
            tabBarActiveTintColor: 'black'
        }}>
            <Tabs.Screen

                name="index"
                options={{
                    title: 'Home',
                    tabBarIcon: ({ color }) => <FontAwesome size={28} name="home" color={color} />,
                }}
            />

            <Tabs.Screen

                name="(login)"
                options={{
                    title: 'Login',
                    tabBarIcon: ({ color }) => <FontAwesome size={28} name="user" color={color} />,
                }}
            />

            <Tabs.Screen

                name="(favoritos)"
                options={{
                    title: 'Favoritos',
                    tabBarIcon: ({ color }) => <FontAwesome size={28} name="facebook" color={color} />,
                }}
            />

        </Tabs>


    );
}
