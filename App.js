
import React, {Component} from 'react';
import { StyleSheet, View, Text } from 'react-native';
import params from './src/params';

export default class App extends Component {
    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.welcome}>Iniciando o Campo Minado</Text>
                <Text style={styles.Instructions}>Tamanho da grade:
                    {params.getRowsAmount()}x{params.getColumnsAmount()}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    }
});