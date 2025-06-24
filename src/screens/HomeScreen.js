import React from 'react';
import { View, Text, StyleSheet, Button, Alert, Dimensions } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const windowWidth = Dimensions.get('window').width;

export default function HomeScreen({ navigation }) {

    const logout = async () => {
        await AsyncStorage.removeItem('logado');
        Alert.alert('Você saiu', 'Login encerrado com sucesso.');
        navigation.replace('Login');
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Home Screen</Text>

            <View style={styles.buttonContainer}>
                <Button title="Go to Details" onPress={() => navigation.navigate('Details')}/>
            </View>

            <View style={styles.buttonContainer}>
                <Button title="Go to Profile" onPress={() => navigation.navigate('Profile')}/>
            </View>

            <View style={styles.buttonContainer}>
                <Button title="Sair" onPress={logout} />
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