import { StyleSheet, View, Text, Pressable } from "react-native"


function GoalItem(props) {
    return (
        <View style = {styles.itemGoals}>
            <Pressable android_ripple={{color: "#e3d5ca"}} onPress={props.onDeleteItem.bind(this, props.id)} style = {({pressed}) => pressed && styles.pressedItemi}>
                <Text style = {styles.textGoals}>{props.text}</Text>
            </Pressable>
        </View>
    )
}

export default GoalItem

const styles = StyleSheet.create({  
    textGoals: {
        fontSize: 18,
        padding: 7,
        fontStyle: 'italic',
        
    },
    itemGoals: {
        marginTop: 8,
        marginBottom: 8,
        backgroundColor: '#e3d5ca',
        borderColor: '#e3d5ca',
        borderWidth: 3,
        borderRadius: 10,   
        
    },
    pressedItem: {
        opacity: 0.6
    }
})