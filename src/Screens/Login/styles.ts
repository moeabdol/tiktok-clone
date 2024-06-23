import { StyleSheet } from 'react-native';
import Colors from '../../Constants/Colors';

const styles = StyleSheet.create({
	video: {
		position: 'absolute',
		top: 0,
		left: 0,
		right: 0,
		bottom: 0,
		height: '100%',
		width: 500,
	},
	headerContainer: {
		flex: 1,
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'flex-start',
		alignItems: 'center',
		backgroundColor: Colors.TRANSPARENT_BLACK,
		paddingTop: 100,
		paddingHorizontal: 20,
	},
	header: {
		color: Colors.WHITE,
		fontFamily: 'outfitBold',
		fontSize: 35,
	},
	subHeader: {
		color: Colors.WHITE,
		fontFamily: 'outfitRegular',
		fontSize: 17,
		textAlign: 'center',
		marginTop: 15,
	},
	loginButton: {
		position: 'absolute',
		bottom: 150,
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		gap: 10,
		backgroundColor: Colors.WHITE,
		padding: 10,
		paddingHorizontal: 55,
		borderRadius: 99,
	},
	googleLogo: {
		width: 30,
		height: 30,
	},
	loginText: {
		color: Colors.BLACK,
		fontFamily: 'outfitRegular',
	},
});

export default styles;
