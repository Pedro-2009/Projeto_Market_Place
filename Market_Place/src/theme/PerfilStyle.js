
import { StyleSheet } from 'react-native';
import Colors from './Colors';

const PerfilStyle = StyleSheet.create({
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

  profileCard: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 18,
    borderWidth: 1,
    borderColor: Colors.border,
    borderRadius: 14,
    marginBottom: 30,
  },

  avatar: {
    width: 68,
    height: 68,
    borderRadius: 34,
    backgroundColor: Colors.surfaceSecondary,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 15,
  },

  userInfo: {
    flex: 1,
  },

  userName: {
    fontSize: 17,
    fontWeight: '700',
    color: Colors.text,
    marginBottom: 5,
  },

  userEmail: {
    fontSize: 13,
    color: Colors.textSecondary,
  },

  section: {
    marginBottom: 26,
  },

  sectionTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: Colors.text,
    marginBottom: 12,
  },

  optionRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
    paddingHorizontal: 14,
    borderBottomWidth: 1,
    borderBottomColor: Colors.border,
  },

  optionIcon: {
    width: 38,
    height: 38,
    borderRadius: 10,
    backgroundColor: Colors.surfaceSecondary,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 13,
  },

  optionContent: {
    flex: 1,
  },

  optionTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: Colors.text,
    marginBottom: 4,
  },

  optionDescription: {
    fontSize: 12,
    lineHeight: 18,
    color: Colors.textSecondary,
  },

  logoutRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 15,
    borderWidth: 1,
    borderColor: Colors.border,
    borderRadius: 10,
    marginTop: 4,
  },

  logoutText: {
    fontSize: 14,
    fontWeight: '600',
    color: Colors.text,
    marginLeft: 9,
  },

  footer: {
    fontSize: 12,
    color: Colors.textSecondary,
    textAlign: 'center',
    marginTop: 24,
  },
});

export default PerfilStyle;
