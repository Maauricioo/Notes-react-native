import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, FlatList, Animated } from 'react-native'
import { bindActionCreators } from 'redux'
import * as actions from '../actions'
import { connect } from 'react-redux'
import { Icon } from 'react-native-elements'
import Swipeable from 'react-native-swipeable'
import LottieView from 'lottie-react-native'

class ExibeNotas extends Component {

    constructor(props) {
        super(props)
        this.moveAnimation = new Animated.ValueXY({ x: 105, y: 600 })
    }

    state = {
        animacaoDel: false
    }

    //Edita nota
    itemEdit = (item) => {
        this.props.editarNota(item);
        this.props.navigation.navigate('NewNota')
    }

    //Deleta nota
    Deleta = (item) => {
        this.props.deletarNota(item.id)
        this.setState({ animacaoDel: true })

        Animated.spring(this.moveAnimation, {
            toValue: { x: 105, y: 450 },
        }).start()

        setTimeout(() => {
            Animated.spring(this.moveAnimation, {
                toValue: { x: 105, y: 600 },
            }).start()
            setTimeout(() => {
                this.setState({ animacaoDel: false })
                this.moveAnimation = new Animated.ValueXY({ x: 105, y: 600 })
            }, 1100);
        }, 1100);
    }

    //Swipeable direito
    rightButtons = [
        <View style={styles.btnExcluir}>
            <TouchableOpacity style={styles.btn} onPress={() => this.Deleta(this.Item)} >
                <Icon
                    size={35}
                    color={'#808080'}
                    name='delete'
                    type='AntDesign'
                />
            </TouchableOpacity>
        </View>,
    ]

    //Swipeable esquerdo
    leftButtons = [
        <View style={styles.btnEditar}>
            <TouchableOpacity style={styles.btn} onPress={() => this.itemEdit(this.Item)} >
                <Icon
                    size={35}
                    color={'#808080'}
                    name='edit'
                    type='AntDesign'
                />
            </TouchableOpacity>
        </View>,
    ]

    //Notinha   
    Item
    itemNota = ({ item }) => {
        this.Item = item
        return (
            <Swipeable
                rightButtons={this.rightButtons}
                leftButtons={this.leftButtons}
                leftButtonWidth={50}
                rightButtonWidth={50}
            >
                <View style={styles.notaContainer} >
                    <View style={styles.containerText}>
                        <Text style={styles.notaTitulo}>{item.titulo}</Text>
                        <Text style={styles.notaText}>{item.texto}</Text>
                    </View>
                </View>
            </Swipeable>
        )
    }

    render() {
        return (
            <View style={styles.viewListaNota}>
                <FlatList
                    data={this.props.listaNota}
                    keyExtractor={item => String(item.id)}
                    bounces={false}
                    renderItem={this.itemNota}
                    ListEmptyComponent={<View style={{ justifyContent: 'center', alignItems: 'center' }}><Text>Sua lista está vazia</Text></View>}
                />
                {
                    this.state.animacaoDel &&
                    <Animated.View style={[styles.viewAnimation, this.moveAnimation.getLayout()]}>
                        <LottieView style={styles.animacaoDel} resizeMode='cover' source={require('../animations/animationDelete.json')} autoPlay loop={true} />
                    </Animated.View>
                }

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
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
        padding: 20,
        flexDirection: 'row',
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

    containerBtn: {
        flex: 0.2
    },

    btn: {
        height: 50,
        borderRadius: 50,
        backgroundColor: '#ddd',
        justifyContent: 'center',
        width: 50,
    },

    viewListaNota: {
        flex: 1,
        padding: 15
    },

    btnExcluir: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#FFF',
    },
    btnEditar: {
        flex: 1,
        alignItems: 'flex-end',
        justifyContent: 'center',
        backgroundColor: '#FFF',
    },
    animacaoDel: {
        height: 150,
        position: 'absolute',
    },
    viewAnimation: {
        display: 'flex',
        backgroundColor: (0, 0, 0),
        position: 'absolute',
        height: 150,
        width: 150,
        alignItems: 'flex-end',
        zIndex: 1
    }
})