import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Title from "../components/Title";

const Home = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Title title="Quizzer" />
            <View style={styles.bannerContainer}>
                <Image
                    source={{
                        uri: "https://cdn3d.iconscout.com/3d/premium/thumb/exam-sheet-4147337-3436380@0.png",
                    }}
                    style={styles.banner}
                    resizeMode="contain"
                />
            </View>
            <TouchableOpacity
                onPress={() => navigation.navigate("Quiz")}
                style={styles.button}
            >
                <Text style={styles.buttonText}>Start</Text>
            </TouchableOpacity>
        </View>
    );
};

export default Home;

const styles = StyleSheet.create({
    container: {
        paddingTop: 40,
        paddingHorizontal: 16,
        height: "100%",
    },
    bannerContainer: {
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
    },
    banner: {
        height: 300,
        width: 300,
    },
    button: {
        padding: 16,
        backgroundColor: "#0077B6",
        width: "100%",
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
