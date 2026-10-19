
import { StyleSheet } from 'react-native';

const SplashStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#080808',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 24,
  },

  logoContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 24,
  },

  logo: {
    width: 120,
    height: 120,
  },

  title: {
    color: '#FFFFFF',
    fontSize: 27,
    fontWeight: '700',
    letterSpacing: 0.5,
    textAlign: 'center',
  },

  subtitle: {
    color: '#A3A3A3',
    fontSize: 14,
    marginTop: 10,
    textAlign: 'center',
  },

  loadingContainer: {
    position: 'absolute',
    bottom: 70,
    alignItems: 'center',
  },

  loadingText: {
    color: '#737373',
    fontSize: 12,
    letterSpacing: 1,
  },
});

export default SplashStyle;
