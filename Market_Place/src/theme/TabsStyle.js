
import { StyleSheet } from 'react-native';
import Colors from './Colors';

const TabsStyle = StyleSheet.create({
  screen: {
    backgroundColor: Colors.background,
  },

  tabBar: {
    backgroundColor: Colors.surface,
    borderTopColor: Colors.border,
    borderTopWidth: 1,
    height: 64,
    paddingTop: 7,
    paddingBottom: 7,
    elevation: 0,
  },

  tabLabel: {
    fontSize: 11,
    fontWeight: '500',
  },

  header: {
    backgroundColor: Colors.background,
  },
});

export default TabsStyle;
