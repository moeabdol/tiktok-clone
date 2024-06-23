import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import Colors from '../Constants/Colors';
import Add from '../Screens/Add';
import Home from '../Screens/Home';
import Profile from '../Screens/Profile';
import Search from '../Screens/Search';

const Tab = createBottomTabNavigator();

function TabNavigation() {
	return (
		<Tab.Navigator
			screenOptions={{
				headerShown: false,
				tabBarActiveTintColor: Colors.BLACK,
			}}
		>
			<Tab.Screen
				name="Home"
				component={Home}
				options={{
					tabBarIcon: ({ color, size }) => (
						<Ionicons name="home" size={size} color={color} />
					),
				}}
			/>
			<Tab.Screen
				name="Search"
				component={Search}
				options={{
					tabBarIcon: ({ color, size }) => (
						<Ionicons name="search" size={size} color={color} />
					),
				}}
			/>
			<Tab.Screen
				name="Add"
				component={Add}
				options={{
					tabBarIcon: ({ color, size }) => (
						<Ionicons name="add-circle" size={size} color={color} />
					),
				}}
			/>
			<Tab.Screen
				name="Profile"
				component={Profile}
				options={{
					tabBarIcon: ({ color, size }) => (
						<Ionicons name="people-circle-sharp" size={size} color={color} />
					),
				}}
			/>
		</Tab.Navigator>
	);
}

export default TabNavigation;
