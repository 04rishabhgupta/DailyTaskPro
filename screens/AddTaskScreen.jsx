import React, { useContext, useState } from 'react';
import { View, TextInput, Button, Alert } from 'react-native';
import { useDispatch } from 'react-redux';
import { addTask } from '../redux/actions';
import getStyles from '../styles';
import { ThemeContext } from '../contexts/ThemeContext';

export default function AddTaskScreen({ navigation }) {
    const { darkMode } = useContext(ThemeContext);
    const styles = getStyles(darkMode);

    const [task, setTask] = useState('');
    const dispatch = useDispatch();

    const handleAdd = () => {
        if (task.trim() === '') {
            Alert.alert('Error', 'Task cannot be empty');
            return;
        }
        const newTask = { id: Date.now().toString(), title: task };
        dispatch(addTask(newTask));
        navigation.goBack();
    };

    return (
        <View style={styles.container}>
            <TextInput
                placeholder="Enter task"
                value={task}
                onChangeText={setTask}
                style={styles.input}
                placeholderTextColor={darkMode ? '#888' : '#aaa'}
            />
            <Button title="Add Task" onPress={handleAdd} />
        </View>
    );
}
