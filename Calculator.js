import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import Button from "./components/calc/Button"

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            equation: "",
            result: "0",
            orientation: true
        };
        Dimensions.addEventListener("change", () => {
            this.setState({
                orientation: this.isPortrait()
            })
        })
        this.addToEquation = this.addToEquation.bind(this)
        this.evaluateEquation = this.evaluateEquation.bind(this)
        this.clear = this.clear.bind(this)
        this.deleteOne = this.deleteOne.bind(this)
        this.alterResult = this.alterResult.bind(this)
    }

    isPortrait = () => {
        let dim = Dimensions.get('screen');
        return dim.height >= dim.width;
    };

    addToEquation(char) {
        let equation = this.state.equation
        if (["+", "-", "/", "*"].includes(equation.substr(equation.length - 1)) && ["+", "/", "*"].includes(char)) { }
        else {
            if (equation == "" && ["+", "/", "*"].includes(char)) { }
            else if (equation.substr(equation.length - 1) == "-" && char == "-") { }
            else {
                equation += char
                this.setState({
                    equation: equation
                })
            }
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
            equation: "",
            result: "0"
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
                    if (currentValue >= 0) {
                        this.setState({
                            result: Math.sqrt(currentValue).toString(),
                        })
                    }
                    break
                case "Pow":
                    this.setState({
                        result: Math.pow(currentValue, 2).toString(),
                    })
                    break
                case "Sin":
                    if (currentValue != Infinity) {
                        this.setState({
                            result: Math.sin(currentValue).toString(),
                        })
                    }
                    break
                case "Cos":
                    if (currentValue != Infinity) {
                        this.setState({
                            result: Math.cos(currentValue).toString(),
                        })
                    }
                    break
            }
        }
    }

    render() {
        let table = [
            ["7", "4", "1", "."],
            ["8", "5", "2", "0"],
            ["9", "6", "3", "="]
        ]
        let buttons = []
        for (let i = 0; i < 3; i++) {
            let col = table[i].map((el, j) => {
                return <Button key={j} viewStyle={btnStyles.normal} textStyle={textStyles.special} character={el} callback={el != "=" ? this.addToEquation : this.evaluateEquation} />
            })
            buttons.push(<View key={i} style={styles.buttonColumn}>{col}</View>)
        }

        let col
        if (this.state.orientation) {
            let btn0 = ["Sqrt", "Pow", "Sin", "Cos"].map((el, i) => {
                return <Button key={i} viewStyle={btnStyles.functions} textStyle={textStyles.white} character={el} callback={this.alterResult} />
            })
            buttons.push(<View key={buttons.length} style={styles.buttonColumn}>{btn0}</View>)
        }
        col = []
        let btn1 = ["DEL", "C"].map((el, i) => {
            return <Button key={i} viewStyle={btnStyles.special} textStyle={textStyles.white} character={el} callback={i ? this.clear : this.deleteOne} />
        })
        let btn2 = ["/", "*", "-", "+"].map((el, i) => {
            return <Button key={i + 2} viewStyle={btnStyles.special} textStyle={textStyles.white} character={el} callback={this.addToEquation} />
        })
        col.push(...btn1, ...btn2)
        buttons.push(<View key={buttons.length} style={styles.buttonColumn}>{col}</View>)
        return (
            <View style={styles.containerMain}>
                <View style={styles.equation}>
                    <Text style={textStyles.big}>{this.state.equation}</Text>
                </View>
                <View style={styles.result}>
                    <Text style={textStyles.small}>{this.state.result}</Text>
                </View>
                <View style={styles.buttons}>
                    {buttons}
                </View>
            </View>
        );
    }
}
{/* <View>
    <View style={{flex: 2, backgroundColor: "red"}}>

    </View>
    <View style={{flex: 1, backgroundColor: "blue"}}>

    </View>
    <View style={{flex: 6, backgroundColor: "yellow", flexDirection: "row"}}>
        <View style={{flex: 1, backgroundColor: "chartreuse"}}>

        </View>
        <View style={{flex: 1, backgroundColor: "lime"}}>

        </View>
        <View style={{flex: 1, backgroundColor: "chartreuse"}}>

        </View>
        <View style={{flex: 1, backgroundColor: "lime"}}>

        </View>
    </View>
</View> */}

const styles = StyleSheet.create({
    containerMain: {
        flex: 1
    },
    equation: {
        flex: 2,
        backgroundColor: '#ffffff',
        alignItems: "flex-end",
        justifyContent: "center",
        paddingRight: 10
    },
    result: {
        flex: 1,
        backgroundColor: "#e4e4e4",
        alignItems: "flex-end",
        justifyContent: "center",
        paddingRight: 10
    },
    buttons: {
        flex: 6,
        flexDirection: "row",
        backgroundColor: "beige"
    },
    buttonColumn: {
        flex: 1,
        flexDirection: "column",
    }
});

const btnStyles = StyleSheet.create({
    special: {
        flex: 1,
        backgroundColor: "#3e3e3e",
        justifyContent: "center",
        alignItems: "center"
    },
    normal: {
        flex: 1,
        backgroundColor: "#47ffcc",
        justifyContent: "center",
        alignItems: "center"
    },
    functions: {
        flex: 1,
        backgroundColor: "#636363",
        justifyContent: "center",
        alignItems: "center"
    }
})

const textStyles = StyleSheet.create({
    white: {
        color: "white"
    },
    special: {
        color: "#3e3e3e"
    },
    small: {
        fontSize: 16,
    },
    big: {
        fontSize: 24
    }
})

export default App;