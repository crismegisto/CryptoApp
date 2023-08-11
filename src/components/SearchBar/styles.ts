import { StyleSheet, Platform } from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    margin: 12,
    padding: Platform.OS === 'ios' ? 10 : 0,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'green'
  }
});

export default styles;
