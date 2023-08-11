import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  loading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  container: {
    backgroundColor: 'white',
    margin: 6,
    padding: 10,
    borderRadius: 10
  },
  subContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  icon: {
    width: 100,
    height: 100,
    resizeMode: 'center'
  }
});

export default styles;
