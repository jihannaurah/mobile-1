import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import Contact from './kontak';

const contacts = [
  { id: '1', judul: 'James', telpon: '081888310104', gambar: require('../assets/james.jpeg'), tanggalLahir: '31 January 2004', catatan: 'suami' },
  { id: '2', judul: 'Beaufort', telpon: '088818010431', gambar: require('../assets/beaufort.jpeg'), tanggalLahir: '2 Desember 2003', catatan:'suami'},
  { id: '3', judul: 'Gavin', telpon: '083101188804', gambar: require('../assets/Gavin.jpeg'), tanggalLahir: '1 January 2004', catatan: 'suami' },
  { id: '4', judul: 'Refal', telpon: '081831880401', gambar: require('../assets/boyfriend.jpeg'), tanggalLahir: '1 Januar2004', catatan: 'suami' },
  { id: '5', judul: 'Connie', telpon: '080131180488', gambar: require('../assets/connie.jpg'), tanggalLahir: '2 January 2004', catatan: 'suami' },
  { id: '6', judul: 'Daniel', telpon: '0818043100188', gambar: require('../assets/daniel.jpeg'), tanggalLahir: '2 January 2004', catatan: 'suami' },
  { id: '7', judul: 'Theo', telpon: '080418883101', gambar: require('../assets/theo.jpeg'), tanggalLahir: '2 January 2004', catatan: 'suami' },
  { id: '8', judul: 'Tom', telpon: '088804310118', gambar: require('../assets/tom.jpeg'), tanggalLahir: '2 January 2004', catatan: 'suami' },
];

const Home = ({ navigation }) => {
  const renderContactItem = ({ item }) => (
    <TouchableOpacity
      style={styles.contactContainer}
      onPress={() => navigation.navigate('About', { contact: item })}
    >
      <Contact
        judul={item.judul}
        telpon={item.telpon}
        gambar={item.gambar}
      />
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={contacts}
        keyExtractor={item => item.id}
        renderItem={renderContactItem}
        ListHeaderComponent={<Text style={styles.header}>Daftar Teman</Text>}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 10
  },
  contactContainer: {
    paddingHorizontal: 10,
    marginBottom: 10,
  },
});

export default Home;
