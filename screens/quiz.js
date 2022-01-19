import axios from "axios";
import React, { useEffect, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const Quiz = ({ navigation }) => {
    const [question, setQuestion] = useState();
    const [quesNo, setQuesNo] = useState(0);
    const [score, setScore] = useState(0);
    const [selectedOption, setSelectedOption] = useState();

    const getQuiz = async () => {
        const res = await axios.get(
            "https://opentdb.com/api.php?amount=10&difficulty=medium&type=multiple"
        );
        // console.log(res.data.results);
        setQuestion(res.data.results);
    };

    useEffect(() => {
        getQuiz();
    }, []);

    return (
        <View style={styles.container}>
            {question && (
                <>
                    <View style={styles.question}>
                        <Text style={{ fontSize: 28 }}>
                            Q.{quesNo + 1} {question[quesNo].question}
                        </Text>
                    </View>
                    <View style={styles.option}>
                        {question[quesNo].incorrect_answers.map((option, index) => (
                            <TouchableOpacity
                                style={[
                                    styles.optionButton,
                                    selectedOption === option
                                        ? { backgroundColor: "#023e8a" }
                                        : { backgroundColor: "#0096C7" },
                                ]}
                                key={index}
                                onPress={() => setSelectedOption(option)}
                            >
                                <Text style={styles.optionText}>{option}</Text>
                            </TouchableOpacity>
                        ))}
                        <TouchableOpacity
                            style={[
                                styles.optionButton,
                                selectedOption === question[quesNo].correct_answer
                                    ? { backgroundColor: "#023e8a" }
                                    : { backgroundColor: "#0096C7" },
                            ]}
                            onPress={() => {
                                setSelectedOption(question[quesNo].correct_answer);
                                setScore((old) => old + 1);
                            }}
                        >
                            <Text style={styles.optionText}>
                                {question[quesNo].correct_answer}
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <View
                        style={[
                            styles.buttons,
                            quesNo === 0 || quesNo === 9
                                ? { justifyContent: "flex-end" }
                                : { justifyContent: "space-between" },
                        ]}
                    >
                        {quesNo !== 0 && quesNo !== 9 && (
                            <TouchableOpacity
                                style={styles.button}
                                onPress={() => setQuesNo((old) => old + 1)}
                            >
                                <Text style={styles.buttonText}>Skip</Text>
                            </TouchableOpacity>
                        )}
                        {quesNo !== 9 ? (
                            <TouchableOpacity
                                style={styles.button}
                                onPress={() => setQuesNo((old) => old + 1)}
                            >
                                <Text style={styles.buttonText}>Next</Text>
                            </TouchableOpacity>
                        ) : (
                            <TouchableOpacity
                                style={styles.button}
                                onPress={() => {
                                    console.log(score, "score in quiz");
                                    navigation.navigate("Result", { score: score });
                                }}
                            >
                                <Text style={styles.buttonText}>End</Text>
                            </TouchableOpacity>
                        )}
                    </View>
                </>
            )}
        </View>
    );
};

export default Quiz;

const styles = StyleSheet.create({
    container: {
        paddingTop: 40,
        paddingHorizontal: 16,
        height: "100%",
    },
    question: {
        marginVertical: 16,
    },
    option: {
        marginVertical: 16,
        flex: 1,
    },
    optionButton: {
        padding: 12,
        marginVertical: 16,
        borderRadius: 12,
    },
    optionText: {
        fontSize: 16,
        color: "white",
        fontWeight: "500",
    },
    buttons: {
        marginBottom: 12,
        paddingVertical: 16,
        flexDirection: "row",
    },

    button: {
        padding: 12,
        paddingHorizontal: 16,
        backgroundColor: "#0077B6",
        borderRadius: 60,
        textAlign: "center",
        marginBottom: 30,
    },
    buttonText: {
        fontWeight: "600",
        fontSize: 18,
        color: "white",
    },
});
