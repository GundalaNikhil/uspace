import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  Animated,
} from "react-native";
import { auth, database } from "../../FirebaseDB/firebaseConfig";
import { useForm, Controller } from "react-hook-form";
import { emailAddressValidator } from "../../Helpers/validators/UserInputValidator";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { styles } from "./SignInStyles/SigninStyles";

const Signin = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm({
    mode: "onChange",
  });

  const [focusedInput, setFocusedInput] = useState(null);
  const submitAnim = useState(new Animated.Value(1))[0];

  const password = watch("password");

  const onSubmit = async (data) => {
    try {
      const userCreds = await createUserWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );
      const user = userCreds.user;
      const userRef = doc(database, "users", user.uid);
      await setDoc(userRef, {
        displayName: data.firstname + " " + data.lastname,
        email: data.email,
        uid: user.uid,
        phoneNumber: data.phoneNumber,
      });
      Alert.alert("Success", "User created successfully!");
    } catch (error) {
      Alert.alert("Error", error.message);
    }
  };

  const animateSubmit = () => {
    Animated.sequence([
      Animated.timing(submitAnim, {
        toValue: 0.95,
        duration: 100,
        useNativeDriver: true,
      }),
      Animated.timing(submitAnim, {
        toValue: 1,
        duration: 100,
        useNativeDriver: true,
      }),
    ]).start();
  };

  const renderInput = (name, placeholder, secureTextEntry = false) => (
    <View style={styles.inputContainer}>
      <Controller
        control={control}
        rules={{
          required: `${placeholder} is required`,
          ...(name === "email" && {
            validate: (value) =>
              emailAddressValidator(value) || "Invalid email address",
          }),
          ...(name === "confirmPassword" && {
            validate: (value) => value === password || "Passwords do not match",
          }),
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={[styles.input, focusedInput === name && styles.inputFocused]}
            placeholder={placeholder}
            onBlur={() => {
              onBlur();
              setFocusedInput(null);
            }}
            onFocus={() => setFocusedInput(name)}
            onChangeText={onChange}
            value={value}
            secureTextEntry={secureTextEntry}
          />
        )}
        name={name}
      />
      {errors[name] && (
        <Text style={styles.errorText}>{errors[name].message}</Text>
      )}
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign Up</Text>

      {renderInput("firstname", "First Name")}
      {renderInput("lastname", "Last Name")}
      {renderInput("email", "Email Address")}
      {renderInput("phoneNumber", "Phone Number")}
      {renderInput("password", "Password", true)}
      {renderInput("confirmPassword", "Confirm Password", true)}

      <TouchableOpacity
        onPress={() => {
          animateSubmit();
          handleSubmit(onSubmit)();
        }}
      >
        <Animated.View
          style={[styles.submitButton, { transform: [{ scale: submitAnim }] }]}
        >
          <Text style={styles.submitButtonText}>Submit</Text>
        </Animated.View>
      </TouchableOpacity>
    </View>
  );
};

export default Signin;
