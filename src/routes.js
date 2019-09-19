import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import Main from './pages/main';
import NewNota from './pages/newNota';

const App = createStackNavigator({
    Main,
    NewNota
},{
    initialRouteName: 'Main',
    defaultNavigationOptions: {
        title: 'Todas as notas',
        headerStyle:{
            backgroundColor: '#F4A460',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold'
        }
    }
});

export default createAppContainer(App);
