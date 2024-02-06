import { StyleSheet, TextInput, View, Button, Modal, Image } from "react-native";
import { useState } from "react";

function GoalInput(props) {

    const [enteredGoalText, setEnteredGoalText] = useState('')

    function goalInputHandler(enteredText) {
        setEnteredGoalText(enteredText)
      }

    function addGoalHandler() {
        props.onAddGoal(enteredGoalText)
        setEnteredGoalText('')
    }

    return (
        <Modal animationType="slide" visible={props.visible}>
            <View style = {styles.inputContainer}>
                <Image style={styles.image} source={require('../assets/images/goal.png')}/>
                <TextInput style = {styles.textInput} placeholder='Your course goal' onChangeText={goalInputHandler} value={enteredGoalText}/>
                <View style={styles.buttonContainer}>
                    <View style={styles.buttonStyle}> 
                        <Button title='Add Goal' onPress={addGoalHandler} color='#81b29a'/> 
                        </View>
                    <View style={styles.buttonStyle}> 
                        <Button title="Cancel" onPress={props.onCancel} color='#e07a5f'/> 
                        </View>
                </View>
            </View>
        </Modal>
    )

}

export default GoalInput;

const styles = StyleSheet.create({
    inputContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center', 
    padding: 16,
    backgroundColor: '#3d405b'
    },
    textInput: {
    borderWidth: 1,
    backgroundColor: '#fff3b0',
    width: '100%',
    padding: 20,
    borderRadius: 10,
    },
    buttonContainer:{
        flexDirection: 'row',
        marginTop: 10
    },
    buttonStyle: {
        width: 120,
        marginHorizontal: 8
    },
    image: {
        width: 100,
        height: 100,
        margin: 20
    }
    
})