import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import { useState } from 'react';

export default function App() {
  
  const [enteredGoalText, setEnteredGoalText] = useState('')
  const [courseGoals, setCourseGoals] = useState([])

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText)
  }
  function addGoalHandler() {
    setCourseGoals((currentCourseGoals) => [...currentCourseGoals, enteredGoalText])
  }

  return (
    <View style = {styles.appContainer}>
      <View style = {styles.inputContainer}>
        <TextInput style = {styles.textInput} placeholder='Your course goal' onChangeText={goalInputHandler}/>
        <Button title='Add Goal' onPress={addGoalHandler}/>
      </View>
      <View style = {styles.goalsContainer}>
        <Text style = {styles.textHeading}>List of Goals</Text>
        {courseGoals.map((goal) => <Text key={goal} style = {styles.textGoals}>{goal}</Text>)}
      </View>
      {/* <Text>Hello World! Piyush...</Text>
      <View>
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
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc'
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#cccccc',
    width: '70%',
    marginRight: 10,
    padding: 5
  },
  goalsContainer: {
    flex: 5
  },
  textGoals: {
    fontStyle: 'italic',
    fontSize: 24,
    marginTop: 10
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
