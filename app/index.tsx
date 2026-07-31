import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';
import { useState } from 'react';
import { router } from 'expo-router';

export default function Home() {

  const [email, setEmail] = useState('')
  const [pass, setPass] = useState('')

  const go = () => {
    router.push('/(tabs)')
  }

  return (
      <View style={s.body}>
        <View style={s.wrap}>
          <Text style={s.t}>LOGIN</Text>
          <Text style={s.t}>Email</Text>
          <TextInput style={s.input} onChangeText={setEmail} value={email} placeholder='Insira seu Email'></TextInput>
          <Text style={s.t}>Senha</Text>
          <TextInput style={s.input} onChangeText={setPass} value={pass} placeholder='Insira sua senha'></TextInput>

          <View>
            <TouchableOpacity style={s.button} onPress={go}></TouchableOpacity>
            <Text style={s.btnText}>ENTRAR</Text>
          </View>
        </View>
      </View>
  );
}

const s = StyleSheet.create({
  body:{
    backgroundColor: '#444444',
    flex: 1
  },
  wrap:{
    gap: 10,
    backgroundColor: '#634564',
    height: 200,
    alignSelf: 'center',
    margin: 19
  },
  t:{

  },
  input:{

  },
  button:{

  },
  btnText:{

  },
});