import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import Button from "./components/calc/Button"

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            equation: "",
            result: ""
        };
        Dimensions.addEventListener("change", () => {
            this.setState({
                orientation: this.isPortrait()
            })
        })
        this.addToEquation.bind(this)
        this.evaluateEquation.bind(this)
        this.clear.bind(this)
        this.deleteOne.bind(this)
        this.alterResult.bind(this)
    }
    addToEquation(char) {
        let equation = this.state.equation
        try {
            eval(equation + char)
            equation += char
            this.setState({
                equation: equation
            })
        }
        catch (e) {
            console.log(e)
        }

    }

    evaluateEquation(char) {
        let equation = this.state.equation
        let result
        try {
            result = eval(equation)
            this.setState({
                result: eval(equation).toString()
            })
        }
        catch (e) {
            console.log(e)
        }

    }

    clear(char) {
        this.setState({
            equation: ""
        })
    }

    deleteOne(char) {
        let equation = this.state.equation
        if (equation != "") {
            this.setState({
                equation: equation.substring(0, equation.length - 1)
            })
        }
    }

    alterResult(char) {
        if (this.state.result && this.state.result != "") {
            let currentValue = eval(this.state.result)
            switch (char) {
                case "Sqrt":
                    this.setState({
                        result: Math.sqrt(currentValue).toString()
                    })
                    break
                case "Pow":
                    this.setState({
                        result: Math.pow(currentValue).toString()
                    })
                    break
                case "Sin":
                    this.setState({
                        result: Math.sin(currentValue).toString()
                    })
                    break
                case "Cos":
                    this.setState({
                        result: Math.cos(currentValue).toString()
                    })
                    break
            }
        }
    }

    render() {
        let table = [
            [1, 4, 7, "."],
            [2, 5, 8, 0],
            [3, 6, 9, "="]
        ]
        let buttons = []
        for (let i = 0; i < table.length; i++) {
            table[i].map((el, j) => {
                return <Button key={j} style={styles.button.normal} character={el} callback={el != "=" ? this.addToEquation : this.evaluateEquation} />
            })
            buttons.push(<View key={i} style={styles.buttonColumn}>{col}</View>)
        }

        let col
        if (this.state.orientation) {
            let btn0 = ["Sqrt", "Pow", "Sin", "Cos"].map((el, i) => {
                return <Button key={i} style={styles.button.functions} character={el} callback={this.alterResult} />
            })
            buttons.push(<View key={i} style={styles.buttonColumn}>{btn0}</View>)
        }
        col = []
        let btn1 = ["DEL", "C"].map((el, i) => {
            return <Button key={i} style={styles.button.special} character={el} callback={i ? this.clear : this.deleteOne} />
        })
        let btn2 = ["/", "*", "-", "+"].map((el, i) => {
            return <Button key={i + 2} style={styles.button.special} character={el} callback={this.addToEquation} />
        })
        col.push(...btn1, ...btn2)
        buttons.push(<View key={i} style={styles.buttonColumn}>{col}</View>)
        return (
            <View style={styles.containerMain}>
                <View style={styles.equation}>
                    <Text style={styles.equation}>{this.state.equation}</Text>
                </View>
                <View style={styles.result}>
                    <Text style={styles.result}>{this.state.result}</Text>
                </View>
                <View>
                    <View>
                        {buttons}
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    containerMain: {
        display: "flex",
        flexDirection: "column",
        backgroundColor: '#ffffff',
        flex: 1
    },
    equation: {
        flex: 2,
        backgroundColor: '#ffffff',
        text: { fontSize: "2rem" }
    },
    result: {
        flex: 1,
        backgroundColor: "#e4e4e4",
        text: { fontSize: "1rem" }
    },
    buttons: {
        flex: 8,
        flexDirection: "row",
        backgroundColor: "yellow"
    },
    buttonColumn: {
        flex: 1,
        flexDirection: "column",
    },
    button: {
        special: {
            text: { color: "white", fontSize: "1rem" },
            backgroundColor: "#3e3e3e"
        },
        normal: {
            text: { color: "#3e3e3e", fontSize: "1rem" },
            backgroundColor: "#47ffcc"
        },
        functions: {
            text: { color: "white", fontSize: "1rem" },
            backgroundColor: "#636363"
        }
    }
});

export default App;