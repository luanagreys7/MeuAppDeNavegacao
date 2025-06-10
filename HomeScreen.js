import React from 'react';
import { View, Text, StyleSheet, Dimensions, Button } from 'react-native';

const windowWidth = Dimensions.get('window').width;

export default function HomeScreen({ navigation }) {
    return (
        <View style={StyleSheet.container}>
            <Text style={StyleSheet.title}>Home Screen</Text>
            <View style={StyleSheet.buttonContainer}>
                <Button
                    title="Go to Details"
                    onPress={() => navigation.navigate('Details')}
                />
            </View>
            <View style={StyleSheet.buttonContainer}>
                <Button
                title="Go to Profile"
                onPress={() => navigation.navigate('Profile')}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f0f8ff', 
    },
    title: {
        fontSize: 23,
        marginBottom: 20,
    },
    buttonContainer: {
        backgroundColor: '#add8e6',
        margin: 10,
        width: windowWidth * 0.5, 
        borderRadius: 5,
    },
});