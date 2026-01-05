import React, { useState } from "react";
import { TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { ThemedView } from "@/components/themed-view";
import { ThemedText } from "@/components/themed-text";

export default function CreateAccountScreen() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [agreed, setAgreed] = useState(false);

  return (
    <ThemedView style={styles.container}>
      
      {/* Status bar */}
      <ThemedView style={styles.statusBar}>
        <ThemedText type="subtitle">9:41</ThemedText>
        <ThemedText type="subtitle">📶 🔋</ThemedText>
      </ThemedView>

      {/* Back button */}
      <TouchableOpacity style={styles.backBtn}>
        <ThemedText type="subtitle">←</ThemedText>
      </TouchableOpacity>

      {/* Header */}
      <ThemedView style={styles.header}>
        <ThemedText type="title">Create Account</ThemedText>
        <ThemedText type="subtitle">Sign up to save your preferences</ThemedText>
      </ThemedView>

      {/* Input fields */}
      <ThemedView style={styles.inputGroup}>
        <ThemedText type="subtitle">Full Name</ThemedText>
        <TextInput
          style={styles.input}
          placeholder="John Doe"
          value={fullName}
          onChangeText={setFullName}
        />
      </ThemedView>

      <ThemedView style={styles.inputGroup}>
        <ThemedText type="subtitle">Email Address</ThemedText>
        <TextInput
          style={styles.input}
          placeholder="john@example.com"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />
      </ThemedView>

      <ThemedView style={styles.inputGroup}>
        <ThemedText type="subtitle">Password</ThemedText>
        <ThemedView style={styles.passwordWrapper}>
          <TextInput
            style={[styles.input, { flex: 1 }]}
            placeholder="••••••••"
            secureTextEntry={!showPassword}
            value={password}
            onChangeText={setPassword}
          />
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <ThemedText type="subtitle" style={styles.toggleIcon}>
              {showPassword ? "🙈" : "👁️"}
            </ThemedText>
          </TouchableOpacity>
        </ThemedView>
      </ThemedView>

      {/* Checkbox */}
      <TouchableOpacity
        style={styles.checkboxGroup}
        onPress={() => setAgreed(!agreed)}
      >
        <ThemedView style={[styles.checkbox, agreed && styles.checkboxChecked]} />
        <ThemedText type="subtitle" style={styles.checkboxLabel}>
          I agree to <ThemedText type="link">Terms</ThemedText> & <ThemedText type="link">Privacy Policy</ThemedText>
        </ThemedText>
      </TouchableOpacity>

      {/* Primary Button */}
      <TouchableOpacity style={styles.btnPrimary}>
        <ThemedText type="title" style={styles.btnText}>Create Account</ThemedText>
      </TouchableOpacity>

      {/* Divider */}
      <ThemedText type="subtitle" style={styles.divider}>OR</ThemedText>

      {/* Social Login */}
      <ThemedView style={styles.socialLogin}>
        <TouchableOpacity style={styles.socialBtn}><ThemedText type="subtitle">🍎</ThemedText></TouchableOpacity>
        <TouchableOpacity style={styles.socialBtn}><ThemedText type="subtitle">G</ThemedText></TouchableOpacity>
        <TouchableOpacity style={styles.socialBtn}><ThemedText type="subtitle">f</ThemedText></TouchableOpacity>
      </ThemedView>

      {/* Bottom Text */}
      <ThemedText type="subtitle" style={styles.bottomText}>
        Already have an account? <ThemedText type="link">Sign In</ThemedText>
      </ThemedText>

    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: "center" },

  statusBar: { flexDirection: "row", justifyContent: "space-between", marginBottom: 20 },

  backBtn: { marginBottom: 10 },

  header: { marginBottom: 20 },

  inputGroup: { marginBottom: 15 },

  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 10,
    marginTop: 5,
  },

  passwordWrapper: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    paddingHorizontal: 10,
    marginTop: 5,
  },

  toggleIcon: { fontSize: 18, marginLeft: 10 },

  checkboxGroup: { flexDirection: "row", alignItems: "center", marginBottom: 20 },
  checkbox: { width: 20, height: 20, borderWidth: 1, borderColor: "#ccc", marginRight: 10 },
  checkboxChecked: { backgroundColor: "#007AFF" },
  checkboxLabel: { flex: 1 },

  btnPrimary: { backgroundColor: "#007AFF", paddingVertical: 15, borderRadius: 8, alignItems: "center", marginBottom: 15 },
  btnText: { color: "#fff", fontWeight: "bold" },

  divider: { textAlign: "center", marginVertical: 10 },

  socialLogin: { flexDirection: "row", justifyContent: "space-around", marginBottom: 20 },
  socialBtn: { padding: 10, borderWidth: 1, borderRadius: 8 },

  bottomText: { textAlign: "center" },
});
