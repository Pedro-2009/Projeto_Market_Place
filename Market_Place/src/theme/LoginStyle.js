
import { StyleSheet } from 'react-native';
import Colors from './Colors';

const LoginStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },

  content: {
    flexGrow: 1,
    justifyContent: 'center',
    paddingHorizontal: 26,
    paddingVertical: 36,
  },

  logoArea: {
    alignItems: 'center',
    marginBottom: 36,
  },

  logoCircle: {
    width: 76,
    height: 76,
    borderRadius: 38,
    backgroundColor: Colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 18,
  },

  title: {
    fontSize: 28,
    fontWeight: '700',
    color: Colors.text,
    textAlign: 'center',
    marginBottom: 8,
  },

  subtitle: {
    fontSize: 14,
    lineHeight: 21,
    color: Colors.textSecondary,
    textAlign: 'center',
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

  inputContainer: {
    minHeight: 50,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: Colors.border,
    borderRadius: 10,
    paddingHorizontal: 14,
    backgroundColor: Colors.surface,
  },

  inputIcon: {
    marginRight: 11,
  },

  input: {
    flex: 1,
    paddingVertical: 13,
    fontSize: 14,
    color: Colors.text,
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
    color: Colors.danger,
    fontSize: 13,
    lineHeight: 19,
    marginTop: 14,
    textAlign: 'center',
  },

  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
    marginTop: 26,
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

export default LoginStyle;
