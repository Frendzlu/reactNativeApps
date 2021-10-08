import React from 'react';
import {
    StyleSheet,
    View
} from 'react-native';

import Item from "./components/Item"

export default class App extends React.Component {
    render() {
        let colors = ["chartreuse", "yellow", "blue", "beige", "green"]
        console.log("App") // tą konsolę zobacz w przeglądarce
        return (
            <View style={styles.container}>
                {colors.map((el, i) => {
                    return <Item key={i} backgroundColor={el} flex={1} text={"item" + i} fontSize={48} />
                })}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffff00',
    },
});