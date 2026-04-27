import { StyleSheet, Text, View, Image, Pressable } from 'react-native'
import React from 'react'
import AntDesign from '@expo/vector-icons/AntDesign';
import { s, vs } from 'react-native-size-matters';
import { LinearGradient } from 'expo-linear-gradient';

interface ProfileCardProps {
  name: string;
  desc: string;
  onEdit?: () => void;
}

const ProfileCard: React.FC<ProfileCardProps> = ({ name, desc, onEdit }) => {
  return (
    <LinearGradient
      colors={['#2ecc71', '#1a8a4a']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.card}
    >
      {/* Avatar + badge */}
      <View style={styles.avatarWrapper}>
        <Image style={styles.avatar} source={require("../assets/gulendam3.jpg")} />
        <View style={styles.onlineBadge} />
      </View>

      <Text style={styles.name}>{name}</Text>

      {/* Rol etiketi */}
      <View style={styles.badge}>
        <Text style={styles.badgeText}>{desc}</Text>
      </View>

      {/* Düzenle butonu */}
      <Pressable
        style={({ pressed }) => [styles.button, pressed && styles.buttonPressed]}
        onPress={onEdit}
      >
        <AntDesign name="edit" size={s(15)} color="#1a8a4a" />
        <Text style={styles.btnText}>Profili Düzenle</Text>
      </Pressable>
    </LinearGradient>
  )
}

export default ProfileCard

const styles = StyleSheet.create({
  card: {
    borderRadius: s(20),
    padding: s(24),
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 12,
    elevation: 6,
  },
  avatarWrapper: {
    position: 'relative',
    marginBottom: vs(12),
  },
  avatar: {
    width: s(90),
    height: s(90),
    borderRadius: s(45),
    borderWidth: 3,
    borderColor: 'rgba(255,255,255,0.8)',
  },
  onlineBadge: {
    position: 'absolute',
    bottom: 2,
    right: 2,
    width: s(14),
    height: s(14),
    borderRadius: s(7),
    backgroundColor: '#fff',
    borderWidth: 2,
    borderColor: '#2ecc71',
  },
  name: {
    fontSize: s(20),
    fontWeight: "700",
    color: '#fff',
    letterSpacing: 0.3,
    marginBottom: vs(6),
  },
  badge: {
    backgroundColor: 'rgba(255,255,255,0.2)',
    paddingHorizontal: s(12),
    paddingVertical: vs(4),
    borderRadius: s(20),
    marginBottom: vs(14),
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.3)',
  },
  badgeText: {
    fontSize: s(11),
    color: 'rgba(255,255,255,0.95)',
    fontWeight: '500',
    letterSpacing: 0.5,
  },
  button: {
    flexDirection: "row",
    backgroundColor: '#fff',
    borderRadius: s(25),
    alignItems: "center",
    gap: s(6),
    paddingHorizontal: s(20),
    paddingVertical: vs(8),
  },
  buttonPressed: {
    opacity: 0.85,
    transform: [{ scale: 0.97 }],
  },
  btnText: {
    color: '#1a8a4a',
    fontWeight: '600',
    fontSize: s(13),
  },
})