
import { StyleSheet } from 'react-native';
import Colors from './Colors';

const ProdutoStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },

  content: {
    paddingHorizontal: 22,
    paddingTop: 18,
    paddingBottom: 36,
  },

  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
    paddingVertical: 10,
    marginBottom: 16,
  },

  backText: {
    color: Colors.text,
    fontSize: 14,
    fontWeight: '600',
    marginLeft: 8,
  },

  imageContainer: {
    width: '100%',
    height: 260,
    borderRadius: 14,
    backgroundColor: Colors.surfaceSecondary,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 24,
  },

  imageHint: {
    fontSize: 12,
    color: Colors.textSecondary,
    marginTop: 12,
  },

  category: {
    fontSize: 12,
    fontWeight: '600',
    color: Colors.textSecondary,
    textTransform: 'uppercase',
    letterSpacing: 1,
    marginBottom: 8,
  },

  title: {
    fontSize: 26,
    fontWeight: '700',
    color: Colors.text,
    marginBottom: 12,
  },

  price: {
    fontSize: 25,
    fontWeight: '700',
    color: Colors.text,
    marginBottom: 10,
  },

  condition: {
    alignSelf: 'flex-start',
    backgroundColor: Colors.surfaceSecondary,
    color: Colors.textSecondary,
    fontSize: 12,
    paddingHorizontal: 12,
    paddingVertical: 7,
    borderRadius: 7,
    overflow: 'hidden',
    marginBottom: 28,
  },

  divider: {
    height: 1,
    backgroundColor: Colors.border,
    marginBottom: 24,
  },

  sectionTitle: {
    fontSize: 17,
    fontWeight: '700',
    color: Colors.text,
    marginBottom: 12,
  },

  description: {
    fontSize: 14,
    lineHeight: 23,
    color: Colors.textSecondary,
    marginBottom: 28,
  },

  infoCard: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderWidth: 1,
    borderColor: Colors.border,
    borderRadius: 12,
    marginBottom: 12,
  },

  infoTextContainer: {
    flex: 1,
    marginLeft: 12,
  },

  infoTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: Colors.text,
    marginBottom: 4,
  },

  infoDescription: {
    fontSize: 12,
    lineHeight: 18,
    color: Colors.textSecondary,
  },

  notice: {
    fontSize: 12,
    lineHeight: 19,
    color: Colors.textSecondary,
    marginTop: 12,
  },
});

export default ProdutoStyle;
