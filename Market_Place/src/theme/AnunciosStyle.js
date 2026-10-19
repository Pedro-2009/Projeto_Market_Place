
import { StyleSheet } from 'react-native';
import Colors from './Colors';

const AnuncioStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },

  content: {
    paddingHorizontal: 22,
    paddingTop: 28,
    paddingBottom: 36,
  },

  header: {
    marginBottom: 28,
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

  section: {
    marginBottom: 23,
  },

  label: {
    fontSize: 14,
    fontWeight: '600',
    color: Colors.text,
    marginBottom: 9,
  },

  input: {
    borderWidth: 1,
    borderColor: Colors.border,
    borderRadius: 10,
    paddingHorizontal: 14,
    paddingVertical: 13,
    fontSize: 15,
    color: Colors.text,
    backgroundColor: Colors.surface,
  },

  descriptionInput: {
    minHeight: 115,
    textAlignVertical: 'top',
  },

  optionsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 9,
  },

  option: {
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderWidth: 1,
    borderColor: Colors.border,
    borderRadius: 9,
    backgroundColor: Colors.surface,
  },

  optionSelected: {
    backgroundColor: Colors.primary,
    borderColor: Colors.primary,
  },

  optionText: {
    color: Colors.textSecondary,
    fontSize: 13,
    fontWeight: '500',
  },

  optionTextSelected: {
    color: '#FFFFFF',
  },

  button: {
    backgroundColor: Colors.primary,
    borderRadius: 10,
    paddingVertical: 16,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 4,
  },

  buttonText: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: '700',
  },

  feedback: {
    fontSize: 13,
    lineHeight: 19,
    color: Colors.danger,
    marginBottom: 14,
  },

  feedbackSuccess: {
    color: Colors.success,
  },
});

export default AnuncioStyle;
