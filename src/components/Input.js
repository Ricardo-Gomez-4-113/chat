import React, {useState} from 'react';
import { StyleSheet, View, TouchableOpacity, Platform} from 'react-native';
import {Item, Input as InputNB, Icon} from "native-base";

export default function Input(props) {
    const {sendMessag} = props;
    const [message, setMessage] = useState("");

    const onSubmit = () =>{
        if(message.length > 0){
            setMessage(message);
            setMessage("");
        }
    }

    return (
        <View style={styles.container}>
            <Item style={styles.itemInput}>
                <InputNB 
                placeholder="Mensaje..."
                placeholderTextColor="gray"
                style={styles.input}
                value={message}
                onChange = {(e) => setMessage(e.nativeEvent.text)}
                />
                <TouchableOpacity onPress={onSubmit}>
                    <Icon name="send" type="FontAwesome" style={{color: "#fff"}}/>
                </TouchableOpacity>
            </Item>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: "#16202B",
        paddingBottom: 0,
        paddingHorizontal: 20,
    },

    itemInput:{
        borderColor: "#16202B",
    },

    input:{
        color: "#fff",
    }
})
