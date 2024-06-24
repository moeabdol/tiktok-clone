import { StyleSheet } from 'react-native';
import Colors from '../../../Constants/Colors';

const styles = StyleSheet.create({
	keyboardView: {
		flex: 1,
		backgroundColor: Colors.WHITE,
	},
	scrollView: {
		padding: 20,
	},
	navigationContainer: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'flex-start',
		alignItems: 'center',
		gap: 10,
		marginTop: 20,
	},
	backText: {
		fontFamily: 'outfitRegular',
		fontSize: 20,
	},
	container: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'flex-start',
		alignItems: 'center',
		marginTop: 100,
	},
	headerText: {
		fontFamily: 'outfitBold',
		fontSize: 20,
	},
	thumbnail: {
		width: 200,
		height: 300,
		borderRadius: 20,
		marginTop: 15,
	},
	descriptionInput: {
		borderWidth: 1,
		borderColor: Colors.TRANSPARENT_BLACK,
		width: '100%',
		borderRadius: 10,
		marginTop: 25,
		paddingHorizontal: 20,
	},
	uploadButton: {
		backgroundColor: Colors.BLACK,
		padding: 10,
		paddingHorizontal: 25,
		borderRadius: 99,
		marginTop: 20,
	},
	uploadText: {
		fontFamily: 'outfitRegular',
		color: Colors.WHITE,
	},
});

export default styles;
