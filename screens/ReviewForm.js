import { Formik } from "formik";
import React from "react";
import { Button, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { globalStyles } from "../styles/global";

const ReviewForm = () => {
  return (
    <View style={globalStyles.container}>
      <Formik
        initialValues={{ title: "", body: "", review: "" }}
        onSubmit={(values) => {
          console.log(values, "val");
        }}
      >
        {(props) => (
          <View>
            <TextInput
              style={globalStyles.input}
              placeholder="Review Title"
              value={props.values.title}
              onChange={props.handleChange('title')}
            />
            <TextInput
              multiline
              style={globalStyles.input}
              placeholder="Review Body"
              onChange={props.handleChange("body")}
              value={props.values.body}
            />
            <TextInput
              style={globalStyles.input}
              placeholder="Review (1-5)"
              onChange={props.handleChange("review")}
              value={props.values.review}
              keyboardType="numeric"
            />
            <Button title="submit" color="maroon" onPress={props.handleSubmit} />
          </View>
        )}
      </Formik>
    </View>
  );
};

export default ReviewForm;
