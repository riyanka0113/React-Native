import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { FontAwesome } from '@expo/vector-icons';

function Header({title}) {
    return (
       <View style={stlyes.header}>
           <FontAwesome name="heart" size={24} color="white" />
           <Text style={stlyes.text}>{title}</Text>
       </View>
    )
}

const stlyes = StyleSheet.create({
    header: {
        flexDirection: "row",
    },
    text: {
        color: "white",
        fontWeight: "500",
        marginLeft: "10px",
        fontSize: "18px"
    }
})

export default Header
