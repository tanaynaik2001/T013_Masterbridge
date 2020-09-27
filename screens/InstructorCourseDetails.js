import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import ImagePicker from 'react-native-image-picker';
import {Card} from 'react-native-paper';

const InstructorCourseDetails = () => {
  const [Source, setSource] = useState('');

  const pickImage = () => {
    const options = {
      title: 'Select Avatar',
      customButtons: [{name: 'fb', title: 'Choose Photo from Facebook'}],
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };

    /**
     * The first arg is the options object for customization (it can also be null or omitted for default options),
     * The second arg is the callback which sends object: response (more info in the API Reference)
     */
    ImagePicker.showImagePicker(options, (response) => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        const source = {path: response.path};
        setSource(source);
        console.log(Source)

        // You can also display the image using data:
        // const source = { uri: 'data:image/jpeg;base64,' + response.data };
      }
    });
  };
  return (
    <View style={styles.container}>
      <Card style={styles.cardContainer}>
        <Card.Title title="Course Title" />
        <TextInput
          style={{
            borderWidth: 1,
            marginHorizontal: 10,
            borderRadius: 15,
            padding: 10,
          }}
        />
        <Card.Title title="Course Description" />
        <TextInput
          style={{
            borderWidth: 1,
            marginHorizontal: 10,
            borderRadius: 15,
            height: 130,
            padding: 10,
          }}
          numberOfLines={1}
        />

        <Card.Title title="Upload Thumbnail" />
        <TouchableOpacity style={styles.loginBtn} onPress={pickImage}>
          <Text style={styles.text}>Select Image</Text>
        </TouchableOpacity>
        <Image source={Source} style={{width: 50, height: 50}} />
      </Card>
    </View>
  );
};

export default InstructorCourseDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  cardContainer: {
    margin: 20,
    elevation: 5,
  },
  loginBtn: {
    width: '80%',
    alignSelf: 'center',
    backgroundColor: '#fb5b5a',
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',

    marginBottom: 10,
  },
  text: {
    color: 'white',
    alignSelf: 'center',
    justifyContent: 'center',
  },
});
