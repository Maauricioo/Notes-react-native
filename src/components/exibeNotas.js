import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList, Alert } from 'react-native';
import { bindActionCreators } from 'redux';
import * as actions from '../actions';
import { connect } from 'react-redux';
import { Icon } from 'react-native-elements';

class ExibeNotas extends Component {

    itemEdit = (item) => {
        this.props.editarNota(item);
        this.props.navigation.navigate('NewNota')
    }

    alertDeleta = (item) => {
        Alert.alert(
            'Deletar nota',
            'Deseja realmente deletar esta nota?',
            [
                {
                    text: 'Cancelar',
                    style: 'cancel',
                },
                { text: 'OK', onPress: () => this.props.deletarNota(item.id) },
            ],
            { cancelable: false },
        );
    }

    itemNota = ({ item }) => (
        <TouchableOpacity onPress={() => this.itemEdit(item)} >
            <View style={styles.notaContainer} >
                <View style={styles.containerText}>
                    <Text style={styles.notaTitulo}>{item.titulo}</Text>
                    <Text style={styles.notaText}>{item.texto}</Text>
                </View>

                <View style={styles.containerBtn}>
                    <TouchableOpacity style={styles.btn} onPress={() => this.alertDeleta(item)} >
                        <Icon
                            size={20}
                            color={'#FF0000'}
                            name='delete'
                            type='AntDesign'
                        />
                    </TouchableOpacity>
                </View>
            </View>
        </TouchableOpacity>
    )

    render() {
        return (
            <View style={styles.viewListaNota}>
                <FlatList
                    data={this.props.listaNota}
                    keyExtractor={item => item.id.toString()}
                    renderItem={this.itemNota}
                />
            </View>
        )
    }
}

const mapStateToProps = store => ({
    listaNota: store.listaNota.listaNotas
});

const mapDispatchToProps = dispatch =>
    bindActionCreators(actions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ExibeNotas);

const styles = StyleSheet.create({
    notaContainer: {
        flex: 1,
        backgroundColor: '#FFF',
        borderWidth: 1,
        borderColor: '#DDD',
        borderRadius: 5,
        padding: 20,
        marginBottom: 10,
        flexDirection: 'row'
    },

    containerText: {
        flex: 0.8,
    },

    notaTitulo: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333'
    },

    notaText: {
        fontSize: 16,
        color: '#999',
        marginTop: 5,
        lineHeight: 24
    },

    containerBtn:{
        flex: 0.2
    },

    btn: {
        height: 35,
        borderRadius: 50,
        borderWidth: 2,
        borderColor: '#FF0000',
        backgroundColor: 'transparent',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 5,
        marginTop: 5,
        width: 35,
    },

    viewListaNota: {
        flex: 1,
        padding: 15
    },
})