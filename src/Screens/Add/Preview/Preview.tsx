import { Ionicons } from '@expo/vector-icons';
import type { RouteProp } from '@react-navigation/native';
import { useNavigation, useRoute } from '@react-navigation/native';
import React, { useState } from 'react';
import {
	Image,
	KeyboardAvoidingView,
	ScrollView,
	Text,
	TextInput,
	TouchableOpacity,
	View,
} from 'react-native';
import type PreviewParamList from '../../../../types/previewParamList.d';
import styles from './styles';

function Preview() {
	const { params } = useRoute<RouteProp<PreviewParamList, 'Preview'>>();
	const navigation = useNavigation();
	const [description, setDescription] = useState<string>();

	return (
		<KeyboardAvoidingView style={styles.keyboardView}>
			<ScrollView style={styles.scrollView}>
				<TouchableOpacity
					style={styles.navigationContainer}
					onPress={() => navigation.goBack()}
				>
					<Ionicons name="arrow-back-circle" size={44} color="black" />
					<Text style={styles.backText}>Back</Text>
				</TouchableOpacity>
				<View style={styles.container}>
					<Text style={styles.headerText}>Add Details</Text>
					<Image style={styles.thumbnail} source={{ uri: params?.thumbnail }} />
					<TextInput
						style={styles.descriptionInput}
						numberOfLines={3}
						placeholder="Description"
						onChangeText={value => setDescription(value)}
					/>
					<TouchableOpacity style={styles.uploadButton}>
						<Text style={styles.uploadText}>Publish</Text>
					</TouchableOpacity>
				</View>
			</ScrollView>
		</KeyboardAvoidingView>
	);
}

export default Preview;
