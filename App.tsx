import {
	ClerkLoaded,
	ClerkProvider,
	SignedIn,
	SignedOut,
} from '@clerk/clerk-expo';
import { useFonts } from 'expo-font';
import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import Home from './src/Screens/Home';
import Login from './src/Screens/Login';

const publishableKey = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY!;

if (!publishableKey) {
	throw new Error(
		'Missing Publishable Key. Please set EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY in your .env'
	);
}

export default function App() {
	const [fontsLoaded, fontError] = useFonts({
		outfitRegular: require('./assets/fonts/Outfit-Regular.ttf'),
		outfitMedium: require('./assets/fonts/Outfit-Medium.ttf'),
		outfitBold: require('./assets/fonts/Outfit-Bold.ttf'),
	});

	if (!fontsLoaded && !fontError) return null;

	return (
		<ClerkProvider publishableKey={publishableKey}>
			<ClerkLoaded>
				<SafeAreaView style={styles.container}>
					<SignedIn>
						<Home />
					</SignedIn>
					<SignedOut>
						<Login />
					</SignedOut>
				</SafeAreaView>
			</ClerkLoaded>
		</ClerkProvider>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
	},
});
