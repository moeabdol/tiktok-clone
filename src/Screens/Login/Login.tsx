import { useOAuth } from '@clerk/clerk-expo';
import { ResizeMode, Video } from 'expo-av';
import * as WebBrowser from 'expo-web-browser';
import React, { useCallback } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import useWarmUpBrowser from '../../hooks/useWarmUpBroswer';
import { supabase } from '../../Utils/SupabaseConfig';
import styles from './styles';

WebBrowser.maybeCompleteAuthSession();

function Login() {
	useWarmUpBrowser();
	const { startOAuthFlow } = useOAuth({ strategy: 'oauth_google' });

	const onPress = useCallback(async () => {
		const { createdSessionId, setActive, signUp } = await startOAuthFlow();

		if (createdSessionId) {
			setActive!({ session: createdSessionId });

			if (signUp) {
				await supabase
					.from('users')
					.insert([
						{
							username: signUp.username ?? signUp.emailAddress?.split('@')[0],
							email: signUp.emailAddress,
							firstName: signUp.firstName,
							lastName: signUp.lastName,
						},
					])
					.select();
			}
		} else {
			// Use signIn or signUp for next steps such as MFA
		}
	}, []);

	return (
		<View style={{ flex: 1 }}>
			<Video
				source={{
					uri: 'https://cdn.pixabay.com/video/2024/05/25/213616_large.mp4',
				}}
				style={styles.video}
				shouldPlay
				isLooping
				resizeMode={ResizeMode.COVER}
			/>
			<View style={styles.headerContainer}>
				<Text style={styles.header}>TikTok</Text>
				<Text style={styles.subHeader}>
					The Ultimate Place to Share your Short Videos with a Great Community
				</Text>
				<TouchableOpacity style={styles.loginButton} onPress={onPress}>
					<Image
						style={styles.googleLogo}
						source={require('../../../assets/images/google.png')}
					/>
					<Text style={styles.loginText}>Sign In with Google</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
}

export default Login;
