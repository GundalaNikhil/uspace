import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    // flex: 1,
    width: "100%",
    padding: 20,
    backgroundColor: "#f0f8ff",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 20,
    textAlign: "center",
  },
  inputContainer: {
    marginBottom: 15,
  },
  input: {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
  },
  inputFocused: {
    borderColor: "#4a90e2",
    shadowColor: "#4a90e2",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 3,
  },
  errorText: {
    color: "#ff6b6b",
    fontSize: 12,
    marginTop: 5,
  },
  submitButton: {
    backgroundColor: "#4a90e2",
    borderRadius: 8,
    padding: 15,
    alignItems: "center",
    marginTop: 20,
  },
  submitButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});
