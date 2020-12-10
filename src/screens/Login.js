import React, {useState} from 'react';
import { StyleSheet, View, SafeAreaView, StatusBar, Image } from 'react-native';
import {Item, Input, Text, Button} from "native-base";
import logoApp from "../assets/chatLogo.png";
export default function Login(props) {
    const {setuserName} =props;
    const [name, setName] =useState("");

    const onSubmint = ()=>{
        setuserName(name);
    }


    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="light-content"/>
            <View>
                <Image source={logoApp} resizeMode="contain" style={styles.logo}/>
            </View>
            <Item>
                <Input 
                placeholder="Ingrese el nombre de usuario" 
                style={{color: "#fff"}} 
                placeholderTextColor="grey"
                value={name}
                onChange= {(e) => setName(e.nativeEvent.Text)}
                />
            </Item>

            <Button style={styles.btmLogin} onPress={onSubmint}>
                <Text>Entrar</Text>
            </Button>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        marginHorizontal: 50,
        marginVertical: 100,

    },

    logo:{
        width:"100%",
        height: 200,
        marginBottom: 30,
    },

    btmLogin:{
        marginTop: 40,
        justifyContent: "center",
        backgroundColor: "#0098D3",
    }
})
