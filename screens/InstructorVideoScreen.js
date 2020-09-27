import React, {Component} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import ImagePicker from 'react-native-image-picker';
import Video from 'react-native-video';

export default class InstructorVideoScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videoSource: '',
    };
  }

  options2 = {
    title: 'Select video',
    mediaType: 'video',
    path: 'video',
    quality: 1,
  };

  selectVideo = () => {
    ImagePicker.showImagePicker(this.options2, (response) => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        const source = {uri: response.uri};

        this.setState({videoSource: source});
      }
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.videoContainer}>
          {this.state.videoSource !== '' ? (
            <Video
              source={this.state.videoSource} // Can be a URL or a local file.
              ref={(ref) => {
                this.player = ref;
              }} // Store reference
              onBuffer={this.onBuffer} // Callback when remote video is buffering
              onError={this.videoError} // Callback when video cannot be loaded
              style={styles.backgroundVideo}
              controls={true}
              resizeMode="contain"
            />
          ) : (
            <View />
          )}
        </View>
        <TouchableOpacity
          style={styles.loginBtn}
          onPress={this.selectVideo}
          color="#fb5b5a">
          <Text style={styles.loginText}>Select Video</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-evenly',
    flexDirection: 'column',
  },
  videoContainer: {
    flex: 1,
    backgroundColor: '#c1cdcd',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  backgroundVideo: {
    alignContent: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
    flex: 1,
  },
  loginText: {
    color: 'white',
    alignSelf: 'center',
    justifyContent: 'center',
  },
  loginBtn: {
    width: '80%',
    alignSelf: 'center',
    backgroundColor: '#fb5b5a',
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
    marginBottom: 10,
  },
});
