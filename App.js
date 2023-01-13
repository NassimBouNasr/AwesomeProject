import { StyleSheet, Text, View, Button } from "react-native";
import Form from "./screens/Form";
import { useState } from "react";

export default function App() {
    return (
        <View style={styles.container}>
            <Form />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
});
