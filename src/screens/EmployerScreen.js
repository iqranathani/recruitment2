import React, { useState } from 'react';
import {View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import firebase from 'react-native-firebase';

const EmployerScreen = ({ navigation }) => {
const [jobData,setJobData] = useState([])

    const  get = async () => {

        

        firebase.database().ref('jobs').on('value', (snapshot) => {
 
            snapshot.forEach(data=>{


                
                if (data.val().employerId == firebase.auth().currentUser.uid){
                    
                    console.log(data.val())
                    // setJobData(...(data.val()))
                    // [...setJobData(data.val())]

        
                }
            })
            
        })
        console.log("JOB DATA: ",jobData)
        
        
        
    }

    return (
        <View style={{ marginTop: 50 }}>
            <TouchableOpacity 
                style={styles.buttonStyle}
                onPress={() => {
                    get()
                }}
            >
                <Text style={styles.buttonTextStyle}>SEE ALL JOBS</Text>
            </TouchableOpacity>
            <TouchableOpacity 
                style={styles.buttonStyle}
                onPress={() => navigation.navigate('AddJob')} 
            >
                <Text style={styles.buttonTextStyle}>POST NEW JOB</Text>
            </TouchableOpacity>
        </View>
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
    }
});

export default EmployerScreen;