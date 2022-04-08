import React from "react"
import { View, Text, TouchableOpacity, StyleSheet, FlatList } from "react-native"
import PalletePreview from "../components/PalletePreview"


const Solarized = [
    {
        colorName: "Cyan",
        hexCode: "#2aa198"
    },
    {
        colorName: "Blue",
        hexCode: "#268bd2"
    },
    {
        colorName: "Magenta",
        hexCode: "#d33682"
    },
    {
        colorName: "Orange",
        hexCode: "#cb4b16"
    }
]
const Rainbow = [
    { colorName: 'Red', hexCode: '#FF0000' },
    { colorName: 'Orange', hexCode: '#FF7F00' },
    { colorName: 'Yellow', hexCode: '#FFFF00' },
    { colorName: 'Green', hexCode: '#00FF00' },
    { colorName: 'Violet', hexCode: '#8B00FF' },
];

const Frontend_Masters = [
    { colorName: 'Red', hexCode: '#c02d28' },
    { colorName: 'Black', hexCode: '#3e3e3e' },
    { colorName: 'Grey', hexCode: '#8a8a8a' },
    { colorName: 'White', hexCode: '#ffffff' },
    { colorName: 'Orange', hexCode: '#e66225' },
];


const Color_Palletes = [
    { palleteName: "Solarized", colors: Solarized },
    { palleteName: "Rainbow", colors: Rainbow },
    { palleteName: "Frontend_Masters", colors: Frontend_Masters }
]


const Home = ({ navigation }) => {
    return (

        <View style={styles.container}>
            <FlatList data={Color_Palletes}
                keyExtractor={item => item.palleteName}
                renderItem={({ item }) => (
                    <PalletePreview handlePress={() => {
                        navigation.navigate("ColorPallete", item)
                    }} colorPallete={item} />
                )} />
        </View>




    )
}

const styles = StyleSheet.create({
    container: {
        padding: 30,
        backgroundColor: "teal",
        flex: 1,
        // justifyContent: "center",
        // alignItems: "center"
    },
})


export default Home