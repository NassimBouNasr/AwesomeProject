import React from "react";
import { View, Button } from "react-native";
import { TextInput } from "@react-native-material/core";
import { Formik } from "formik";
import * as yup from "yup";

const reviewSchema = yup.object({
    firstName: yup
        .string()
        .required()
        .matches(
            /^([A-Za-z\u00C0-\u00D6\u00D8-\u00f6\u00f8-\u00ff\s]*)$/gi,
            "Name can only contain Latin letters."
        )
        .matches(/^\s*[\S]+(\s[\S]+)+\s*$/gms, "Please enter your full name."),
    lastName: yup
        .string()
        .required()
        .matches(
            /^([A-Za-z\u00C0-\u00D6\u00D8-\u00f6\u00f8-\u00ff\s]*)$/gi,
            "Name can only contain Latin letters."
        )
        .matches(/^\s*[\S]+(\s[\S]+)+\s*$/gms, "Please enter your full name."),
    password: yup.string().required().min(8),
    email: yup.string().required().email(),
});

export default function Form() {
    return (
        <View>
            <Formik
                initialValues={{
                    firstName: "",
                    lastName: "",
                    password: "",
                    email: "",
                }}
                onSubmit={(values, actions) => {
                    actions.resetForm();
                }}
                validationSchema={reviewSchema}
            >
                {(formikProps) => (
                    <View>
                        <TextInput
                            placeholder="First name"
                            onChangeText={formikProps.handleChange("firstName")}
                            value={formikProps.values.firstName}
                            label="First name"
                            variant="standard"
                            style={{ marginBottom: 20 }}
                        />

                        <TextInput
                            placeholder="Last name"
                            onChangeText={formikProps.handleChange("lastName")}
                            value={formikProps.values.lastName}
                            label="Last name"
                            variant="standard"
                            style={{ marginBottom: 20 }}
                        />

                        <TextInput
                            placeholder="Password"
                            onChangeText={formikProps.handleChange("password")}
                            value={formikProps.values.password}
                            secureTextEntry={true}
                            label="Password"
                            variant="standard"
                            style={{ marginBottom: 20 }}
                        />

                        <TextInput
                            placeholder="Email"
                            onChangeText={formikProps.handleChange("email")}
                            value={formikProps.values.email}
                            label="Email"
                            variant="standard"
                            style={{ marginBottom: 20 }}
                        />

                        <Button
                            title="Submit"
                            onPress={formikProps.handleSubmit}
                        />
                    </View>
                )}
            </Formik>
        </View>
    );
}
