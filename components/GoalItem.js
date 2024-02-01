import { StyleSheet, View, Text, Pressable } from "react-native"


function GoalItem(props) {
    return (
        <Pressable onPress={props.onDeleteItem.bind(this, props.id)}>
            <View style = {styles.itemGoals}>
            <Text style = {styles.textGoals}>{props.text}</Text>
        </View>
      </Pressable>
    )
}

export default GoalItem

const styles = StyleSheet.create({
    textGoals: {
        fontSize: 24,
    },
    itemGoals: {
        fontStyle: 'italic',
        marginTop: 10,
        marginBottom: 10,
        backgroundColor: '#e3d5ca',
        borderColor: '#e3d5ca',
        borderWidth: 3,
        borderRadius: 10,
        padding: 3,
        
    },
})