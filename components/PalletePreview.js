import React from "react"
import { View, Text, TouchableOpacity, StyleSheet, FlatList } from "react-native"

const PalletePreview = ({ handlePress, colorPallete }) => {
    return (
        <TouchableOpacity onPress={handlePress} >
            <Text style={styles.title}>{colorPallete.palleteName}</Text>
            <FlatList data={colorPallete.colors}
                horizontal={true}
                keyExtractor={item => item.colorName}
                renderItem={({ item }) => <View style={[styles.box, { backgroundColor: item.hexCode }]} />} />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 18,
        fontWeight: "bold",
        marginTop: 20
    },
    box: {
        height: 30,
        width: 30,
        marginRight: 10,
        marginTop: 30
    }
})


export default PalletePreview