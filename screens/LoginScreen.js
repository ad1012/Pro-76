import React, {Component} from 'react'
import {View, Text, TextInput, StyleSheet, TouchableOpacity, Alert} from 'react-native'
import db from './config';
import firebase from 'firebase';

export default class WelcomeScreen extends Component{
    constructor(){
        super();
        this.state = {
            emailId: '',
            password: '',
        }
    }
    userLogin = (emailId,password)=> {
        firebase.auth().signInWithEmailAndPassword(emailId,password)
        .then(()=>{
            return Alert.alert("User Successful")
        })
        .catch(function(error){
            var errorCode = error.code;
            var errorMessage = error.message
            return Alert.alert("User not Found")
        })
    }
    userSignUp = (emailId,password)=> {
        firebase.auth().signInWithEmailAndPassword(emailId,password)
        .then(()=>{
            return Alert.alert("Sign Up Successful")
        })
        .catch(function(error){
            var errorCode = error.code;
            var errorMessage = error.message
            return Alert.alert("User not Found")
        })
    }
    render(){
        return(
            <View style = {styles.container}>
                
            <Text styles = {styles.title}>
                Barter
            </Text>
         <View>
             <View> 
                 <TextInput style = {styles.loginBox}
                 placeholder="abc@email.com"
                 keyboardType="email-address"
                 placeholderTextColor="black"
                 onChangeText = {(text)=>{
                     this.setState({
                         emailId:text
                     })
                 }}/>

                 <TextInput style = {styles.loginBox}
                 secureTextEntry={true}
                 placeholder="Enter Password"
                 placeholderTextColor="black"
                 onChangeText = {(text)=>{
                     this.setState({
                         password:text
                     })
                 }}/>
                <TouchableOpacity style = {[styles.button, {marginBottom:20, marginTop:20,}]}
                onPress = {()=>{
                    this.userLogin(this.state.emailId,this.state.password)
                }}
                >  
                <Text style = {styles.buttonText}>
                    Login
                </Text>
                </TouchableOpacity>
                <TouchableOpacity style = {[styles.button, {marginBottom:20, marginTop:20,}]}
                onPress = {()=>{
                    this.userSignUp(this.state.emailId,this.state.password)
                }}
                >  
                <Text style = {styles.buttonText}>
                    Sign Up
                </Text>
                </TouchableOpacity>

         </View> 
         </View>
         </View>   
        )
    }
}

const styles = StyleSheet.create({
    container={
        flex:1,
        backgroundColor: 'tan',
    },
    title: {
        margin: 10,
        textAlign: "center",
        fontSize: 38,
        fontWeight: "bold",
        color: "orange",
      },
      loginBox: {
        width: 300,
        height: 50,
        borderWidth: 2.5,
        margin: 10,
        paddingLeft: 10,
      },
      button: {
        marginTop: 10,
        width: 100,
        height: 50,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 15,
        borderWidth: 2.5,
        backgroundColor: "#baddf2",
      },
      buttonText: {
        textAlign: "center",
        fontSize: 20,
        color: "white",
        fontWeight: "bold",
      },
});
