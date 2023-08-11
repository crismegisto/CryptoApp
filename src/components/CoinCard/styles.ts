import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    height: 66,
    borderRadius: 10,
    marginHorizontal: 12,
    marginTop: 8,
    padding: 10
  },
  infoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  info: {
    justifyContent: 'space-around',
    height: '100%'
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold'
  },
  infoWithIcon: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  icon: {
    width: 30,
    height: 30,
    marginRight: 6
  }
});

export default styles;
