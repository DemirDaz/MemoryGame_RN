import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Header extends React.Component {
	
	render() {
		return (
			<View style={styles.header}>
				<Text style={styles.header_text}>Win to disable alarm</Text>
			</View>
		);
	}

}


const styles = StyleSheet.create({
	header: {
		flex: 1,
		flexDirection: 'column',
		alignSelf: 'stretch',
		paddingTop: 20,
		paddingBottom: 0,
		backgroundColor: '#E6BF93',
		
	},
	header_text: {
		marginTop: 25,
		fontWeight: 'bold',
		fontSize: 25,
		textAlign: 'center',
		color: '#474747'
	}
});