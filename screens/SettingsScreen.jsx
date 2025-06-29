import React, { useContext } from 'react';
import { View, Text } from 'react-native';
import getStyles from '../styles';
import { ThemeContext } from '../contexts/ThemeContext';

export default function SettingsScreen() {
    const { darkMode, toggleTheme } = useContext(ThemeContext);
    const styles = getStyles(darkMode);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Settings</Text>
            <Text style={styles.settingsText}>Dark Mode is {darkMode ? "ON" : "OFF"}</Text>
            <View style={styles.buttonContainer}>
                <Text style={styles.settingsText} onPress={toggleTheme} styles={{ color: darkMode ? '#0af' : '#00f', marginTop: 20 }}>
                    {darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
                </Text>
            </View>
        </View>
    );
}
