import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, Button, TouchableOpacity, SafeAreaView} from 'react-native';
import { useState } from 'react';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  
  const [modoalIsVisible, SetModalIsVisible] = useState(false)
  const [courseGoals, setCourseGoals] = useState([])

  function startAddGoalHandler() {
    SetModalIsVisible(true)
  }

  function endGoalHandler() {
    SetModalIsVisible(false)
  }

  function addGoalHandler(enteredGoalText) {
    setCourseGoals((currentCourseGoals) => [...currentCourseGoals, {text: enteredGoalText , id: Math.random().toString()}])
    endGoalHandler()  
  }

  function deleteGoalHandler(id) {
    setCourseGoals((currentCourseGoals) => {
      return currentCourseGoals.filter((goal) => goal.id != id)
    })
  }

  return (
    <SafeAreaView style={styles.container}>
    <View style = {styles.appContainer}>
      <TouchableOpacity style={styles.button} onPress={startAddGoalHandler}>
        <Text style={styles.buttonText}>Add New Goal</Text>
      </TouchableOpacity>
      {modoalIsVisible && <GoalInput onAddGoal={addGoalHandler} onCancel={endGoalHandler}/>}
      <View style = {styles.goalsContainer}>
        <Text style = {styles.textHeading}>List of Goals</Text>
        <FlatList data={courseGoals} renderItem={(itemData) => {
          return (
            <GoalItem text ={itemData.item.text} id= {itemData.item.id} onDeleteItem = {deleteGoalHandler} />
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
      <StatusBar style='dark'/>
      
    </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
    marginTop: 16,
    backgroundColor: '#ddb892'
  
  },
  goalsContainer: {
    flex: 5
  },
  textHeading: {
    fontSize: 15,
    marginTop: 20
  },
  button: {
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
    backgroundColor:"#588157"
  },
  buttonText: {
    color: 'white'
  },
  container: {
    flex: 1
  }
});
