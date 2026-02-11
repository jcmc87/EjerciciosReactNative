import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import CustomInput from "./src/components/CustomInput";

export default function App() {

  // Estado usuario (nombre y edad)
  const [usuario, setUsuario] = useState({
    nombre: "",
    edad: ""
  });

  // Validar si la edad es numero
  const esNumero = (text: string) => {
    return /^\d+$/.test(text);
  };

  return (
    <View style={styles.container}>

      <Text style={styles.title}>Formulario</Text>

      {/* Input Nombre */}
      <CustomInput
        title="Nombre"
        value={usuario.nombre}
        onChangeText={(text) =>
          setUsuario({ ...usuario, nombre: text })
        }
      />

      {/* Input Edad */}
      <CustomInput
        title="Edad"
        value={usuario.edad}
        numeric={true}
        onChangeText={(text) =>
          setUsuario({ ...usuario, edad: text })
        }
      />

      {/* Mensaje usando operador ternario */}
      {usuario.nombre !== "" && usuario.edad !== "" && esNumero(usuario.edad) ? (
        <Text style={styles.success}>
          Hola {usuario.nombre} tienes {usuario.edad} años
        </Text>
      ) : (
        <Text style={styles.error}>
          ingrese un nombre y una edad válida
        </Text>
      )}

    </View>
  );
}

// Estilos
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  title: {
    fontSize: 22,
    marginBottom: 20
  },
  success: {
    marginTop: 20,
    color: "green",
    fontSize: 16
  },
  error: {
    marginTop: 20,
    color: "red",
    fontSize: 16
  }
});
