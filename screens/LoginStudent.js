import React, {useState} from 'react';
import {StyleSheet, Text, View, TextInput,KeyboardAvoidingView} from 'react-native';
import {Card,Button} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import {firebase} from '../firebase/config';

const LoginStudent = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onLoginPress = () => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((response) => {
        const uid = response.user.uid;
        const usersRef = firebase.firestore().collection('users');
        usersRef
          .doc(uid)
          .get()
          .then((firestoreDocument) => {
            if (!firestoreDocument.exists) {
              alert('User does not exist anymore.');
              return;
            }
            const user = firestoreDocument.data();
            navigation.navigate('StudentHomescreen', {user});
          })
          .catch((error) => {
            alert(error);
          });
      })
      .catch((error) => {
        alert(error);
      });
  };
  return (
    <View style={styles.container}>
 
   <Text
        style={{
          margin: 30,
          marginBottom:0,
          textAlign: 'center',
          fontSize: 25,
          fontStyle: 'italic',
        }}>  Student Login Page</Text>
        <View>
        <Button  
         style={styles.btn}
            mode="outlined"
             onPress={()=> navigation.navigate('LoginInstructor')}> Login as Instructor </Button>
        </View>
      
      <Card style={styles.cardContainer}>
        <Card.Content>
        
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
          <Button
           
            mode="outlined"
            style={styles.btn}
            onPress={() => onLoginPress()}>
            Submit
          </Button>
        
        <Button  
            mode="outlined"
            style={styles.btn} onPress={()=> navigation.navigate('SignUp')}> Sign Up </Button>
             
        </Card.Content>
      </Card>
   
      
      
    </View>
  );
};

export default LoginStudent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  cardContainer: {
    marginVertical: 50,
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
});
