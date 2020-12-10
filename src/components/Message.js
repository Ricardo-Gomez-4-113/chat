import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import lettersColor from "../utils/letterColor";

export default function Message(props) {
    const {message:{userName, text, time}, name} = props;
    const [bgColorLetter, setBgColorLetter] = useState(null);
    const thisIsMe = name === userName;

    useEffect(() => {
       const char = userName.trim()[0].toUpperCase();
       const indexLetter = char.charCodeAt()-65;
       bgColorLetter(lettersColor[indexLetter]);
    }, [])

    const conditionalStyle={
        container:{
            justifyContent: thisIsMe ? "flex-end" : "flex-start",
        },

        viewMessages:{
            backgroundColor: thisIsMe ? "#F0F0F1" : "4BB7F0",
        },

        message:{
           color: thisIsMe ? "#000" : "#fff",
           textAlign: thisIsMe ? "right" : "left",
        },

    }
    return (
        <View style={[styles.container, conditionalStyle.container]}>
            {!thisIsMe &&(
                <View style={[styles.letterView, {backgroundColor: `rgb(${bgColorLetter})`}]}>
                <Text style={styles.letter}>{userName.substr(0, 1)}</Text>
            </View>
            )}
            <View style={[styles.viewMessages, conditionalStyle.viewMessages]}>
            <Text style={[styles.message, conditionalStyle.message]}>{text}</Text>
            <Text style={[styles.time, thisIsMe ? styles.timeLeft : styles.timeRight]}>{time}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flexDirection: "row",
        margin: 5,
        alignItems: "center",
    },

    viewMessages:{
        borderRadius: 35,
        minHeight: 35,
        minWidth: "40%",
        maxWidth: "80%",
    },
    letter:{
        fontSize: 18,
        color: "#fff",
        textTransform: "uppercase",
    },

    letterView:{
        height: 35,
        width: 35,
        borderRadius: 150,
        alignItems: "center",
        justifyContent: "center",
        marginRight: 10,
        backgroundColor: "#d3a4e2",
    },

    message:{
        padding: 5,
        paddingBottom: 25,
    },

    time:{
        fontSize: 10,
        position: "absolute",
        buttom: 5,
        
    },

    timeRight:{
        right: 8,
        color: "#fff",

    },

    timeLeft:{
        left: 8,
        color: "gray",
    } 
    
})
