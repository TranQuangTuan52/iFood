import React, { Component } from 'react'
import { Text, View, ImageBackground, Image, TextInput, TouchableOpacity, Dimensions } from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { COLORS, FONTS } from '../constants/theme'
const { width, height } = Dimensions.get('window')
export class Login extends Component {
    state = {
        user:'',
        password:''
    }
    checkLogin = () =>{
        if(this.state.user === 'admin')
            this.props.navigation.navigate('Manager')
        else
        this.props.navigation.navigate('Home')
    }
    render() {
        return (
            <ImageBackground             
            style={{ flex: 1, alignItems: 'center' }}>            
            <Image source={require('../assets/logo-ifood.png')} style = {{marginTop: 32, marginBottom: 82, height: 100}} resizeMode = 'contain' />
           <View style = {{position:'absolute', bottom: 8, alignItems:'center',            
           }}>
           <View style={{
                flexDirection: 'row',
                alignItems: 'center',
                width: 250,
                height: 38,
                borderWidth: 2,
                borderRadius: 4,
                borderColor: 'tomato',
                borderStartWidth: 8,
              
                
            }}>
                <FontAwesome name='envelope-square' size={32} color='tomato' style={{ marginStart: 2, width: 28 }} />
                <TextInput placeholder='Enter Email' height={40} width = {215} onChangeText={(user) => {this.setState({user})}} />
            </View>
            

            <View style={{
                flexDirection: 'row',
                alignItems: 'center',
                width: 250,
                height: 38,
                borderWidth: 2,
                borderRadius: 4,
                borderColor: 'tomato',               
                marginTop: 8,
                borderStartWidth: 8,              
            }}>
                <FontAwesome name='lock' size={32} color='tomato' style={{ marginStart: 2, width: 28 }} />
                <TextInput placeholder='Enter Password' height={40} width = {215} secureTextEntry onChangeText={(password) => {this.setState({password})}} />
            </View>          
            <View style={{ flexDirection: 'row', marginTop: 16, marginBottom: 16 }}>
                <TouchableOpacity style={{ width: 120, height: 35, alignItems: 'center', backgroundColor: 'tomato', borderRadius: 8, elevation: 4, marginHorizontal: 4 }}>
                    <Text style={{ ...FONTS.h2, color: 'white' }} 
                     onPress = {()=>this.checkLogin()}
                     >Login</Text>
                </TouchableOpacity>
                {/*  */}
            </View>              
            <View style  = {{flexDirection:'row', marginVertical: 16}}>
                    <Image source = {require('../assets/icons/facebook.png')} style = {{width: 40, height: 40, marginHorizontal: 8}} />
                    <Image source = {require('../assets/icons/google.png')} style = {{width: 40, height: 40, marginHorizontal: 8}} />
            </View>
           
            <View style = {{ alignItems:'center'}} >
            
           <View style = {{flexDirection:'row' }} >
           <Text style={{ ...FONTS.h3, color: 'black' }}>Have an account?</Text>
            <TouchableOpacity onPress = {()=>this.props.navigation.navigate('Signup')}>
            <Text style={{ ...FONTS.h3, color: 'tomato' , marginStart: 6}}>Signup</Text>
            </TouchableOpacity>
           </View>
           
            </View>

           </View>
        </ImageBackground>

        )
    }
}

export default Login
