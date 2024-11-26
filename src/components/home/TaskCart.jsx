import { useNavigation } from '@react-navigation/native'
import moment from 'moment'
import { Pressable, StyleSheet, Text, View } from 'react-native'
import { TASKDETAİL } from '../../utils/Routes';
import { taskValues } from '../../utils/Constant';
import { setCategory } from '../../utils/Function';



const TaskCart = ({item}) => {
  const navigation = useNavigation();
  return (
   <Pressable 
   onPress={()=> navigation.navigate(TASKDETAİL,{item:item})} 
   style={styles.container}>
    
     <View
        style={{
          backgroundColor : taskValues.find(task => task.status===item.status)?.color,
          padding: 3,
          borderRadius: 5,
        }}>
        {taskValues.find(task => task.status === item?.status)?.icon}
      </View> 

{/* <View style={{ backgroundColor: taskValues.find(task => task.status === item?.status)?.color || '#ccc', padding: 3, borderRadius: 5, }} > {taskValues.find(task => task.status === item?.status)?.icon || <Text>?</Text>} </View> */}



    <View style={{flex:1, marginLeft:10, }}>

<Text style={{fontSize:16, fontWeight:'600', color:'black'}}>{item.title}</Text>
<Text style={{fontSize:16, fontWeight:'300', color:'gray'}}>{item.description}</Text>

<View style={{flexDirection:'row'}}>
  <View style={{flex:1}}>
    <Text style={{fontSize:16, fontWeight:'400', color:'black'}}>
    {moment(item.startDate).format("MMM Do YY")} - 
    {moment(item.endDate).format("MMM Do YY")}
    </Text>
  </View>
</View>
  </View> 

<View>
  <Text style={{fontSize:14, fontWeight:'300', color:'gray'}}>{setCategory(item.category)}</Text>
</View>

   </Pressable>
  )
}

export default TaskCart

const styles = StyleSheet.create({
  container:{
    flex:1,
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    backgroundColor:'#f9f9f9',
    padding:10,
    borderRadius:5,
    marginBottom:10,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
    paddingHorizontal:20,
    paddingVertical:10,
    borderRadius:10,
    marginHorizontal:10,
    marginBottom:10,
    backgroundColor:'#fff',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
    paddingHorizontal:20,
    paddingVertical:10,
    borderRadius:10,
    marginHorizontal:10,
    marginBottom:10,
    backgroundColor:'#fff'
  }
})

/*  <View >

    <Text style={{fontSize:16, fontWeight:'600', color:'black'}}>{item?.title}</Text>
    <Text style={{fontSize:16, fontWeight:'300', color:'gray'}}>{item?.description}</Text>

    <View style={{flexDirection:'row'}}>
      <View style={{flex:1}}>
        <Text style={{fontSize:16, fontWeight:'600', color:'black'}}>Start Date</Text>
        <Text style={{fontSize:16, fontWeight:'300', color:'gray'}}>{moment(item.startDate).format("MMM Do YY")} - {moment().format("MMM Do YY")}</Text>
      </View>
      


    </View>
      
    </View> */