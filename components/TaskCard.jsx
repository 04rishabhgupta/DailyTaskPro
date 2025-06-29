import React, { useRef } from 'react';
import { View, Text, StyleSheet, Button, Animated } from 'react-native';
import { useDispatch } from 'react-redux';
import { toggleTaskDone } from '../redux/actions';
import getStyles from '../styles';
import { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

export default function TaskCard({ item, onDelete }) {
    const dispatch = useDispatch();
    const { darkMode } = useContext(ThemeContext);
    const styles = getStyles(darkMode);

    const scaleAnim = useRef(new Animated.Value(1)).current;

    const handleDone = () => {
        Animated.sequence([
            Animated.timing(scaleAnim, {
                toValue: 1.2,
                duration: 200,
                useNativeDriver: true
            }),
            Animated.timing(scaleAnim, {
                toValue: 1,
                duration: 200,
                useNativeDriver: true
            })
        ]).start();

        dispatch(toggleTaskDone(item.id));
    };

    return (
        <Animated.View style={[styles.card, { transform: [{ scale: scaleAnim }] }]}>
            <Text style={[styles.taskText, item.done && { textDecorationLine: 'line-through', opacity: 0.6 }]}>
                {item.title}
            </Text>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Button title="Done" onPress={handleDone} />
                <Button title="Delete" onPress={() => onDelete(item.id)} />
            </View>
        </Animated.View>
    );
}
