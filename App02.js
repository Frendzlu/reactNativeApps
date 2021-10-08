import React from 'react';
import {
    StyleSheet,
    View
} from 'react-native';

import Item from "./components/Item"

export default class App extends React.Component {
    render() {
        console.log("App") // tą konsolę zobacz w przeglądarce
        return (
            <View style={styles.container}>
                <Item backgroundColor="red" flex={1} text="hider" fontSize={48} />
                <Item backgroundColor="green" flex={5} text="kątęnt" fontSize={48} />
                <Item backgroundColor="blue" flex={1} text="futer" fontSize={48} />
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