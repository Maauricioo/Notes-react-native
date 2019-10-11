import React, { Component } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { Button, Text } from 'native-base';
import { bindActionCreators } from 'redux';
import * as actions from '../actions';
import { connect } from 'react-redux';
import { Icon } from 'react-native-elements';
import _ from 'lodash';

class NewNota extends Component {

    static navigationOptions = {
        title: 'Adicionando notas'
    }

    constructor(props) {
        super(props)

        this.btnSalvar =  _.throttle(this.salvar, 1000, {leading: true, trailing: false})
        this.btnSalvarEdit = _.throttle(this.salvaEdit, 1000, {leading: true, trailing: false})

        this.state = {
            titulo: this.props.nota.titulo,
            texto: this.props.nota.texto,
            save: false
        }
        
    }

    //Salva nota editada e retorna para página Main
    salvaEdit = () => {
        var nota = {
            id: this.props.nota.id,
            titulo: this.state.titulo,
            texto: this.state.texto
        };
        this.props.salvaNotaEdit(nota);
        this.props.navigation.goBack();
    }

    //Salva nova nota e retorna para página Main
    salvar = () => {
        if (this.state.save) {
            var ultimo = this.props.listaNota[this.props.listaNota.length - 1];
            if (this.props.listaNota.length == 0) {
                var id = 1;
            } else {
                var id = ultimo.id + 1;
            }
            var nota = {
                id,
                titulo: this.state.titulo,
                texto: this.state.texto,
            }
            this.props.salvarNota(nota);
            this.props.navigation.goBack();
        }

    }

    //Retorna JSX para salvar
    renderSalva = () => (
        <View style={styles.container}>
            <View style={styles.titulo}>
                <TextInput
                    selectTextOnFocus={true}
                    placeholder={'Título'}
                    autoFocus={true}
                    onChangeText={(titulo) => this.setState({ titulo: titulo, save: true })}
                    maxLength={40}
                    style={{ backgroundColor: '#e3e3e3', borderRadius: 5, fontWeight: 'bold' }}
                />
                <TextInput
                    selectTextOnFocus={true}
                    placeholder={'Descrição'}
                    multiline={true}
                    onChangeText={(texto) => this.setState({ texto: texto })}
                    style={{ backgroundColor: '#e3e3e3', borderRadius: 5, marginTop: 10, minHeight: 100, textAlignVertical: 'top' }}
                />
            </View>
            <View style={styles.containerBtn}>
                <Button style={{ borderRadius: 5, borderColor: '#F4A460' }} bordered iconLeft transparent onPress={this.btnSalvar}>
                    <Icon name='save' type="AntDesign" color="#F4A460" />
                    <Text style={{ color: '#F4A460' }}>Salvar</Text>
                </Button>
            </View>
        </View>
    )

    //Retorna JSX para editar
    renderEdit = () => (
        <View style={styles.container}>
            <View style={styles.titulo}>
                <TextInput
                    value={this.state.titulo}
                    selectTextOnFocus={true}
                    placeholder={'Título'}
                    autoFocus={true}
                    onChangeText={(titulo) => this.setState({ titulo: titulo })}
                    maxLength={40}
                    style={{ backgroundColor: '#e3e3e3', borderRadius: 5, fontWeight: 'bold' }}
                />
                <TextInput
                    value={this.state.texto}
                    selectTextOnFocus={true}
                    placeholder={'Descrição'}
                    multiline={true}
                    onChangeText={(texto) => this.setState({ texto: texto })}
                    style={{ backgroundColor: '#e3e3e3', borderRadius: 5, marginTop: 10, minHeight: 100, textAlignVertical: 'top' }}
                />
            </View>
            <View style={styles.containerBtn}>
                <Button style={{ borderRadius: 5, borderColor: '#F4A460' }} bordered iconLeft transparent onPress={this.btnSalvarEdit}>
                    <Icon name='save' type="AntDesign" color="#F4A460" />
                    <Text style={{ color: '#F4A460' }}>Salvar</Text>
                </Button>
            </View>
        </View>
    )

    render() {

        if (this.props.nota.id == 0) {
            return this.renderSalva()
        } else {
            return this.renderEdit()
        }
    }
}

const mapStateToProps = store => ({
    listaNota: store.listaNota.listaNotas,
    nota: store.nota
});
const mapDispatchToProps = dispatch =>
    bindActionCreators(actions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(NewNota);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: '#fafafa'
    },

    titulo: {
        flex: 0.8,
        justifyContent: 'flex-start'
    },

    containerBtn: {
        flex: 0.2,
        alignItems: 'center',
    },
})