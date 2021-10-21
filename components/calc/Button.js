import React, { Component } from 'react';
import { Text, TouchableOpacity } from 'react-native';

class Button extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <TouchableOpacity style={this.props.viewStyle} onPress={()=>this.props.callback(this.props.character)}>
                <Text style={this.props.txtStyle}>{this.props.character}</Text>
            </TouchableOpacity>
        );
    }
}

export default Button;
