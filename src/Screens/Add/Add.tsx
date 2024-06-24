import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import * as ImagePicker from 'expo-image-picker';
import * as VideoThumbnails from 'expo-video-thumbnails';
import React, { useEffect, useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import type AddStackParamList from '../../../types/addStackParamList.d';
import styles from './styles';

function Add() {
	const navigation = useNavigation<StackNavigationProp<AddStackParamList>>();
	const [video, setVideo] = useState<string>();
	const [thumbnail, setThumbnail] = useState<string>();

	const generateThumbnail = async (videoUri: string) => {
		const { uri } = await VideoThumbnails.getThumbnailAsync(videoUri, {
			time: 15000,
		});
		setThumbnail(uri);
	};

	const pickVideo = async () => {
		const result = await ImagePicker.launchImageLibraryAsync({
			mediaTypes: ImagePicker.MediaTypeOptions.Videos,
			allowsEditing: true,
			aspect: [4, 3],
			quality: 1,
		});

		if (!result.canceled) {
			const video = result.assets[0].uri;
			setVideo(video);
			generateThumbnail(video);
		}
	};

	useEffect(() => {
		video &&
			thumbnail &&
			navigation.navigate('Preview', {
				video,
				thumbnail,
			});
	}, [video, thumbnail]);

	return (
		<View style={styles.container}>
			<Text style={styles.headerText}>Upload a Short Video</Text>
			<Text style={styles.subheaderText}>
				Start by uploading a short video and share your creativity with the
				community
			</Text>
			<TouchableOpacity style={styles.uploadButton} onPress={pickVideo}>
				<Text style={styles.uploadText}>Select Video File</Text>
			</TouchableOpacity>
		</View>
	);
}

export default Add;
