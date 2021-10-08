import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class Item extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
        this.styles = StyleSheet.create({
            text: {
                fontSize: this.props.fontSize,
                textAlign: 'center'
            }
        });
    }

    render() {
        return (
            <View style={{ backgroundColor: this.props.backgroundColor, flex: this.props.flex }}>
                <Text style={this.styles.text}> {this.props.text} </Text>
            </View>
        );
    }
}

export default Item;
