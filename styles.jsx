import { StyleSheet } from 'react-native';

export default function getStyles(darkMode) {
    return StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: darkMode ? '#2c2c2c' : '#f0f4f8', 
            paddingHorizontal: 20,
            paddingTop: 30
        },
        title: {
            fontSize: 28,
            fontWeight: 'bold',
            color: darkMode ? '#ffffff' : '#0b3d91',
            marginBottom: 15
        },
        button: {
            flex: 1,
            paddingVertical: 12,
            marginHorizontal: 5,
            borderRadius: 10,
            backgroundColor: '#0b3d91', 
            alignItems: 'center',
            elevation: 2 
        },
        buttonText: {
            color: '#fff',
            fontSize: 16,
            fontWeight: 'bold'
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
            borderColor: '#bbb',
            borderRadius: 10,
            padding: 12,
            width: '100%', 
            backgroundColor: '#fff',
            marginBottom: 15,
            fontSize: 16,
            color: '#000'
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
        popupButton: {
            paddingVertical: 10,
            paddingHorizontal: 20,
            borderRadius: 8,
            backgroundColor: '#0b3d91',
            alignItems: 'center',
            marginTop: 10
        },
        popupButtonText: {
            color: '#fff',
            fontSize: 16,
            fontWeight: 'bold'
        },
        list: {
            paddingBottom: 20
        }
        
    });
}
