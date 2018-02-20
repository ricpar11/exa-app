import Tabla from './tabla';
import Fixture from './fixture';
import Goleadores from './goleadores';
import Equipo from './equipo';
import { AppLoading } from 'expo';
import SplashScreen from './splashScreen'
import { StackNavigator,TabNavigator } from 'react-navigation';


const TablaStack = StackNavigator(
    {
        Tabla: {screen: Tabla } 
    }, 
    {
        headerMode: 'screen'
    }
);

const FixtureStack = StackNavigator(
    {
        Fixture: {screen: Fixture } 
    }, 
    { 
        headerMode: 'screen'
    }    
);
    
const GoleadoresStack = StackNavigator(
    {
        Goleadores: {screen: Goleadores } 
    }, 
    {
        headerMode: 'screen'
    }
);

const MainScreenNavigator = TabNavigator(
    {
        TablaStack: {screen: TablaStack } ,
        FixtureStack: { screen: FixtureStack },
        GoleadoresStack: { screen: GoleadoresStack },
    }
);

export default AppNavigator = StackNavigator(
    {
        MainScreenNavigator: {screen: MainScreenNavigator},        
        // FirstScreen: {screen: SplashScreen }
    },
    {
        headerMode: 'none'
    }
);





// export default AppNavigator = TabNavigator({
//     TablaStack: {screen: TablaStack, navigationOptions: ({navigation}) => ({
//       header: null,
//     })},      
//     Fixture: {screen: Fixture},      
//     Goleadores: {screen: Goleadores},      

// });

// {
//   tabBarOptions: {
//     activeTintColor: '#3498db',
//     inactiveTintColor: '#9B9B9B',
//     labelStyle: {
//       fontSize: 12,
//     },
//     style: {
//       backgroundColor: '#F7F7F7',
//     }
//   }
// },