import React, { useContext, useState, useEffect } from 'react';
import { View, Text, FlatList, Button } from 'react-native';
import TaskCard from '../components/TaskCard';
import { useSelector, useDispatch } from 'react-redux';
import { addTask, deleteTask } from '../redux/actions';
import { getMotivationalQuote } from '../utils/api';
import getStyles from '../styles';
import { ThemeContext } from '../contexts/ThemeContext';
import { saveTasksToStorage, loadTasksFromStorage } from '../storage/taskStorage';

export default function HomeScreen({ navigation }) {
    const { darkMode } = useContext(ThemeContext);
    const styles = getStyles(darkMode);

    const tasks = useSelector(state => state.tasks);
    const dispatch = useDispatch();

    const [quote, setQuote] = useState('');

    useEffect(() => {
        fetchQuote();
        loadTasks();
    }, []);

    useEffect(() => {
        saveTasks();
    }, [tasks]);

    const fetchQuote = async () => {
        const quote = await getMotivationalQuote();
        setQuote(quote);
    };

    const loadTasks = async () => {
        try {
            const savedTasks = await loadTasksFromStorage();
            savedTasks.forEach(task => {
                dispatch(addTask(task));
            });
        } catch (e) {
            console.error('Error loading tasks:', e);
        }
    };

    const saveTasks = async () => {
        try {
            await saveTasksToStorage(tasks);
        } catch (e) {
            console.error('Error saving tasks:', e);
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Your Tasks</Text>
            <Text style={styles.quote}>{quote || 'Loading motivation...'}</Text>

            <FlatList
                data={tasks}
                contentContainerStyle={styles.list}
                renderItem={({ item }) => (
                    <TaskCard item={item} />
                )}
                keyExtractor={item => item.id}
            />

            <View style={styles.buttonContainer}>
                <Button title="Add Task" onPress={() => navigation.navigate('AddTask')} />
            </View>
            <View style={styles.buttonContainer}>
                <Button title="Settings" onPress={() => navigation.navigate('Settings')} />
            </View>
        </View>
    );
}
