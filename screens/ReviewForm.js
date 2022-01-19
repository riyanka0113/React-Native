import { Formik } from "formik";
import React from "react";
import { Button, Text, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { globalStyles } from "../styles/global";
import * as yup from "yup";
import { min } from "react-native-reanimated";

let schema = yup.object().shape({
  title: yup.string().required().min(4),
  rating: yup
    .string()
    .required()
    .test("is-num-1-5", "Rating must be number 1-5", (val) => {
      return parseInt(val) > 1 && parseInt(val) < 6;
    }),
  body: yup.string().required().min(8),
});

const ReviewForm = ({ addReview }) => {
  return (
    <View style={globalStyles.container}>
      <Formik
        initialValues={{ title: "", body: "", rating: "" }}
        validationSchema={schema}
        onSubmit={(values, action) => {
          values.rating = parseInt(values.rating);
          console.log(values, "val");
          addReview(values);
          action.resetForm();
        }}
      >
        {(props) => (
          <View>
            <TextInput
              style={globalStyles.input}
              placeholder="Review Title"
              value={props.values.title}
              onChange={props.handleChange("title")}
              onBlur={props.handleBlur("title")}
            />
            <Text style={globalStyles.error}>{props.touched.title && props.errors.title}</Text>

            <TextInput
              multiline
              style={globalStyles.input}
              placeholder="Review Body"
              onChange={props.handleChange("body")}
              onBlur={props.handleBlur("body")}
              value={props.values.body}
            />
            <Text style={globalStyles.error}>{props.touched.body && props.errors.body}</Text>

            <TextInput
              style={globalStyles.input}
              placeholder="Review (1-5)"
              onChange={props.handleChange("rating")}
              onBlur={props.handleBlur("rating")}
              value={props.values.rating}
              keyboardType="number-pad"
            />
            <Text style={globalStyles.error}>{props.touched.rating && props.errors.rating}</Text>

            <Button
              title="submit"
              color="#f01d71"
              // disabled={!!props.errors}
              onPress={props.handleSubmit}
              style={globalStyles.button}
            />
          </View>
        )}
      </Formik>
    </View>
  );
};

export default ReviewForm;
