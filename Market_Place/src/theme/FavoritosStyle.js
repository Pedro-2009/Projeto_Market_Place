
import { StyleSheet } from 'react-native';
import Colors from './Colors';

const FavoritosStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },

  content: {
    flexGrow: 1,
    paddingHorizontal: 22,
    paddingTop: 28,
    paddingBottom: 32,
  },

  header: {
    marginBottom: 32,
  },

  title: {
    fontSize: 28,
    fontWeight: '700',
    color: Colors.text,
    marginBottom: 8,
  },

  subtitle: {
    fontSize: 14,
    lineHeight: 21,
    color: Colors.textSecondary,
  },

  emptyContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 12,
    paddingBottom: 50,
  },

  iconContainer: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: Colors.surfaceSecondary,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 24,
  },

  emptyTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: Colors.text,
    textAlign: 'center',
    marginBottom: 10,
  },

  emptyDescription: {
    fontSize: 14,
    lineHeight: 22,
    color: Colors.textSecondary,
    textAlign: 'center',
    maxWidth: 290,
  },

  hint: {
    fontSize: 12,
    color: Colors.textSecondary,
    textAlign: 'center',
    marginTop: 18,
  },
});

export default FavoritosStyle;
