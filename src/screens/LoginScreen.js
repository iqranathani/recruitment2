import React, { useState } from 'react';
import {View,TextInput,StyleSheet,TouchableOpacity,Text} from 'react-native';
import firebase from 'react-native-firebase';



const LoginScreen = ({navigation}) =>{
    const [email,setEmail]=useState('iqra1@gmail.com');
    const [password,setPassword]=useState('123456');
    const [errorMessage,setErrorMessage]=useState('');

    const select = (snapshot) => {
        if(snapshot.val().role === "2" ){
            navigation.navigate('Admin')
        }else if(snapshot.val().role === "3" ){
            navigation.navigate('Student')
        }else if(snapshot.val().role === "4" ){
            navigation.navigate('Employer')
        }else{
            alert('error')
        }
    }

    const getUserData = (userId) => {

        firebase.database().ref(`users/${userId}`).on('value',(snapshot)=>{
            console.log("snapshot",snapshot.val().role);
            select(snapshot)
        })
   
}




 const handleLogin = () => {
  
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((user) =>{
       console.log("user is",user)
       getUserData(user.user.uid)
      }
       )
      .catch(error => setErrorMessage(error.message))
  }

return(


    <View style={{marginTop:90}}>
        <View style={styles.backgroundStyle}>
         <TextInput
            autoCapitalize="none"
            placeholder="Enter Your Email"
            autoCorrect={false}
            value={email}
            onChangeText={(x) => setEmail(x)}
            style={styles.input}>
        </TextInput>
        </View>

        <View style={styles.backgroundStyle}>
         <TextInput
            autoCapitalize="none"
            placeholder="Enter your password"
            autoCorrect={false}
            value={password}
            secureTextEntry={true}
            onChangeText={(x) => setPassword(x)}
            style={styles.input}>
        </TextInput>
        </View>
              <TouchableOpacity style={styles.buttonStyle}
                        onPress={() => {
                            handleLogin()
                        }}
                        >
                        <Text style={styles.buttonTextStyle}>Login</Text>
                    </TouchableOpacity>

    </View>
)
}
const styles=StyleSheet.create({
    input: {
        marginHorizontal: 15,
    },
    backgroundStyle: {
        // backgroundColor: 'white',
        // width:"82%",
        height: 40,
    
        borderRadius: 7,
        marginHorizontal: 40,
        marginVertical: 5,
        borderColor: '#d8d8d8',
        borderWidth: 1,
        width:"70%",
        alignSelf:"center"

    },
    buttonStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '65%',
        margin: 10,
        borderRadius: 25,
        height:30,
        alignSelf:"center",
        // backgroundColor: theme.color.primaryColor,
        backgroundColor:'#274962'
      },
      buttonTextStyle: {
        width: '100%',
        textAlign: 'center',
        color:'white'
      },
})
export default LoginScreen;