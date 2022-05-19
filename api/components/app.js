import React, { Component } from 'react'
import { Text, StyleSheet, View, Image, TextInput, TouchableOpacity } from 'react-native'

export default class App extends Component {
    render() {
        return (
            <View style={styles.container}>

                <TextInput
                    style={styles.input}
                    placeholder="Digite seu email"
                />

                <TextInput
                    style={styles.input}
                    secureTextEntry={true}
                    placeholder="Digite sua senha"
                />

                <TouchableOpacity
                    style={styles.botao}
                    onPress={ () => {this.clicou()}}
                    >
                    <Text style={styles.botaoText}>Login</Text>
                </TouchableOpacity>

            </View>
        )
    }
}