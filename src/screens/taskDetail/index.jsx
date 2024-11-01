import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import moment from 'moment';
import AppColors from '../../../theme/Color';
import {Button, Divider} from '@ui-kitten/components';
import {setCategory} from '../../utils/Function';
import {status, taskValues} from '../../utils/Constant';
import AsyncStorage from '@react-native-async-storage/async-storage';

const TaskDetail = ({route}) => {
  const {item} = route?.params;

  /* const deleteTask = async()=>{
    try {
      // mevcut görevleri al
      const savedTasks = await AsyncStorage.getItem('tasks')

      // kayıtlı görev yoksa fonksiyonu durdur

      if(savedTasks === null){
        return;// durdur
      }

      const tasks = JSON.parse(savedTasks)



        // silinecek görevi filtrele

      const filteredTasks = tasks.filter(task => task.id !==item.id)

        // FİLRELENMİŞ GÖREVLERİ DEPOLA

        await AsyncStorage.setItem('tasks', JSON.stringify(filteredTasks))
        console.log('Görev Silinirken hata oluştu...')





    } catch (error) {
      console.log('Görev silinirken hata oluştu.', error)
      
    }
  }


 */

  const deleteTask = async () => {
    try {
      // mevcut görevleri al
      const savedTasks = await AsyncStorage.getItem('tasks');

      if (savedTasks === null) {
        return; // fonskiyonu durdur
      }

      const tasks = JSON.parse(savedTasks);

      //silinecek görevi filtrele
      const filteredTasks = tasks.filter(task => task.id !== item.id);

      //filtrelenmiş görevleri depola
      await AsyncStorage.setItem('tasks', JSON.stringify(filteredTasks));
      console.log('Görev Silindi');
    } catch (error) {
      console.log('Görev silinirken hata oluştu:', error);
    }
  };

  const updateTask = async newStatus => {
    try {
      // mevcut görevleri al
      const savedTasks = await AsyncStorage.getItem('tasks');

      if (savedTasks === null) {
        return; // fonksiyonu durdur
      }

      const tasks = JSON.parse(savedTasks);

      //güncellemek istediğimiz görevleri bul
      const updatedTask = tasks.map(task => {
        if (task.id === item.id) {
          return {...task, status: newStatus}; // yeni durumu uygula
        }
        return task;
      });

      //güncellemek istediğimiz görevleri depola
      await AsyncStorage.setItem('tasks', JSON.stringify(updatedTask));
      console.log('Görev Güncellendi', updateTask);

    } catch (error) {
      console.log('görev güncellenirken hata oluştu.', error);
    }
  };

  return (
    <View style={{flex: 1, backgroundColor: AppColors.WHITE}}>
      {/* <Text>{JSON.stringify(item, null, 3)}</Text> */}
      <ScrollView>
        <View style={styles.container}>
          <Text style={{fontSize: 18, fontWeight: 'bold', color: 'black'}}>
            Title:
          </Text>
          <Text style={{fontSize: 14, fontWeight: '400', color: 'gray'}}>
            {item?.title}
          </Text>
        </View>
        <Divider />
        <View style={styles.container}>
          <Text style={{fontSize: 18, fontWeight: 'bold', color: 'black'}}>
            Description:
          </Text>
          <Text style={{fontSize: 14, fontWeight: '400', color: 'gray'}}>
            {item?.description}
          </Text>
        </View>
        <Divider />
        <View style={styles.container}>
          <Text style={{fontSize: 18, fontWeight: 'bold', color: 'black'}}>
            Start Date:
          </Text>
          <Text style={{fontSize: 14, fontWeight: '400', color: 'gray'}}>
            {moment(item.startDate).format('MMM Do YY')}
          </Text>
        </View>
        <Divider />
        <View style={styles.container}>
          <Text style={{fontSize: 18, fontWeight: 'bold', color: 'black'}}>
            End Date:
          </Text>
          <Text style={{fontSize: 14, fontWeight: '400', color: 'gray'}}>
            {moment(item.endDate).format('MMM Do YY')}
          </Text>
        </View>
        <Divider />
        <View style={styles.container}>
          <Text style={{fontSize: 18, fontWeight: 'bold', color: 'black'}}>
            Category:
          </Text>
          <Text style={{fontSize: 14, fontWeight: '400', color: 'gray'}}>
            {setCategory(item.category)}
          </Text>
        </View>
        <Divider />
        <View style={styles.container}>
          <Text style={{fontSize: 18, fontWeight: 'bold', color: 'black'}}>
            Status:
          </Text>
          <Text style={{fontSize: 14, fontWeight: '400', color: 'gray'}}>
            {taskValues.find(task => task.status === item?.status)?.title}
          </Text>
        </View>
        <Divider />
      </ScrollView>

      <View>
        <Button
          onPress={() => updateTask(status.PENDING)}
          style={styles.button}
          status="primary">
          START
        </Button>
        <Button
          onPress={() => updateTask(status.COMPLETED)}
          style={styles.button}
          status="success">
          COMPLATED
        </Button>
        <Button
          onPress={() => updateTask(status.CANCEL)}
          style={styles.button}
          status="danger">
          CANCEL
        </Button>
        <Button onPress={deleteTask} style={styles.button} status="warning">
          DELETE
        </Button>
      </View>
    </View>
  );
};

export default TaskDetail;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 15,
    marginHorizontal: 20,
    marginHorizontal: 10,
    marginBottom: 10,
    padding: 10,
    backgroundColor: AppColors.WHITE,
    borderRadius: 5,
  },
  button: {
    marginVertical: 15,
  },
});
