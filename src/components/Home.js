import React, { Component } from 'react';
import { TouchableOpacity, StyleSheet, Text, View } from 'react-native';

export default class Home extends React.Component {
    goToScreen(screenName) {
        this.props.navigation.navigate(screenName);
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.cardLayout}>
                    <TouchableOpacity
                        style={styles.card}
                        onPress={() => this.goToScreen('CameraRoll')}
                    >
                        <Text style={styles.welcome}>Check CameraRoll Here</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.card}
                        onPress={() => this.goToScreen('ImageCrop')}
                    >
                        <Text style={styles.welcome}>Image Crop Picker</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.cardLayout}>
                    <View style={styles.card}>
                        <Text style={styles.welcome}>Welcome to React Native|</Text>
                    </View>
                    <View style={styles.card}>
                        <Text style={styles.welcome}>Welcome to React Native|</Text>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        // backgroundColor: 'green',
    },
    cardLayout: {
        flex: 0.3,
        // backgroundColor: 'red',
        flexDirection: 'row'

    },
    card: {
        flex: 0.5,
        borderColor: 'black',
        borderRadius: 10,
        padding: 10,
        borderWidth: 2
    },
    welcome: {
        fontSize: 15,
        textAlign: 'center',
        margin: 40,
    }
});
