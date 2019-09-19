import React, { Component } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { bindActionCreators } from 'redux';
import * as actions from '../actions';
import { connect } from 'react-redux';
import { Icon } from 'react-native-elements';

class addNota extends Component {
    render() {
        return (
            <View style={styles.viewAdd}>
                <TouchableOpacity style={styles.btn} onPress={
                    () => {
                        this.props.add()
                        this.props.navigation.navigate('NewNota');
                    }
                }>

                    <Icon
                        color={'#fff'}
                        name='add'
                    />
                </TouchableOpacity>
            </View>
        )
    }
}


const mapStateToProps = store => ({
    nota: store.nota
});

const mapDispatchToProps = dispatch =>
    bindActionCreators(actions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(addNota);

const styles = StyleSheet.create({
    btn: {
        borderColor: '#F4A460',
        borderWidth: 3,
        backgroundColor: '#f4a460',
        width: 50,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        position: 'absolute'
    },

    textButton: {
        fontSize: 40,
        margin: 10,
        color: '#fff',
        paddingBottom: 7
    },

    viewAdd: {
        backgroundColor: (0, 0, 0),
        position: 'absolute',
        height: 50,
        width: 50,
        bottom: 40,
        right: 20
    }
})