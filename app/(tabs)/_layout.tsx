import {Tabs} from 'expo-router';
import React from 'react';

import {TabBarIcon} from '@/components/navigation/TabBarIcon';
import {Colors} from '@/constants/Colors';
import {useColorScheme} from '@/hooks/useColorScheme';


export default function TabLayout() {
    const colorScheme = useColorScheme();

    return (
        <Tabs screenOptions={{
            tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
            tabBarItemStyle: {flexDirection: 'column'},
            headerShown: false,
        }}>
            <Tabs.Screen name="index" options={{
                title: 'Главная',
                tabBarIcon: ({color, focused}) => (
                    <TabBarIcon name={focused ? 'home' : 'home-outline'} color={color} />
                ),
            }}
            />
            <Tabs.Screen name="chats" options={{
                title: 'Чаты',
                tabBarIcon: ({color, focused}) => (
                    <TabBarIcon name={'chatbox'} color={color} />
                ),
            }}
            />
            <Tabs.Screen name="book" options={{
                title: 'Мед. карта',
                tabBarIcon: ({color, focused}) => (
                    <TabBarIcon name={'book'} color={color} />
                ),
            }}
            />
            <Tabs.Screen name="services" options={{
                title: 'Сервисы',
                tabBarIcon: ({color, focused}) => (
                    <TabBarIcon name={'server'} color={color} />
                ),
            }}
            />
        </Tabs>
    );
}
