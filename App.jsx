import {NavigationContainer} from '@react-navigation/native';
import RouteNavigator from './src/router/RouteNavigator';
import * as eva from '@eva-design/eva';
import {ApplicationProvider} from '@ui-kitten/components';

const App = () => {
  return (
    <ApplicationProvider {...eva} theme={eva.light}>
      <NavigationContainer>
        <RouteNavigator />
      </NavigationContainer>
    </ApplicationProvider>
  );
};

export default App;
/* deneme deneme */
