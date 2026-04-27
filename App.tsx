import { ImageBackground, Modal, Pressable, StyleSheet, TextInput, View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { s, vs } from 'react-native-size-matters';
import ProfileCard from './components/ProfileCard';
import Favorites from './components/Favorites';
import ProfileButtons from './components/ProfileButtons';
import { AntDesign } from '@expo/vector-icons';
import { useState } from 'react';

export default function App() {
  const [modalVisible, setModalVisible] = useState(false);
  const [name, setName] = useState("Gülendam Çetin");
  const [desc, setDesc] = useState("Full Stack Developer");

  // Input için geçici state
  const [tempName, setTempName] = useState(name);
  const [tempDesc, setTempDesc] = useState(desc);

  const handleEdit = () => {
    setTempName(name);  // Modal açılırken mevcut değerleri yükle
    setTempDesc(desc);
    setModalVisible(true);
  };

  const handleSave = () => {
    setName(tempName);   // ✅ Kaydet butonuna basınca güncelle
    setDesc(tempDesc);
    setModalVisible(false);
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ImageBackground source={require("./assets/blue7.jpg")} style={styles.bg}>

        <ProfileCard name={name} desc={desc} onEdit={handleEdit} />
        <Favorites />
        <ProfileButtons />

        <Modal visible={modalVisible} animationType="slide" transparent>
          <View style={styles.overlay}>
            <View style={styles.modalContainer}>
              <Text style={styles.modalTitle}>Profili Düzenle</Text>

              <TextInput
                placeholder="Kullanıcı Adı"
                style={styles.textInput}
                value={tempName}
                onChangeText={setTempName}  // ✅ Yazınca tempName güncellenir
              />
              <TextInput
                placeholder="Açıklaması"
                style={styles.textInput}
                value={tempDesc}
                onChangeText={setTempDesc}
              />

              <Pressable style={styles.button} onPress={handleSave}>
                <AntDesign name="edit" size={s(18)} color="white" />
                <Text style={styles.btnText}>Profili Güncelle</Text>
              </Pressable>

              <Pressable style={styles.buttonClose} onPress={() => setModalVisible(false)}>
                <AntDesign name="close" size={s(18)} color="white" />
                <Text style={styles.btnText}>İptal</Text>
              </Pressable>
            </View>
          </View>
        </Modal>

      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  bg: {
    flex: 1,
    padding: s(20),
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',  // Arka planı karart
    justifyContent: 'center',
    padding: s(20),
  },
  modalContainer: {
    backgroundColor: 'white',
    borderRadius: s(12),
    padding: s(20),
  },
  modalTitle: {
    fontSize: s(18),
    fontWeight: '600',
    marginBottom: vs(12),
    textAlign: 'center',
  },
  textInput: {
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: s(8),
    padding: s(8),
    marginVertical: vs(4),
  },
  button: {
    flexDirection: "row",
    backgroundColor: '#163090',
    borderRadius: s(8),
    alignItems: "center",
    justifyContent: 'center',
    gap: s(5),
    marginTop: vs(8),
    padding: s(8),
  },
  buttonClose: {
    flexDirection: "row",
    backgroundColor: '#e81b1b',
    borderRadius: s(8),
    alignItems: "center",
    justifyContent: 'center',
    gap: s(5),
    marginTop: vs(8),
    padding: s(8),
  },
  btnText: {
    color: '#fff',
  },
});