import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Title from "../components/Title";

const Result = ({ route, navigation }) => {


    return (
        <View style={styles.container}>
            <Title title="Result" />
            <View style={styles.bannerContainer}>
                <Image
                    source={{
                        uri: "https://cdn3d.iconscout.com/3d/premium/thumb/exam-sheet-4147337-3436380@0.png",
                    }}
                    style={styles.banner}
                    resizeMode="contain"
                />
            </View>
            <Text style={styles.score}>score: {route.params.score}</Text>
            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate("Home")}
            >
                <Text style={styles.buttonText}>Home</Text>
            </TouchableOpacity>
        </View>
    );
};

export default Result;

const styles = StyleSheet.create({
    container: {
        paddingTop: 40,
        paddingHorizontal: 16,
        height: "100%",
        alignItems: "center",
    },
    bannerContainer: {
        justifyContent: "center",
        alignItems: "center",
    },
    banner: {
        height: 300,
        width: 300,
    },
    score: {
        fontSize: 24,
        fontWeight: "500",
        marginVertical: 16
    },
    button: {
        paddingVertical: 12,
        paddingHorizontal: 20,
        backgroundColor: "#0077B6",
        borderRadius: 60,
        alignItems: "center",
        marginBottom: 30,
    },
    buttonText: {
        fontWeight: "600",
        fontSize: 24,
        color: "white",
    },
});
