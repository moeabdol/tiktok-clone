import { ResizeMode, Video } from 'expo-av';
import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import styles from './styles';

function Login() {
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
				<TouchableOpacity
					style={styles.loginButton}
					onPress={() => console.log('pressed')}
				>
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
