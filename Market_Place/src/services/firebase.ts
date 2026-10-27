
import { initializeApp, getApp, getApps } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyBdfeJKhewPxNiUEWMxyo8tlR8shO8kee4',
  authDomain: 'marketplace-4233c.firebaseapp.com',
  projectId: 'marketplace-4233c',
  storageBucket: 'marketplace-4233c.firebasestorage.app',
  messagingSenderId: '503283303758',
  appId: '1:503283303758:web:30e2492ef5cc96c4fd0a1f',
  measurementId: 'G-MCT8CX0TS6',
};

const app = getApps().length > 0
  ? getApp()
  : initializeApp(firebaseConfig);

export const auth = getAuth(app);

export default app;
