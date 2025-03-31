import React from 'react';
import { TouchableOpacity, Image } from 'react-native';
import { styles } from './styles';

export default function Card({ card, onPress }) {
  return (
    <TouchableOpacity 
      style={styles.card} 
      onPress={onPress}
      activeOpacity={0.7}
    >
      <Image
        source={card.flipped ? card.icon : require('../../assets/images/card-back.png')}
        style={styles.cardImage}
      />
    </TouchableOpacity>
  );
}