import React from 'react';
import {Tabs} from 'expo-router';
import {TabBarIcon} from '@/components/navigation/TabBarIcon';
import {Colors} from '@/constants/Colors';


export default function TabLayout() {
    return (
        <Tabs screenOptions={{
            tabBarStyle: {backgroundColor: Colors.blue6, paddingVertical: 15},
            tabBarActiveTintColor: Colors.blue2,
            tabBarInactiveTintColor: Colors.white,
            tabBarItemStyle: {flexDirection: 'column', gap: 5},
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
