import {NavigationContainer} from '@react-navigation/native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'

import {HomeScreen} from '../screens/index'

function Router(){
    const Tab = createBottomTabNavigator()
    return(
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name='Home' component={HomeScreen}></Tab.Screen>
            </Tab.Navigator>
        </NavigationContainer>
    )
}

export default Router
