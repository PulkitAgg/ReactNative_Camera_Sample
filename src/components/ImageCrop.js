import React, { Component } from 'react';
import { Dimensions, StyleSheet, Text, View, CameraRoll, ScrollView, Button, Image, PermissionsAndroid } from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';

export default class ImageCropComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            photos: [],
            filePath: ''
        };
    }
    _handleButtonPress = () => {
        console.warn('Dimensions.get(window).height1', Dimensions.get('window').height)
        ImagePicker.openPicker({
            // width: Dimensions.get('window').width,
            // height: Dimensions.get('window').height,
            // cropping: true,
            multiple: true
        }).then(image => {
            console.warn('image3', image[0].path);
            this.setState({ filePath: image[0].path })
        }).catch(err => {
            console.warn('err===', err);
        })
    };

    render() {
        return (
            <View style={styles.container}>
                <Button title="Open Camera" onPress={() => this._handleButtonPress()} />
                {/* <ScrollView>
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
                </ScrollView> */}
                {
                    this.state.filePath ? 
                    <Image
                    style={{
                        width: 300,
                        height: 100,
                    }}
                    source={{ uri:this.state.filePath}}
                />
                :
                null    
                }

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
