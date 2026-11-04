import {Pressable, Text, StyleSheet} from "react-native";

const Item = ({ item }) => {
    return (
        <Pressable style={item.done ? styles.taskContainerTrue : styles.taskContainer}>
            <Text>{item.title}</Text>
        </Pressable>
    );
};

export default Item;

const styles = StyleSheet.create({
taskContainer: {
    padding: 20,
    margin: 4,
    borderRadius: 8,
    backgroundColor: "#ff0000",

    taskContainerTrue: {
    padding: 20,
    margin: 4,
    borderRadius: 8,
    backgroundColor: "#00ff11",
},
}});
