import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ADDTASKS, TASKDETAİL, TASKS} from '../utils/Routes';
import TaskDetail from '../screens/taskDetail';
import AddTask from '../screens/addTask';
import Home from '../screens/home';
import { StyleSheet } from 'react-native';

const Stack = createNativeStackNavigator();

const RouteNavigator = () => {
  return (
    <Stack.Navigator
    
    >
      <Stack.Screen name={TASKS} component={Home} />
      <Stack.Screen name={ADDTASKS} component={AddTask} />
      <Stack.Screen name={TASKDETAİL} component={TaskDetail} />
    </Stack.Navigator>
  );
};

export default RouteNavigator;

const styles = StyleSheet.create({
    
});
