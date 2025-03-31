import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  gameBoard: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    padding: 10,
  },
  card: {
    width: 80,
    height: 120,
    margin: 10,
    borderRadius: 10,
    backgroundColor: 'white',
    elevation: 3,
  },
  cardImage: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
    resizeMode: 'contain',
  },
});