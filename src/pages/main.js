import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import ExibeNota from '../components/exibeNotas'
import AddNota from '../components/addNota'
import QtdNota from '../components/qtdNota'

export default class Main extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ExibeNota navigation={this.props.navigation} />
        <AddNota navigation={this.props.navigation}/>
        <QtdNota/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa'
  },
})