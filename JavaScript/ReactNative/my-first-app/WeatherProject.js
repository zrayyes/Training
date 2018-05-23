import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

export default class WeatherProject extends React.Component {
    constructor(props) {
        super(props);
        this.state = { zip: "" };
    }

    _handleTextChange = event => {
        this.setState({ zip: event.nativeEvent.text })
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>You input {this.state.zip}.</Text>
                <TextInput
                    style={styles.input}
                    onSubmitEditing={this._handleTextChange} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    input: {
        fontSize: 20,
        borderWidth: 2,
        height: 40
    }
});