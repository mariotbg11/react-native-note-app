import React from "react";
import { TextInput, Text, StyleSheet, View } from "react-native";

const CustomTextInput = ({
  text,
  onChange,
  label,
  multiline,
  numberOfLines,
}) => {
  const styles = StyleSheet.create({
    textInputWrapper: {
      marginTop: 20,
    },
    input: {
      borderWidth: 1,
      borderColor: "1px solid rgba(255, 255, 255, 0.3)",
      padding: 10,
      borderRadius: 5,
      color: "#fff",
      backgroundColor: "rgba(255, 255, 255, 0.2)",
    },
    label: {
      color: "#fff",
    },
  });

  return (
    <View style={styles.textInputWrapper}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        multiline={multiline}
        numberOfLines={numberOfLines}
        style={styles.input}
        placeholder={label}
        placeholderTextColor={"#B9D2D2"}
        onChangeText={onChange}
        defaultValue={text}
      />
    </View>
  );
};

export default CustomTextInput;
