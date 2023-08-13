import React, { useState } from 'react';
import Main from './Screens/Main';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Detail from './Components/Detail';
import {Provider} from 'react-redux';
import store from './Store/store';
import SplashScreen from './Screens/SplashScreen';

const Stack = createNativeStackNavigator();
const App = () => {
  const [splashLoader, setSplashLoader] = useState(false)

  setTimeout(() => {
    setSplashLoader(true)
  }, 4000)

  return (
   <>
    {splashLoader ? (<Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen name="Main" component={Main} />
          <Stack.Screen name="Detail" component={Detail} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider> ): <SplashScreen />}
   </>
  );
};

export default App;
