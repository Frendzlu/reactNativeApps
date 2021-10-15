import React, { Component } from 'react';
import { Text, TouchableOpacity } from 'react-native';

class Button extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
        this.styles = StyleSheet.create({
            button: {
                flex: 1,
                text: { fontSize: "1rem" },
                backgroundColor: this.props.bgColor
            }
        });
    }

    render() {
        return (
            <TouchableOpacity style={this.styles.button} onPress={this.props.callback(this.props.character)}>
                <Text style={this.styles.button}>{this.props.character}</Text>
            </TouchableOpacity>
        );
    }
}

export default Button;
