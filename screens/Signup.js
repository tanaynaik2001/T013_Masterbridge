import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Dimensions,
  Alert,
} from 'react-native';
import {Card, Button, RadioButton} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import {firebase} from '../firebase/config';

const Signup = () => {
  const navigation = useNavigation();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [value, setValue] = useState('');

  const onRegisterPress = () => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((response) => {
        const uid = response.user.uid;
        const data = {
          id: uid,
          email,
          name,
        };

        const usersRef = firebase.firestore().collection('users');
        usersRef
          .doc(uid)
          .set(data)
          .then(
            value === 'Student'
              ? navigation.navigate('LoginStudent')
              : navigation.navigate('LoginInstructor'),
            {user: data},
          )
          .catch((error) => {
            alert(error);
          })
          .catch((error) => {
            alert(error);
          });
      });
  };
  return (
    <View style={styles.container}>
      <Card style={styles.cardContainer}>
        <Card.Content>
          <Card.Title title="Name" />
          <TextInput
            placeholder="Enter your Name"
            style={styles.inputContainer}
            value={name}
            onChangeText={(text) => setName(text)}
          />
          <Card.Title title="Email" />
          <TextInput
            placeholder="Enter your valid email address"
            style={styles.inputContainer}
            value={email}
            onChangeText={(text) => setEmail(text)}
          />
          <Card.Title title="Password" />
          <TextInput
            placeholder="Enter password"
            style={styles.inputContainer}
            secureTextEntry
            value={password}
            onChangeText={(text) => setPassword(text)}
          />

          <Card.Title title="You are?" />
          <RadioButton.Group
            value={value}
            onValueChange={(text) => setValue(text)}>
            <View style={styles.radBtn}>
              <Text>Student</Text>
              <RadioButton value="Student" color="red" />
            </View>
            <View style={{...styles.radBtn, marginHorizontal: 6}}>
              <Text>Instructor</Text>
              <RadioButton value="Instructor" color="red" />
            </View>
          </RadioButton.Group>
          <Button
            color="black"
            mode="outlined"
            style={styles.btn}
            onPress={() => onRegisterPress()}>
            Submit
          </Button>
        </Card.Content>
      </Card>
    </View>
  );
};

export default Signup;

const styles = StyleSheet.create({
  cardContainer: {
    marginVertical: 100,
    marginHorizontal: 20,
    elevation: 5,
    borderRadius: 10,
  },
  inputContainer: {
    borderWidth: 1.5,
    borderRadius: 15,
    padding: 10,
  },
  btn: {
    marginVertical: 10,
    marginHorizontal: 90,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 15,
  },
  radBtn: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
  },
  container: {
    flex: 1,
    // backgroundColor: '#4dff4d',
  },
});
