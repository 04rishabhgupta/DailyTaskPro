import React, { useContext, useState, useEffect } from 'react';
import { View, Text, FlatList, Button } from 'react-native';
import TaskCard from '../components/TaskCard';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTask } from '../redux/actions';
import { getMotivationalQuote } from '../utils/api';
import getStyles from '../styles';
import { ThemeContext } from '../contexts/ThemeContext';

export default function HomeScreen({ navigation }) {
    const { darkMode } = useContext(ThemeContext);
    const styles = getStyles(darkMode);

    const tasks = useSelector(state => state.tasks);
    const dispatch = useDispatch();

    const [quote, setQuote] = useState('');

    useEffect(() => {
        fetchQuote();
    }, []);

    const fetchQuote = async () => {
        const quote = await getMotivationalQuote();
        setQuote(quote);
    };

    const handleDelete = (id) => {
        dispatch(deleteTask(id));
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
