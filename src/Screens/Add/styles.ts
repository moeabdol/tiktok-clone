import { StyleSheet } from 'react-native';
import Colors from '../../Constants/Colors';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		padding: 20,
	},
	headerText: {
		fontFamily: 'outfitBold',
		fontSize: 22,
		marginTop: 20,
	},
	subheaderText: {
		fontFamily: 'outfitRegular',
		marginTop: 5,
		textAlign: 'center',
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
