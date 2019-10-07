import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  Text,
  TouchableOpacity,
  AsyncStorage,
  Image,
  StyleSheet,
  ScrollView
} from 'react-native';
import logo from '../assets/logo.png';

import SpotList from '../components/SpotList';

export default function List({navigation}) {
  const [techs, setTechs] = useState([]);

  useEffect(() => {
    AsyncStorage.getItem('techs').then(storagedTechs => {
      const techsArr = storagedTechs.split(',').map(t => t.trim());
      setTechs(techsArr);
    });
  }, []);

  async function handleLogout() {
    await AsyncStorage.removeItem('user');
    navigation.navigate('Login');
  }

  return (
    <SafeAreaView style={styles.container}>
      <Image source={logo} style={styles.logo}></Image>
      <TouchableOpacity style={styles.button} onPress={() => handleLogout()}>
        <Text style={styles.buttonTxt}>Logout</Text>
      </TouchableOpacity>
      <ScrollView>
        {techs.map(tech => (
          <SpotList key={tech} tech={tech} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  logo: {
    height: 32,
    resizeMode: 'contain',
    alignSelf: 'center',
    marginTop: 10
  },
  button: {
    height: 30,
    backgroundColor: '#f05a5b',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 2,
    marginTop: 13,
    width: '25%',
    marginLeft: 13,
    marginBottom: 5
  },
  buttonTxt: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 15
  }
});
