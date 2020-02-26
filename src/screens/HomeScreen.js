import React, { useState } from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity, Text, ScrollView, KeyboardAvoidingView } from 'react-native';
import firebase from 'react-native-firebase';

const HomeScreen = () => {

    const [studentName, setStudentName] = useState('');
    const [fatherName, setFatherName] = useState('');
    const [studentId, setStudentId] = useState('');

    const insert = () => {
        setTimeout(() => {
            firebase.database().ref('users/001').set(
                {
                    name: 'wubhuo',
                    age: '25'
                }).then(() => {
                    console.log('inserted');
                }).catch((error) => {
                    console.log(error)
                }
                )

        }, 500)
    }

    const get = () => {

        firebase.database().ref('users').on('value', (data) => {
            console.log(data.toJSON())
        })
    }

    const push = () => {
        firebase.database().ref('UsersList/').push({
            studentName,
            fatherName,
            studentId
        }).then((data) => {
            //success callback
            console.log('data ', data)
        }).catch((error) => {
            //error callback
            console.log('error ', error)
        })
    }




    return (
        <KeyboardAvoidingView style={{ flex:1 }}>
        <ScrollView>
            <View style={{ marginTop: 50 }}>
                <View style={styles.backgroundStyle}>
                    <TextInput
                        autoCapitalize="none"
                        placeholder="student name"
                        autoCorrect={false}
                        value={studentName}
                        onChangeText={(x) => setStudentName(x)}
                        style={styles.input}>
                    </TextInput>
                </View>

                <View style={styles.backgroundStyle}>
                    <TextInput
                        autoCapitalize="none"
                        placeholder="father name"
                        autoCorrect={false}
                        value={fatherName}
                        onChangeText={(x) => setFatherName(x)}
                        style={styles.input}>
                    </TextInput>
                </View>
                <View style={styles.backgroundStyle}>
                    <TextInput
                        autoCapitalize="none"
                        placeholder="student Id"
                        autoCorrect={false}
                        value={studentId}
                        onChangeText={(x) => setStudentId(x)}
                        style={styles.input}>
                    </TextInput>
                </View>
            </View>
            <TouchableOpacity style={styles.buttonStyle}
                onPress={() => {
                    insert()
                }}
            >
                <Text style={styles.buttonTextStyle}>INSERT</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonStyle}
                onPress={() => {
                    get()
                }}
            >
                <Text style={styles.buttonTextStyle}>GET</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonStyle}
                onPress={() => {
                    push()
                }}
            >
                <Text style={styles.buttonTextStyle}>PUSH</Text>
            </TouchableOpacity>

        </ScrollView>
        </KeyboardAvoidingView>
    );
};
const styles = StyleSheet.create({
    buttonStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '65%',
        marginVertical: 10,
        borderRadius: 25,
        height: 30,
        alignSelf: "center",
        backgroundColor: '#274962'
    },
    buttonTextStyle: {
        width: '100%',
        textAlign: 'center',
        color: 'white'
    },
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
        alignSelf: "center"

    }
})
export default HomeScreen;