import React from 'react';
import {
    StyleSheet,
    View
} from 'react-native';

import Item from "./components/Item"

export default class App extends React.Component {
    render() {
        let colors = ["chartreuse", "yellow", "blue", "beige", "green", "magenta"]
        console.log("App") // tą konsolę zobacz w przeglądarce
        return (
            <View style={styles.containerMain}>
                <View style={styles.container}>
                    {colors.map((el, i) => {
                        return <Item key={i} backgroundColor={el} flex={1} text={"item" + i} fontSize={48} />
                    })}
                </View>
                <View style={styles.containerRev}>
                    {colors.map((el, i) => {
                        return <Item key={i} backgroundColor={el} flex={1} text={"item" + i} fontSize={48} />
                    })}
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    containerMain: {
        display: "flex",
        flexDirection: "row",
        backgroundColor: '#ffff00',
        flex: 1
    },
    container: {
        flex: 1,
        backgroundColor: '#ffff00',
    },
    containerRev: {
        flex: 1,
        backgroundColor: "white",
        flexDirection: "column-reverse"
    }
});