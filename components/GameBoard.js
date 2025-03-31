import React, { useState } from 'react';
import { View } from 'react-native';
import Card from './Card';
import { styles } from './styles';

const icons = [
  require('../assets/images/icon1.png'),
  require('../assets/images/icon2.png'),
  // Add 4 more icons
];

export default function GameBoard() {
  const [cards, setCards] = useState(generateCards());
  const [flipped, setFlipped] = useState([]);
  const [solved, setSolved] = useState([]);

  function generateCards() {
    const pairs = [...icons, ...icons];
    return pairs.map((icon, index) => ({
      id: index,
      icon,
      flipped: false
    }));
  }

  const handleCardPress = (id) => {
    if (flipped.length === 2 || solved.includes(id)) return;
    
    const newCards = cards.map(card => 
      card.id === id ? { ...card, flipped: true } : card
    );
    
    setCards(newCards);
    setFlipped([...flipped, id]);

    if (flipped.length === 1) {
      checkForMatch(id);
    }
  };

  const checkForMatch = (secondId) => {
    const [firstId] = flipped;
    const firstCard = cards.find(c => c.id === firstId);
    const secondCard = cards.find(c => c.id === secondId);

    if (firstCard.icon === secondCard.icon) {
      setSolved([...solved, firstId, secondId]);
    } else {
      setTimeout(() => {
        setCards(cards.map(card => 
          [firstId, secondId].includes(card.id) 
            ? { ...card, flipped: false } 
            : card
        ));
      }, 1000);
    }
    setFlipped([]);
  };

  return (
    <View style={styles.gameBoard}>
      {cards.map(card => (
        <Card
          key={card.id}
          card={card}
          onPress={() => handleCardPress(card.id)}
        />
      ))}
    </View>
  );
}