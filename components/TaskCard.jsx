import React, { useRef, useContext, useState } from 'react';
import { View, Text, Button, Animated, Modal } from 'react-native';
import { useDispatch } from 'react-redux';
import { toggleTaskDone, deleteTask } from '../redux/actions';
import getStyles from '../styles';
import { ThemeContext } from '../contexts/ThemeContext';

export default function TaskCard({ item }) {
    const dispatch = useDispatch();
    const { darkMode } = useContext(ThemeContext);
    const styles = getStyles(darkMode);

    const scaleAnim = useRef(new Animated.Value(1)).current;
    const [modalVisible, setModalVisible] = useState(false);

    const handleDone = () => {
        Animated.sequence([
            Animated.timing(scaleAnim, {
                toValue: 1.2,
                duration: 200,
                useNativeDriver: true
            }),
            Animated.timing(scaleAnim, {
                toValue: 0,
                duration: 200,
                useNativeDriver: true
            })
        ]).start(() => {
            dispatch(toggleTaskDone(item.id));
            dispatch(deleteTask(item.id)); // Task disappears after done (existing functionality)
        });
    };

    const confirmDelete = () => {
        setModalVisible(true);
    };

    const handleDeleteConfirmed = () => {
        setModalVisible(false);
        dispatch(deleteTask(item.id));
    };

    return (
        <Animated.View style={[styles.card, { transform: [{ scale: scaleAnim }] }]}>
            <Text style={[styles.taskText]}>
                {item.title}
            </Text>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Button title="Done" onPress={handleDone} />
                <Button title="Delete" color="red" onPress={confirmDelete} />
            </View>

            <Modal
                transparent={true}
                animationType="fade"
                visible={modalVisible}
                onRequestClose={() => setModalVisible(false)}
            >
                <View style={{
                    flex: 1,
                    backgroundColor: 'rgba(0,0,0,0.5)',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <View style={{
                        backgroundColor: darkMode ? '#3a3a3a' : '#fff',
                        padding: 20,
                        borderRadius: 10,
                        width: '80%',
                        alignItems: 'center'
                    }}>
                        <Text style={{
                            color: darkMode ? '#fff' : '#000',
                            fontSize: 16,
                            marginBottom: 20,
                            textAlign: 'center'
                        }}>
                            Are you sure you want to delete this task?
                        </Text>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '100%' }}>
                            <Button title="Cancel" onPress={() => setModalVisible(false)} />
                            <Button title="Delete" color="red" onPress={handleDeleteConfirmed} />
                        </View>
                    </View>
                </View>
            </Modal>
        </Animated.View>
    );
}
