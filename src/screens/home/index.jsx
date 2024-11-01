import {FlatList, RefreshControl, StyleSheet, View} from 'react-native';
import {useEffect, useState} from 'react';
import FloatActionButton from '../../components/uı/FloatActionButton';
import {ADDTASKS} from '../../utils/Routes';
import AsyncStorage from '@react-native-async-storage/async-storage';
import TaskCart from '../../components/home/TaskCart';
import HeaderComponent from '../../components/home/HeaderComponent';

const Home = ({navigation}) => {

  const [tasks, setTasks] = useState([]);

  const [ongoing, setOngoing] = useState();
  const [pending, setPending] = useState();
  const [completed, setCompleted] = useState();
  const [cancel, setCancel] = useState();



  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = () => {
    setRefreshing(true); // yenileme başladığında resfreshing true yap
    getTask(); // görevleri yeniden al
    setRefreshing(false); //yenileme bittiğinde resrefing stateini false yap
  };

  /* const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 800);
  }, []); */

  const getTask = async () => {
   
    try {
      const savedTask = await AsyncStorage.getItem('tasks');
       setTasks (JSON.parse(savedTask) ) // alırken json parse kullanırız
      let completedCount= 0;
      let pendingCount = 0;
      let ongoingCount = 0;
      let cancelCount = 0;
      for (const task of JSON.parse(savedTask)){
        if (task.status === 1) {
          completedCount++;
        } else if (task.status === 2) {
          pendingCount++;
        } else if (task.status === 3) {
          ongoingCount++;
        } else if (task.status === 4) {
          cancelCount++;
        }
        setOngoing(ongoingCount);
        setPending(pendingCount);
        setCompleted(completedCount);
        setCancel(cancelCount);
      }


      
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getTask();
  }, []);

  return (
    <View style={{flex: 1}}>
      <FlatList
        data={tasks}
        ListHeaderComponent={<HeaderComponent ongoing={ongoing} pending={pending} completed={completed}/>}
        renderItem={({item}) => <TaskCart item={item} />}
        /*  RefreshControl refreshing={refreshing} onRefresh={onRefresh} */
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      />

      <FloatActionButton onPress={() => navigation.navigate(ADDTASKS)} />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
