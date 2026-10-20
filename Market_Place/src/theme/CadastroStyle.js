
import { StyleSheet } from 'react-native';
import Colors from './Colors';

const CadastroStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },

  content: {
    paddingHorizontal: 26,
    paddingTop: 28,
    paddingBottom: 36,
  },

  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
    paddingVertical: 8,
    marginBottom: 24,
  },

  backText: {
    color: Colors.text,
    fontSize: 14,
    fontWeight: '600',
    marginLeft: 8,
  },

  header: {
    marginBottom: 26,
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

  photoArea: {
    alignItems: 'center',
    marginBottom: 26,
  },

  photoPlaceholder: {
    width: 84,
    height: 84,
    borderRadius: 42,
    backgroundColor: Colors.surfaceSecondary,
    borderWidth: 1,
    borderColor: Colors.border,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },

  photoText: {
    fontSize: 13,
    fontWeight: '600',
    color: Colors.text,
  },

  photoHint: {
    fontSize: 12,
    color: Colors.textSecondary,
    marginTop: 5,
  },

  field: {
    marginBottom: 18,
  },

  label: {
    fontSize: 14,
    fontWeight: '600',
    color: Colors.text,
    marginBottom: 9,
  },

  input: {
    minHeight: 50,
    borderWidth: 1,
    borderColor: Colors.border,
    borderRadius: 10,
    paddingHorizontal: 14,
    paddingVertical: 13,
    fontSize: 14,
    color: Colors.text,
    backgroundColor: Colors.surface,
  },

  primaryButton: {
    minHeight: 50,
    backgroundColor: Colors.primary,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 8,
  },

  primaryButtonText: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: '700',
  },

  message: {
    fontSize: 13,
    lineHeight: 19,
    color: Colors.danger,
    textAlign: 'center',
    marginBottom: 12,
  },

  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
    marginTop: 24,
  },

  footerText: {
    color: Colors.textSecondary,
    fontSize: 13,
  },

  linkText: {
    color: Colors.text,
    fontSize: 13,
    fontWeight: '700',
    marginLeft: 5,
  },
});

export default CadastroStyle;
