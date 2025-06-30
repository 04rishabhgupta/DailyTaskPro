import React, { useRef, useContext, useState } from 'react';
import { View, Text, TouchableOpacity, Animated, Modal, TextInput } from 'react-native';
import { useDispatch } from 'react-redux';
import { toggleTaskDone, deleteTask, updateTask } from '../redux/actions';
import getStyles from '../styles';
import { ThemeContext } from '../contexts/ThemeContext';

export default function TaskCard({ item }) {
    const dispatch = useDispatch();
    const { darkMode } = useContext(ThemeContext);
    const styles = getStyles(darkMode);

    const scaleAnim = useRef(new Animated.Value(1)).current;
    const [modalVisible, setModalVisible] = useState(false);
    const [editModalVisible, setEditModalVisible] = useState(false);
    const [editedTitle, setEditedTitle] = useState(item.title);

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
            dispatch(deleteTask(item.id));
        });
    };

    const confirmDelete = () => {
        setModalVisible(true);
    };

    const handleDeleteConfirmed = () => {
        setModalVisible(false);
        dispatch(deleteTask(item.id));
    };

    const openEditModal = () => {
        setEditedTitle(item.title);
        setEditModalVisible(true);
    };

    const handleUpdateTask = () => {
        if (editedTitle.trim() !== '') {
            dispatch(updateTask(item.id, editedTitle));
        }
        setEditModalVisible(false);
    };

    return (
        <Animated.View style={[styles.card, { transform: [{ scale: scaleAnim }] }]}>
            <Text style={[styles.taskText, { fontSize: 20, fontWeight: 'bold', marginBottom: 10 }]}>
                {item.title}
            </Text>

            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <TouchableOpacity style={[styles.button, { backgroundColor: 'green' }]} onPress={handleDone}>
                    <Text style={styles.buttonText}>Done</Text>
                </TouchableOpacity>

                <TouchableOpacity style={[styles.button, { backgroundColor: '#0b3d91' }]} onPress={openEditModal}>
                    <Text style={styles.buttonText}>Edit</Text>
                </TouchableOpacity>

                <TouchableOpacity style={[styles.button, { backgroundColor: 'red' }]} onPress={confirmDelete}>
                    <Text style={styles.buttonText}>Delete</Text>
                </TouchableOpacity>
            </View>

            {/* Delete Confirmation Modal */}
            <Modal transparent={true} animationType="fade" visible={modalVisible} onRequestClose={() => setModalVisible(false)}>
                <View style={{
                    flex: 1, backgroundColor: 'rgba(0,0,0,0.5)',
                    justifyContent: 'center', alignItems: 'center'
                }}>
                    <View style={{
                        backgroundColor: darkMode ? '#3a3a3a' : '#fff',
                        padding: 20, borderRadius: 10, width: '80%',
                        alignItems: 'center'
                    }}>
                        <Text style={{
                            color: darkMode ? '#fff' : '#000',
                            fontSize: 16, marginBottom: 20, textAlign: 'center'
                        }}>
                            Are you sure you want to delete this task?
                        </Text>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '100%' }}>
                            <TouchableOpacity style={[styles.button, { backgroundColor: '#555' }]} onPress={() => setModalVisible(false)}>
                                <Text style={styles.buttonText}>Cancel</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={[styles.button, { backgroundColor: 'red' }]} onPress={handleDeleteConfirmed}>
                                <Text style={styles.buttonText}>Delete</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>

            {/* Edit Task Modal */}
            <Modal transparent={true} animationType="fade" visible={editModalVisible} onRequestClose={() => setEditModalVisible(false)}>
                <View style={{
                    flex: 1, backgroundColor: 'rgba(0,0,0,0.5)',
                    justifyContent: 'center', alignItems: 'center'
                }}>
                    <View style={{
                        backgroundColor: darkMode ? '#3a3a3a' : '#fff',
                        padding: 20, borderRadius: 10, width: '80%',
                        alignItems: 'center'
                    }}>
                        <Text style={{
                            color: darkMode ? '#fff' : '#000',
                            fontSize: 16, marginBottom: 20, textAlign: 'center'
                        }}>
                            Edit Task
                        </Text>
                        <TextInput
                            value={editedTitle}
                            onChangeText={setEditedTitle}
                            style={styles.input}
                            placeholder="Task title"
                            placeholderTextColor={darkMode ? '#888' : '#aaa'}
                        />
                        <TouchableOpacity style={styles.popupButton} onPress={handleUpdateTask}>
                            <Text style={styles.popupButtonText}>Update</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>

        </Animated.View>
    );
}
