import React, { Component } from "react";
import {
  View,
  Text,
  TextInput,
  Image,
  Modal,
  KeyboardAvoidingView,
  StyleSheet,
  TouchableOpacity,
  Alert,
  ScrollView
} from "react-native";
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context'
import MyHeader from '../MyHeader'

export default class TextToSpeechScreen extends Component{
    render(){
        return(
            <SafeAreaProvider>
            <View>
                <MyHeader title='Comment Screen'/>
                <View>
                    <Text>TYPE YOUR COMMENT</Text>
                    <TextInput
              placeholder="TYPE COMMENT HERE"
              placeholderTextColor="gray"
              onChangeText={text => {
                this.setState({
                  comment: text
                });
              }}
            />
                </View>
            </View>
            </SafeAreaProvider>
        )
    }
}