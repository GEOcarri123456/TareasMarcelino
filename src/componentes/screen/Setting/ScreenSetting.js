import { StyleSheet, Text, View,Alert } from 'react-native'
import React from 'react'
import { Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { getAuth, signOut } from "firebase/auth"

const ScreenSetting = () => {
  const navegacion = useNavigation()
  const cerrarsesion =()=>{
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        Alert.alert('Aviso','Sesión cerrada correctamente')
        navegacion.navigate('Login');
      })
      .catch((error) => {
        console.error('Error cerrando la sesión: ', error);
      });
  }
  return (
    <View>
      <Text style={{marginTop:20, alignContent:"center"}}>Autor: Geovani de jesus carrillo Morales </Text>
      <Button style={{marginTop:20, alignContent:"center"}} icon="logout" mode="contained" onPress={() => cerrarsesion()}>
        Cerrar sesión
      </Button>
    </View>
  )
}

export default ScreenSetting

const styles = StyleSheet.create({})
