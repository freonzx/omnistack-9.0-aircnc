import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  Text,
  AsyncStorage,
  Image,
  StyleSheet,
  ScrollView
} from 'react-native';
import logo from '../assets/logo.png';

import SpotList from '../components/SpotList';

export default function List() {
  const [techs, setTechs] = useState([]);

  useEffect(() => {
    AsyncStorage.getItem('techs').then(storagedTechs => {
      const techsArr = storagedTechs.split(',').map(t => t.trim());
      setTechs(techsArr);
    });
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Image source={logo} style={styles.logo}></Image>
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
  }
});
