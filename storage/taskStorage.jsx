import AsyncStorage from '@react-native-async-storage/async-storage';

// Function to save tasks to Async Storage
export const saveTasksToStorage = async (tasks) => {
    try {
        const jsonValue = JSON.stringify(tasks);
        await AsyncStorage.setItem('@tasks', jsonValue);
    } catch (e) {
        console.error('Error saving tasks to storage:', e);
    }
};

// Function to load tasks from Async Storage
export const loadTasksFromStorage = async () => {
    try {
        const jsonValue = await AsyncStorage.getItem('@tasks');
        return jsonValue != null ? JSON.parse(jsonValue) : [];
    } catch (e) {
        console.error('Error loading tasks from storage:', e);
        return [];
    }
};
