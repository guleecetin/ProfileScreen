import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import Entypo from '@expo/vector-icons/Entypo';
import { s, vs } from 'react-native-size-matters';
import AntDesign from '@expo/vector-icons/AntDesign';
import Feather from '@expo/vector-icons/Feather';

const ProfileButtons = () => {
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(128);
  const [shared, setShared] = useState(false);
  const [shareCount, setShareCount] = useState(34);
  const [downloaded, setDownloaded] = useState(false);

  const handleLike = () => {
    if (liked) {
      setLikeCount(prev => prev - 1);
    } else {
      setLikeCount(prev => prev + 1);
    }
    setLiked(prev => !prev);
  };

  const handleShare = () => {
    if (!shared) {
      setShareCount(prev => prev + 1);
      setShared(true);
      Alert.alert("Paylaşıldı!", "Profil başarıyla paylaşıldı.");
    } else {
      Alert.alert("Zaten paylaşıldı", "Bu profili zaten paylaştınız.");
    }
  };

  const handleDownload = () => {
    if (!downloaded) {
      setDownloaded(true);
      Alert.alert("İndirildi!", "Profil bilgileri indirildi.");
    } else {
      Alert.alert("Zaten indirildi", "Bu profili zaten indirdiniz.");
    }
  };

  return (
    <View style={styles.buttonContainer}>

      {/* SHARED */}
      <TouchableOpacity
        style={[styles.button, shared && styles.buttonActive]}
        onPress={handleShare}
      >
        <View style={styles.iconWrapper}>
          <Entypo name="share" size={s(18)} color="white" />
        </View>
        <Text style={styles.btnText}>Shared</Text>
        <Text style={styles.countText}>{shareCount}</Text>
      </TouchableOpacity>

      {/* LIKES */}
      <TouchableOpacity
        style={[styles.button, liked && styles.buttonActive]}
        onPress={handleLike}
      >
        <View style={styles.iconWrapper}>
      <AntDesign
  name="like"
  size={s(18)}
  color={liked ? "white" : "rgba(255,255,255,0.4)"}  // ✅ soluk = beğenilmemiş, parlak = beğenilmiş
/>
        </View>
        <Text style={styles.btnText}>{liked ? "Liked!" : "Likes"}</Text>
        <Text style={styles.countText}>{likeCount}</Text>
      </TouchableOpacity>

      {/* DOWNLOAD */}
      <TouchableOpacity
        style={[styles.button, downloaded && styles.buttonActive]}
        onPress={handleDownload}
      >
        <View style={styles.iconWrapper}>
          <Feather name={downloaded ? "check" : "download"} size={s(18)} color="white" />
        </View>
        <Text style={styles.btnText}>{downloaded ? "Downloaded!" : "Download"}</Text>
      </TouchableOpacity>

    </View>
  );
};

export default ProfileButtons

const styles = StyleSheet.create({
  buttonContainer: {
    marginTop: vs(8),
    alignItems: "center",
    gap: vs(5)
  },
  button: {
    width: "95%",
    backgroundColor: "#163090",
    flexDirection: "row",
    gap: s(6),
    alignItems: "center",
    padding: s(10),
    borderRadius: s(8),
  },
  buttonActive: {
    backgroundColor: "#0a1f5e",  // ✅ Aktifken daha koyu
  },
  iconWrapper: {
    width: s(24),
    alignItems: "center",
    marginRight: s(6)
  },
  btnText: {
    fontSize: s(14),
    color: "#fff",
    flex: 1,  // ✅ count sağa itsin diye
  },
  countText: {
    fontSize: s(12),
    color: "#ffffff99",
    marginLeft: "auto",
  }
});