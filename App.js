import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, Pressable } from 'react-native';
import { useState } from 'react';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  
  const [courseGoals, setCourseGoals] = useState([])

  function addGoalHandler(enteredGoalText) {
    setCourseGoals((currentCourseGoals) => [...currentCourseGoals, {text: enteredGoalText , id: Math.random().toString()}])
  }

  function deleteGoalHandler(id) {
    setCourseGoals((currentCourseGoals) => {
      return currentCourseGoals.filter((goal) => goal.id != id)
    })
  }

  return (
    <View style = {styles.appContainer}>
      <GoalInput onAddGoal={addGoalHandler}/>
      <View style = {styles.goalsContainer}>
        <Text style = {styles.textHeading}>List of Goals</Text>
        <FlatList data={courseGoals} renderItem={(itemData) => {
          return (
            <GoalItem text ={itemData.item.text} id= {itemData.item.id}onDeleteItem = {deleteGoalHandler} />
          )
        }} keyExtractor={(item, index) => {
          return item.id
        }}>
        </FlatList>
      </View>
      {/* <Text>Hello World! Piyush...</Text>
      <View2
        <Text style = {styles.newStyle}>Another Hello World! Not Piyush</Text>
      </View3
      <Button title="Don't Tap Me"></Button>
      <StatusBar style="auto" /> */}
      <StatusBar style='auto' />
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
    marginTop: 16,
  
  },
  goalsContainer: {
    flex: 5
  },
  textHeading: {
    fontSize: 20
  }
  // container: {
  //   flex: 1,
  //   backgroundColor: '#fff',
  //   alignItems: 'center',
  //   justifyContent: 'center',
  // },
  // newStyle: {
  //   marginTop: 20, 
  //   borderWidth: 5, 
  //   borderColor: 'green', 
  //   padding: 20,

  // }
});
