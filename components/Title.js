import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Title = ({ title }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{title}</Text>
        </View>
    );
};

export default Title;

const styles = StyleSheet.create({
    container: {
        paddingVertical: 16,
        alignItems: "center",
    },
    text: {
        fontSize: 36,
        fontWeight: "600",
    },
});
