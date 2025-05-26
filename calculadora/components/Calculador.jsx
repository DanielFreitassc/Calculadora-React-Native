import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { Colors } from '../utils/Colors'
import Button from '../utils/Button'


export default function Calculador() {
    const [firstValue, setFirstValue] = useState("");
    const [displayValue, setDisplayValue] = useState("0");
    const [operador, setOperador] = useState("");

    const handleNumberInput = (num) => {
        if (displayValue === "Impossível dividir por zero") {
            setDisplayValue(num);
            return;
        }

        if (displayValue === "0") {
            setDisplayValue(num);
        } else {
            setDisplayValue(displayValue + num);
        }
    };


    const handleOperatorInput = (operador) => {
        setOperador(operador);
        setFirstValue(displayValue);
        setDisplayValue("0");
    }

    const handleCalculation = () => {
        const num1 = parseFloat(firstValue)
        const num2 = parseFloat(displayValue)

        if (operador === "/" && num2 === 0) {
            setDisplayValue("Impossível dividir por zero");
            return;
        }


        if( operador  === "+") {
            setDisplayValue((num1 + num2).toString());
        } else if (operador === "-") {
            setDisplayValue((num1 - num2).toString());
        }  else if (operador === "*") {
            setDisplayValue((num1 * num2).toString());
        } else if (operador === "/") {
            setDisplayValue((num1 / num2).toString());
        }
        else if (operador === "%") {
            setDisplayValue((num1 % num2).toString());
        }

        setOperador("");
        setFirstValue("");
    }

    const handleClear = () => {
        setDisplayValue("0");
        setOperador("");
        setFirstValue("");
    }

    const handleDelete = () => {
        if(displayValue.length == 1) {
            setDisplayValue("0")
        } else {
            setDisplayValue(displayValue.slice(0, -1))
        }
    }

    return ( 
        <View style={styles.container}>
            <View style={styles.display}>
                <Text style={{fontSize:30,fontWeight:"300"}}>{firstValue + operador}</Text>
                <Text
                style={[
                    styles.displayNumber,
                    {
                        fontSize: displayValue.length > 10 ? 25 : 70,
                        color: displayValue === "Impossível dividir por zero" ? 'red' : '#000'
                    }
                ]}
            >
                {displayValue}
            </Text>


            </View>
            <View style={styles.keypad}>
                <Button title="c" type="top" onPress={handleClear}/>
                <Button title="⌫" type="top" onPress={handleDelete}/>
                <Button title="%" type="top" onPress={() => handleOperatorInput("%")}/>
                <Button title="÷" type="right" onPress={() => handleOperatorInput("/")}/>
                <Button title="7" type="number" onPress={() => handleNumberInput("7")}/>
                <Button title="8" type="number" onPress={() => handleNumberInput("8")}/>
                <Button title="9" type="number" onPress={() => handleNumberInput("9")}/>
                <Button title="x" type="right" onPress={() => handleOperatorInput("*")}/>
                <Button title="6" type="number" onPress={() => handleNumberInput("6")}/>
                <Button title="5" type="number" onPress={() => handleNumberInput("5")}/>
                <Button title="4" type="number" onPress={() => handleNumberInput("4")}/>
                <Button title="-" type="right" onPress={() => handleOperatorInput("-")}/>
                <Button title="1" type="number" onPress={() => handleNumberInput("1")}/>
                <Button title="2" type="number" onPress={() => handleNumberInput("2")}/>
                <Button title="3" type="number" onPress={() => handleNumberInput("3")}/>
                <Button title="+" type="right" onPress={() => handleOperatorInput("+")}/>
                <Button title="0" type="number" onPress={() => handleNumberInput("0")}/>
                <Button title="00" type="number" onPress={() => handleNumberInput("00")}/>
                <Button title="." type="number" onPress={() => handleNumberInput(".")}/>
                <Button title="=" type="right" onPress={handleCalculation}/>

            </View>
        </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex:1  
    },
    display: {
        flex:1,
        backgroundColor: Colors.gray,
        padding:20,
        paddingVertical: 20,
        paddingHorizontal: 40,
        alignItems: "flex-end",
        justifyContent: "flex-end"
    },
    displayNumber: {
        fontSize: 70,
        fontWeight: "300"
    },
    keypad: {
        flex:2,
        backgroundColor: Colors.light,
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "center",
        gap: 20,
        padding: 30
    }
})