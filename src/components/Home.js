import React, { Component } from 'react';
import { TouchableOpacity , StyleSheet, Text, View} from 'react-native';

export default class Home extends React.Component {
    goToCameraRoll() {
        console.warn('in goToCameraRoll');
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.cardLayout}>
                    <TouchableOpacity 
                    style={styles.card}
                    onPress={this.goToCameraRoll}
                    >
                        <Text style={styles.welcome}>Check CameraRoll Here</Text>
                    </TouchableOpacity>
                    <View style={styles.card}>
                        <Text style={styles.welcome}>Welcome to React Native|</Text>
                    </View>
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
        borderRadius:10,
        padding:10,
        borderWidth: 2
    },
    welcome: {
        fontSize: 15,
        textAlign: 'center',
        margin: 40,
    }
});
