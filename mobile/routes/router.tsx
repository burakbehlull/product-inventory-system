import {NavigationContainer} from '@react-navigation/native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'

import { HomeScreen, ProductsScreen, AddAndDeleteScreen, UpdateScreen } from '../screens/index'

function Router(){
    const Tab = createBottomTabNavigator()
    return(
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name='Home' component={HomeScreen}></Tab.Screen>
                <Tab.Screen name='Products' component={ProductsScreen}></Tab.Screen>
                <Tab.Screen name='Add and Delete' component={AddAndDeleteScreen}></Tab.Screen>
                <Tab.Screen name='Update' component={UpdateScreen}></Tab.Screen>
            </Tab.Navigator>
        </NavigationContainer>
    )
}

export default Router
