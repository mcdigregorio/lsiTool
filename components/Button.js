import { setStatusBarBackgroundColor } from 'expo-status-bar'
import React from 'react'
import {
    View,
    Pressable,
    StyleSheet,
    Text,
    TextPropTypes
} from "react-native"
import { color } from 'react-native-reanimated'

export default function Button(props) {

    const buttonStyle = props.involvedLimb == props.limb ? styles.involvedContainer : styles.notInvolvedContainer
    const oppositeLimb = props.involvedLimb == "Left" ? "Right" : "Left"

    return (
        <Pressable onPress={() => { props.setInvolvedLimb(oppositeLimb) }} >
            <View style={buttonStyle}>
                <Text style = {styles.buttonText}>
                    {props.involvedLimb == props.limb ? "Involved" : "Not Involved"}
                </Text>
            </View>
        </Pressable>
    )
}

const styles = StyleSheet.create({
   involvedContainer: {
        justifyContent: 'center',
        borderWidth: 1,
        borderRadius: 5,
        height: 40,
        width: 150,
        backgroundColor: "silver"
    },
    notInvolvedContainer: {
        justifyContent: 'center',
        borderWidth: 1,
        borderRadius: 5,
        height: 40,
        width: 150,
        backgroundColor: "grey"
    },
    buttonText: {
        fontSize: 20,
        alignSelf: 'center'
    }
})