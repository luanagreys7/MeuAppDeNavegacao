import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function LoginScreen({ navigation }) {
    const [login, setLogin] = useState('');
    const [senha, setSenha] = useState('');

  const validarLogin = async () => {
    if (login === 'admin' && senha === '1234') {
        await AsyncStorage.setItem('logado', 'true');
        navigation.replace('Home'); 
    } else {
        Alert.alert('Erro', 'Login ou senha incorretos.');
    }
  };

  return (
    <View style={styles.container}>
        <Text style={styles.label}>Login: </Text>
        <TextInput style={styles.input} value={login} onChangeText={setLogin} placeholder="Digite seu login" />
        <Text style={styles.label}>Senha: </Text>
        <TextInput style={styles.input} value={senha} onChangeText={setSenha} placeholder="Digite sua senha" secureTextEntry />
        <Button 
        title="Entrar" 
        onPress={validarLogin} />
    </View>
  );
}

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', padding: 20 },
    label: { fontSize: 18, marginBottom: 5 },
    input: { borderWidth: 1, borderColor: '#ccc', padding: 10, marginBottom: 15, borderRadius: 5 }
});
