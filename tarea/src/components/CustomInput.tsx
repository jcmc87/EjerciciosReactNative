import React from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";

interface CustomInputProps {
  title: string;                 // Texto (Nombre, Edad)
  value: string;                // Valor del input
  onChangeText: (text: string) => void; // Funcion para cambiar el valor
  numeric?: boolean;            // Si es true, solo acepta numeros
  placeholder?: string;        // Texto placeholder del input
}

export default function CustomInput({
  title: label,
  value,
  onChangeText,
  numeric = false,
  placeholder = "",
}: CustomInputProps) {

  // Funcion para validar si es numero
  const esNumero = (text: string) => {
    return /^\d+$/.test(text);
  };

  return (
    <View style={styles.container}>
      {/* Label */}
      <Text style={styles.label}>{label}</Text>

      {/* Input */}
      <TextInput
     
        style={styles.input}
        value={value}
        placeholder={placeholder}
        keyboardType={numeric ? "numeric" : "default"} // operador ternario
        onChangeText={(text) => {
          // Validación si es numerico
          if (numeric) {
            if (esNumero(text) || text === "") {
              onChangeText(text);
            }
          } else {
            onChangeText(text);
          }
        }}
      />

      {/* Mensaje condicionado con operador ternario */}
      {numeric ? (
        !esNumero(value) && value !== "" ? (
          <Text style={styles.error}>Solo se permiten numeros</Text>
        ) : null
      ) : null}
    </View>
  );
}

// Estilos
const styles = StyleSheet.create({
  container: {
    width: "80%",
    marginBottom: 15,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    borderRadius: 5,
  },
  error: {
    color: "red",
    marginTop: 5,
  },
});
