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
                    title: 'INICIO',
                    tabBarIcon: ({ color }) => <FontAwesome size={28} name="home" color={color} />,
                }}
            />

            <Tabs.Screen
                name="(categorias)"
                options={{
                    title: 'CATEGORIAS',
                    tabBarIcon: ({ color }) => <FontAwesome size={28} name="user" color={color} />,
                }}
            />

            <Tabs.Screen

                name="(menu)"
                options={{
                    title: 'MENU',
                    tabBarIcon: ({ color }) => <FontAwesome size={28} name="bars" color={color} />,
                }}
            />

<Tabs.Screen

name="(sobre)"
options={{
    title: 'SOBRE',
    tabBarIcon: ({ color }) => <FontAwesome size={28} name="gear" color={color} />,
}}
/>

            

        </Tabs>


    );
}
