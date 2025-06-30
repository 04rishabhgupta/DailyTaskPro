import React, { useContext } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import getStyles from '../styles';
import { ThemeContext } from '../contexts/ThemeContext';

export default function SettingsScreen() {
    const { darkMode, toggleTheme } = useContext(ThemeContext);
    const styles = getStyles(darkMode);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Settings</Text>
            <Text style={styles.settingsText}>Dark Mode is {darkMode ? "ON" : "OFF"}</Text>

            <TouchableOpacity style={styles.button} onPress={toggleTheme}>
                <Text style={styles.buttonText}>
                    {darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
                </Text>
            </TouchableOpacity>
        </View>
    );
}
