import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import CustomInput from "./src/components/CustomInput";
import CustomButton from "./src/components/CustomButtons";

export default function App() {

  // Ejercicio 1-Estado usuario (nombre y edad)
  const [usuario, setUsuario] = useState({
    nombre: "",
    edad: ""
  });

  // Ejercicio 1 - Validar si la edad es numero
  const esNumero = (text: string) => {
    return /^\d+$/.test(text);
  };

  // Ejercicio 2 - Contador
  const [contador, setContador] = useState(0);

  // Ejercicio 3 - Visibilidad
  const [mostrarDetalles, setMostrarDetalles] = useState(false);
 
  return (
    <View style={styles.container}>

      <Text style={styles.title}>Formulario</Text>

      {/* Input Nombre */}
      <CustomInput
        placeholder="Nombre"
        title="Nombre"
        value={usuario.nombre}
        onChangeText={(text) =>
          setUsuario({ ...usuario, nombre: text })
        }
      />

      {/* Input Edad */}
      <CustomInput
        placeholder="Edad"
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
          ingrese un nombre y una edad valida
        </Text>
      )}

      {/* Ejercicio 2 -Contador */}
      <Text style={styles.counter}>Contador: {contador}</Text>

      {/*Mensaje si es negativo*/}
      {contador < 0 && (
        <Text style={styles.warning}>El contador no puede ser negativo</Text>
      )}

      {/* Par o impar */}
      <Text
        style={[
          styles.parImpar,
          contador % 2 === 0 ? styles.par : styles.impar
        ]}
      >
        {contador % 2 === 0 ? "Par" : "Impar"}
      </Text>
      {/* Botones  */}
      <CustomButton
        title="Incrementar"
        onClick={() => setContador(contador + 1)}
      />
      <CustomButton
        title="Disminuir"
        onClick={() => setContador(contador - 1)}
        variant="secondary"
      />

       {/* Ejercicio 3  */}
      <Text style={styles.title}>Detalles</Text>

      <CustomButton
        title={mostrarDetalles ? "Ocultar detalles" : "Mostrar detalles"}
        onClick={() => setMostrarDetalles(!mostrarDetalles)}
      />

      <Ionicons
        name={mostrarDetalles ? "eye-off" : "eye"}
        size={40}
        color={mostrarDetalles ? "purple" : "blue"}
      />
      {mostrarDetalles ? (
        <Text style={styles.success}>Detalles del usuario...</Text>
      ) : (
        <Text style={styles.error}>Detalles ocultos</Text>
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
  },
  counter: {
    fontSize: 32,
    marginTop: 10
  },
  warning: {
    color: "red",
    marginTop: 5
  },
  parImpar: {
    fontSize: 18,
    marginTop: 10
  },
  par: {
    color: "blue"
  },
  impar: {
    color: "purple"
  }

});
