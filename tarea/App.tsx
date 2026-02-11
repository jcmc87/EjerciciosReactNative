import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
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
    color: "green"
  },
  impar: {
    color: "red"
  }

});
