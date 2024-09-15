import { View, Text, TextInput, Button } from "react-native";
import React from "react";
import { useForm, Controller } from "react-hook-form";
import { emailAddressValidator } from "../../Helpers/validators/UserInputValidator";

const Signin = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm({
    mode: "onChange",
  });

  const password = watch("password");

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <View>
      <Text>Signin</Text>

      <Controller
        control={control}
        rules={{ required: "First name is required" }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            placeholder="First Name"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="firstname"
      />
      {errors.firstname && <Text>{errors.firstname.message}</Text>}

      <Controller
        control={control}
        rules={{ required: "Last name is required" }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            placeholder="Last Name"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="lastname"
      />
      {errors.lastname && <Text>{errors.lastname.message}</Text>}

      <Controller
        control={control}
        rules={{
          required: "Email is required",
          validate: (value) =>
            emailAddressValidator(value) || "Invalid email address",
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            placeholder="Email Address"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="email"
      />
      {errors.email && <Text>{errors.email.message}</Text>}

      <Controller
        control={control}
        rules={{ required: "Phone number is required" }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            placeholder="Phone Number"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="phoneNumber"
      />
      {errors.phonenumber && <Text>{errors.phonenumber.message}</Text>}

      <Controller
        control={control}
        rules={{ required: "Password is required" }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            placeholder="Password"
            secureTextEntry
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="password"
      />
      {errors.password && <Text>{errors.password.message}</Text>}

      <Controller
        control={control}
        rules={{
          required: "Confirm Password is required",
          validate: (value) => value === password || "Passwords do not match",
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            placeholder="Confirm Password"
            secureTextEntry
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="confirmPassword"
      />
      {errors.confirmPassword && <Text>{errors.confirmPassword.message}</Text>}

      <Button onPress={handleSubmit(onSubmit)} title="Submit" />
    </View>
  );
};

export default Signin;
