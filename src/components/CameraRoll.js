import React, { Component } from 'react';
import { Dimensions , StyleSheet, Text, View, CameraRoll, ScrollView, Button, Image, PermissionsAndroid } from 'react-native';

export default class CameraRollComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            photos: [],
        };
    }
    _handleButtonPress = () => {
        console.warn('yuppp2')
        CameraRoll.getPhotos({
            first: 10,
            assetType: 'Photos',
        })
            .then(r => {
                console.warn('in then', r);
                this.setState({ photos: r.edges });
            })
            .catch((err) => {
                //Error Loading Images
                console.warn('in err', err);
                this.requestExternalStoragePermission();
            });
    };

    requestExternalStoragePermission = async () => {
        console.warn('in permission');
        try {
            const granted = await PermissionsAndroid.requestMultiple(
                [PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE, PermissionsAndroid.PERMISSIONS.READ_SMS]
                // {
                //     title: 'My App Storage Permission',
                //     message: 'My App needs access to your storage ' +
                //         'so you can save your photos',
                // },
            );
            if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                console.warn("You can use the camera");
                this._handleButtonPress(); // call again get photo
            } else if (granted === PermissionsAndroid.RESULTS.DENIED) {
                console.warn("Camera permission denied");
                // this._handleButtonPress(); // call again get photo
            } else {
                console.warn("Camera permission denied NEVER_ASK_AGAIN")
            }
            return granted;
        } catch (err) {
            console.error('Failed to request permission ', err);
            return null;
        }
    };

    render() {
        return (
            <View style={styles.container}>
                <Button title="Load Images" onPress={() => this._handleButtonPress()} />
                <ScrollView>
                    {this.state.photos.map((p, i) => {
                        return (
                            <Image
                                key={i}
                                style={{
                                    width: 300,
                                    height: 100,
                                }}
                                source={{ uri: p.node.image.uri }}
                            />
                        );
                    })}
                </ScrollView>
                <Text style={styles.welcome}>Welcome to React Native|</Text>
                <Text style={styles.instructions}>To get started, edit App.js</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});
