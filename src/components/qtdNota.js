import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, Icon, Text, Badge, Toast, Container } from 'native-base';
import { connect } from 'react-redux';

class QtdNota extends Component {

    constructor(props) {
        super(props);
        this.state = {
            showToast: false
        };
    }

    render() {
        return (
            <View style={styles.viewAdd}>
                <Container>

                    <Button style={styles.btn} badge onPress={() => Toast.show({
                        text: 'Você possui ' + this.props.listaNota.length + ' nota(s)',
                        duration: 2000,
                    })}>
                        <Badge style={{ bottom: 10, left: 15, zIndex: 5 }} >
                            <Text>{this.props.listaNota.length}</Text>
                        </Badge>
                        <Icon style={{ position: 'absolute', bottom: 13 }} active name="paper" />
                    </Button>
                </Container>
            </View>
        )
    }
}


const mapStateToProps = store => ({
    listaNota: store.listaNota.listaNotas
});

export default connect(mapStateToProps)(QtdNota);

const styles = StyleSheet.create({
    btn: {
        backgroundColor: '#F4A460',
        width: 50,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        position: 'absolute',
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
        left: 20
    }
})