
import { initializeApp, getApp, getApps } from 'firebase/app';
import {
  initializeAuth,
  getAuth,
  getReactNativePersistence,
} from 'firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Platform } from 'react-native';

const firebaseConfig = {
  apiKey: 'AIzaSyBdfeJKhewPxNiUEWMxyo8tlR8shO8kee4',
  authDomain: 'marketplace-4233c.firebaseapp.com',
  projectId: 'marketplace-4233c',
  storageBucket: 'marketplace-4233c.firebasestorage.app',
  messagingSenderId: '503283303758',
  appId: '1:503283303758:web:30e2492ef5cc96c4fd0a1f',
  measurementId: 'G-MCT8CX0TS6',
};

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);

function criarAuth() {
  if (Platform.OS === 'web') {
    return getAuth(app);
  }

  try {
    return initializeAuth(app, {
      persistence: getReactNativePersistence(AsyncStorage),
    });
  } catch {
    return getAuth(app);
  }
}

export const auth = criarAuth();
export default app;
