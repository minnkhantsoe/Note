import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, TextInput, View } from 'react-native';
import { useState } from 'react';
import Checkbox from 'expo-checkbox';
import { EvilIcons } from '@expo/vector-icons';





export default function App() {

  const [toggle, setToggle] = useState(1);
  const [toggleCheckBox, setToggleCheckBox] = useState(false)
  const [toggleCheckBox2, setToggleCheckBox2] = useState(false)
  const [toggleCheckBox3, setToggleCheckBox3] = useState(false)
  const [toggleCheckBox4, setToggleCheckBox4] = useState(false)

  function updateToggle(id) {
    return setToggle(id);
  }

  return (
    <SafeAreaView style={styles.container}>

      <View style={styles.nav}>
        <TouchableOpacity style={toggle === 1 ? { marginHorizontal: 40, borderBottomWidth: 3, borderBottomColor: '#1aa7ec', borderBottomRightRadius: 3, borderBottomLeftRadius: 3 } : { marginHorizontal: 40 }} onPress={() => updateToggle(1)}>
          <Text style={toggle === 1 ? { color: '#1aa7ec', opacity: 1, fontSize: 30 } : { color: '#000', opacity: 0.5, fontSize: 30 }}>Note</Text>
        </TouchableOpacity>

        <TouchableOpacity style={toggle === 2 ? { marginHorizontal: 40, borderBottomWidth: 3, borderBottomColor: '#1aa7ec', borderBottomRightRadius: 3, borderBottomLeftRadius: 3 } : { marginHorizontal: 40 }} onPress={() => updateToggle(2)}>
          <Text style={toggle === 2 ? { color: '#1aa7ec', opacity: 1, fontSize: 30 } : { color: '#000', opacity: 0.5, fontSize: 30 }}>ToDoList</Text>
        </TouchableOpacity>
      </View>


      <StatusBar style="auto" />



      <SafeAreaView style={toggle === 1 ? { display: 'flex' } : { display: 'none' }}>

        <TextInput style={styles.search}>
          <EvilIcons name="search" size={40} style={styles.search_icon} />
        </TextInput>

        <View style={[styles.content, styles.box1]}>
          <Text style={styles.text}>Note Title</Text>
          <Text style={styles.text}>Note Text..</Text>
        </View>

        <View style={[styles.content, styles.box2]}>
          <Text style={styles.text}>Note Title</Text>
          <Text style={styles.text}>Note Text..</Text>
        </View>

        <View style={[styles.content, styles.box3]}>
          <Text style={styles.text}>Note Title</Text>
          <Text style={styles.text}>Note Text..</Text>
        </View>

        <View style={[styles.content, styles.box4]}>
          <Text style={styles.text}>Note Title</Text>
          <Text style={styles.text}>Note Text..</Text>
        </View>


        <EvilIcons name="plus" size={70} color="#1aa7ec" style={styles.plus} />






      </SafeAreaView>

      <SafeAreaView style={toggle === 2 ? { display: 'flex' } : { display: 'none' }}>

        <View style={styles.list}>

          <Checkbox
            disabled={false}
            value={toggleCheckBox}
            onValueChange={(newValue) => setToggleCheckBox(newValue)}
            style={styles.checkboxes} />

          <Text style={{ color: '#000', marginHorizontal: 20, fontSize: 15 }}>To do list text</Text>

        </View>

        <View style={styles.list}>

          <Checkbox
            disabled={false}
            value={toggleCheckBox2}
            onValueChange={(newValue) => setToggleCheckBox2(newValue)}
            style={styles.checkboxes} />

          <Text style={{ color: '#000', marginHorizontal: 20, fontSize: 15 }}>To do list text</Text>

        </View>

        <View style={styles.list}>

          <Checkbox
            disabled={false}
            value={toggleCheckBox3}
            onValueChange={(newValue) => setToggleCheckBox3(newValue)}
            style={styles.checkboxes} />

          <Text style={{ color: '#000', marginHorizontal: 20, fontSize: 15 }}>To do list text</Text>

        </View>

        <View style={styles.list}>

          <Checkbox
            disabled={false}
            value={toggleCheckBox4}
            onValueChange={(newValue) => setToggleCheckBox4(newValue)}
            style={styles.checkboxes} />

          <Text style={{ color: '#000', marginHorizontal: 20, fontSize: 15 }}>To do list text</Text>

        </View>

        <EvilIcons name="plus" size={70} color="#000" style={styles.todo_plus} />












      </SafeAreaView>



    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#dddd',
    color: 'white'
  },

  nav: {
    flexDirection: 'row',
    position: 'absolute',
    top: 100,
  },

  search: {
    backgroundColor: '#000',
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginTop: 0,
    width: 330,
    opacity: 0.8,
    borderRadius: 60,
    position: 'absolute',
    right: -100
  },

  search_icon: {
    color: '#1aa7ec'
  },

  text: {
    color: '#fff',
    fontSize: 20
  },

  content: {
    backgroundColor: '#000',
    paddingHorizontal: 10,
    paddingVertical: 10,
    opacity: 0.9,
    width: 130,
    borderRadius: 19
  },

  box1: {
    marginLeft: -90,
    marginTop: 100
  },

  box2: {
    position: 'relative',
    left: 90,
    bottom: 80

  },

  box3: {
    position: 'relative',
    left: -90
  },

  box4: {
    position: 'relative',
    left: 90,
    bottom: 80
  },

  plus: {
    position: 'absolute',
    top: 510,
    left: 160,
  },

  list: {
    backgroundColor: '#ffff',
    flexDirection: 'row',
    width: 330,
    marginTop: 50,
    paddingVertical: 30,
    borderRadius: 20
  },

  checkboxes: {
    marginHorizontal: 20
  },

  todo_plus: {
    position: 'absolute',
    top: 560,
    left: 260,
  },








});
