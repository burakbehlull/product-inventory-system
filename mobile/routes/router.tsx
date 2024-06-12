import {NavigationContainer} from '@react-navigation/native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'

import { HomeScreen, ProductsScreen, AddScreen, UpdateAndDeleteScreen,UpdateOneScreen } from '../screens/index'

function Router(){
    const Tab = createBottomTabNavigator()
    return(
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name='Home' component={HomeScreen}></Tab.Screen>
                <Tab.Screen name='Products' component={ProductsScreen}></Tab.Screen>
                <Tab.Screen name='Add' component={AddScreen}></Tab.Screen>
                <Tab.Screen name='Update and Delete' component={UpdateAndDeleteScreen}></Tab.Screen>
                <Tab.Screen name='Update One' component={UpdateOneScreen}></Tab.Screen>
            </Tab.Navigator>
        </NavigationContainer>
    )
}

export default Router
