import React from "react";
import { View, Text, Button, StyleSheet, Dimensions } from "react-native";

const windowWidth = Dimensions.get('window').width;

export default function ProfileScreen({ navigation }) {
    return (
        <View>
            <Text style={StyleSheet.Container}>Profile Screen</Text>
        </View>
    )
}