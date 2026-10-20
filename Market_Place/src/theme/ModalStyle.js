
import { StyleSheet } from 'react-native';
import Colors from './Colors';

const ModalStyle = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
    paddingVertical: 24,
    backgroundColor: 'rgba(0, 0, 0, 0.45)',
  },

  content: {
    width: '100%',
    maxWidth: 440,
    alignSelf: 'center',
    backgroundColor: Colors.surface,
    borderRadius: 24,
    padding: 24,
    borderWidth: 1,
    borderColor: Colors.border,
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 24,
  },

  logoContainer: {
    width: 48,
    height: 48,
    borderRadius: 16,
    backgroundColor: Colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },

  closeButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: Colors.surfaceSecondary,
    alignItems: 'center',
    justifyContent: 'center',
  },

  title: {
    fontSize: 23,
    fontWeight: '700',
    color: Colors.text,
    marginBottom: 8,
  },

  subtitle: {
    fontSize: 14,
    lineHeight: 21,
    color: Colors.textSecondary,
    marginBottom: 22,
  },

  optionsContainer: {
    borderWidth: 1,
    borderColor: Colors.border,
    borderRadius: 16,
    overflow: 'hidden',
  },

  option: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    minHeight: 82,
    backgroundColor: Colors.surface,
  },

  optionIconContainer: {
    width: 44,
    height: 44,
    borderRadius: 13,
    backgroundColor: Colors.surfaceSecondary,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 13,
  },

  optionTextContainer: {
    flex: 1,
    marginRight: 8,
  },

  optionTitle: {
    fontSize: 15,
    fontWeight: '600',
    color: Colors.text,
    marginBottom: 5,
  },

  optionDescription: {
    fontSize: 12,
    lineHeight: 18,
    color: Colors.textSecondary,
  },

  optionDivider: {
    height: 1,
    backgroundColor: Colors.border,
    marginLeft: 15,
  },

  footer: {
    marginTop: 22,
    alignItems: 'center',
  },

  footerText: {
    fontSize: 12,
    color: Colors.textSecondary,
    textAlign: 'center',
  },
});

export default ModalStyle;
