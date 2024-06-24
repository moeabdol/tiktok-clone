import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import Add from '../Screens/Add';
import Preview from '../Screens/Add/Preview';

const Stack = createStackNavigator();

function AddStackNavigation() {
	return (
		<Stack.Navigator screenOptions={{ headerShown: false }}>
			<Stack.Screen name="Add Video" component={Add} />
			<Stack.Screen name="Preview" component={Preview} />
		</Stack.Navigator>
	);
}

export default AddStackNavigation;
