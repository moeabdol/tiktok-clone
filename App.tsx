import { useFonts } from 'expo-font';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import Login from './src/Screens/Login';

export default function App() {
	const [fontsLoaded, fontError] = useFonts({
		outfitRegular: require('./assets/fonts/Outfit-Regular.ttf'),
		outfitMedium: require('./assets/fonts/Outfit-Medium.ttf'),
		outfitBold: require('./assets/fonts/Outfit-Bold.ttf'),
	});

	if (!fontsLoaded && !fontError) return null;

	return (
		<View style={styles.container}>
			<Login />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
	},
});
