import { ScrollView, StyleSheet, View, Image } from 'react-native'
import React from 'react'
import { s, vs } from 'react-native-size-matters';

const Favorites = () => {

  const data = [1,2,3,4,5,6,7,8,9,10];

  return (
    <View style={{ marginTop: vs(20) }}>

      {/* 1. SATIR */}
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {data.map((i) => (
          <Image
            key={i}
            source={{ uri: `https://picsum.photos/200?random=${i}` }}
            style={styles.image}
          />
        ))}
      </ScrollView>

      {/* 2. SATIR */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{ marginTop: vs(10) }}
      >
        {data.map((i) => (
          <Image
            key={`second-${i}`}
            source={{ uri: `https://picsum.photos/200?random=${i + 20}` }}
            style={styles.image}
          />
        ))}
      </ScrollView>

    </View>
  );
};

export default Favorites;

const styles = StyleSheet.create({
  image: {
    width: s(100),
    height: s(100),
    borderRadius: s(6),
    marginRight: s(8),
  }
});