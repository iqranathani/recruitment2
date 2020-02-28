import React, { useState } from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity, Text, Picker } from 'react-native';
import firebase from 'react-native-firebase';


const RegisterScreen = ({ navigation }) => {
    const [name, setName] = useState('iqra');
    const [email, setEmail] = useState('iqra1@gmail.com');
    const [password, setPassword] = useState('123456');
    const [contact, setContact] = useState('2145655612423905');
    const [role, setRole] = useState('');
    const [errorMessage,setErrorMessage]=useState('')

    const showRole = (value) => {
        setRole(value)
    }

    const pushUser = (userId) => {
        firebase.database().ref(`users/${userId}`).set({
            email,
            name,
            contact,
            role
        }).then((data) => {
            //success callback
            console.log('data', data)
        }).catch((error) => {
            //error callback
            console.log('error' , error)
        })
    }

    const handleSignUp = () => {
        firebase
            .auth()
            .createUserWithEmailAndPassword(email, password)
            .then((user) => {
                console.log("UID: ",user.user.uid)
                pushUser(user.user.uid)
                console.log("user is", user)
                navigation.navigate('Login')
            })

            .catch(error => {
                console.log(error.message)
                setErrorMessage(error.message)
            }
            )
    }
    return (
        <View>
            <View style={{ marginTop: 90 }}>

                <View style={styles.backgroundStyle}>
                    <TextInput
                        autoCapitalize="none"
                        placeholder="Enter Your Name"
                        autoCorrect={false}
                        value={name}
                        onChangeText={(x) => setName(x)}
                        style={styles.input}>
                    </TextInput>
                </View>

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
                        placeholder="Enter your Password"
                        autoCorrect={false}
                        value={password}
                        secureTextEntry={true}
                        onChangeText={(x) => setPassword(x)}
                        style={styles.input}>
                    </TextInput>
                </View>

                <View style={styles.backgroundStyle}>
                    <TextInput
                        autoCapitalize="none"
                        placeholder="Enter Your Contact"
                        autoCorrect={false}
                        value={contact}
                        onChangeText={(x) => setContact(x)}
                        style={styles.input}>
                    </TextInput>
                </View>

                <View style={styles.backgroundStyle}>
                    <Picker
                        selectedValue={role}
                        onValueChange={showRole.bind()}
                        style={styles.input}
                        mode="dropdown"
                    >
                        <Picker.Item label="Select role" value="1" />
                        <Picker.Item label="Admin" value="2" />
                        <Picker.Item label="Student" value="3" />
                        <Picker.Item label="Employer" value="4" />

                    </Picker>

                </View>


                <TouchableOpacity style={styles.buttonStyle}
                    onPress={() => {
                        handleSignUp()
                    }}
                >
                    <Text style={styles.buttonTextStyle}>Register</Text>
                </TouchableOpacity>

            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    input: {
        marginHorizontal: 15,
    },
    backgroundStyle: {
        height: 40,
        borderRadius: 7,
        marginHorizontal: 40,
        marginVertical: 5,
        borderColor: '#d8d8d8',
        borderWidth: 1,
        width: "70%",
        alignSelf: "center",
        justifyContent: "center"

    },
    buttonStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '65%',
        margin: 10,
        borderRadius: 25,
        height: 30,
        alignSelf: "center",
        // backgroundColor: theme.color.primaryColor,
        backgroundColor: '#274962'
    },
    buttonTextStyle: {
        width: '100%',
        textAlign: 'center',
        color: 'white'
    },
})
export default RegisterScreen;