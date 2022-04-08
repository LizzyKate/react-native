import React from 'react'
import { FlatList, StyleSheet } from 'react-native'
import ColorBox from '../components/ColorBox'


const ColorPallete = ({ route }) => {
    const { colors } = route.params
    return (

        <FlatList
            style={styles.container}
            data={colors}
            keyExtractor={item => item.colorName}
            renderItem={({ item }) => <ColorBox colorName={item.colorName} hexCode={item.hexCode} />}
        />

    )
}

const styles = StyleSheet.create({
    container: {
        paddingVertical: 30,
        paddingHorizontal: 30,
    },

})

export default ColorPallete