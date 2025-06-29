import { StyleSheet } from 'react-native';

export default function getStyles(darkMode) {
    return StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: darkMode ? '#2c2c2c' : '#f0f4f8', // dark grey for dark mode
            paddingHorizontal: 20,
            paddingTop: 30
        },
        title: {
            fontSize: 28,
            fontWeight: 'bold',
            color: darkMode ? '#ffffff' : '#0b3d91',
            marginBottom: 15
        },
        quote: {
            fontSize: 15,
            fontStyle: 'italic',
            color: darkMode ? '#ddd' : '#333',
            marginBottom: 20,
            backgroundColor: darkMode ? '#3a3a3a' : '#fff',
            padding: 12,
            borderRadius: 8
        },
        input: {
            borderWidth: 1,
            borderColor: darkMode ? '#555' : '#bbb',
            borderRadius: 10,
            padding: 14,
            backgroundColor: darkMode ? '#3a3a3a' : '#fff',
            marginBottom: 15,
            color: darkMode ? '#fff' : '#000',
            fontSize: 16
        },
        buttonContainer: {
            marginVertical: 6,
            borderRadius: 8,
            overflow: 'hidden'
        },
        card: {
            backgroundColor: darkMode ? '#3a3a3a' : '#fff',
            padding: 15,
            marginVertical: 8,
            borderRadius: 12
        },
        taskText: {
            fontSize: 17,
            color: darkMode ? '#FBFBFB' : '#0b3d91',
            marginBottom: 5
        },
        centered: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center'
        },
        settingsText: {
            fontSize: 18,
            color: darkMode ? '#fff' : '#333'
        },
        list: {
            paddingBottom: 20
        }
        
    });
}
