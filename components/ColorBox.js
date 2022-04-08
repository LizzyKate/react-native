import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const ColorBox = ({ colorName, hexCode }) => {
    const boxColor = {
        backgroundColor: hexCode
    }
    return (
        <View style={[boxColor, styles.box]}>
            <Text>{colorName}: {hexCode}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    box: {
        padding: 10,
        justifyContent: "center",
        alignItems: "center",
        marginVertical: 10
    },
})

export default ColorBox