import React, {useState} from 'react';
import {View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import firebase from 'react-native-firebase';

const AddJobScreen = () => {
    const [jobTitle,setJobTitle]=useState('');
    const [jobDescription,setJobDescription]=useState('');
    const [salary,setSalary]=useState('');

    const push = () => {
        firebase.database().ref('jobs/').push({
            jobTitle,
            jobDescription,
            salary,
            employerId: firebase.auth().currentUser.uid
        }).then((data) => {
            //success callback
            console.log('data ', data)
        }).catch((error) => {
            //error callback
            console.log('error ', error)
        })
    }

    return (
        <View style={{ marginTop: 20 }}>
             <View style={styles.backgroundStyle}>
                    <TextInput
                        autoCapitalize="none"
                        placeholder="Job Title"
                        autoCorrect={false}
                        value={jobTitle}
                        onChangeText={(x) => setJobTitle(x)}
                        style={styles.input}>
                    </TextInput>
                </View>

                <View style={styles.backgroundStyle}>
                    <TextInput
                        textAlignVertical="top"
                        autoCapitalize="none"
                        placeholder="Job Description"
                        autoCorrect={false}
                        value={jobDescription}
                        onChangeText={(x) => setJobDescription(x)}
                        style={styles.input}
                        multiline={true}
                        numberOfLines={10}>    
                    </TextInput>
                </View>

                <View style={styles.backgroundStyle}>
                    <TextInput
                        autoCapitalize="none"
                        placeholder="Salary"
                        autoCorrect={false}
                        value={salary}
                        onChangeText={(x) => setSalary(x)}
                        style={styles.input}>
                    </TextInput>
                </View>
                <TouchableOpacity 
                    style={styles.buttonStyle}
                    onPress={() => {
                        push()
                    }}
                >
                    <Text style={styles.buttonTextStyle}>ADD JOB</Text>
                </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    input: {
        marginHorizontal: 15,
    },
    backgroundStyle: {
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
        margin: 20,
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
    }
});

export default AddJobScreen;