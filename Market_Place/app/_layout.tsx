
import { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import 'react-native-reanimated';

import CustomSplashScreen from '../src/components/SplashScreen';

export {
  ErrorBoundary,
} from 'expo-router';

export const unstable_settings = {
  initialRouteName: '(tabs)',
};

SplashScreen.preventAutoHideAsync().catch(() => {});

export default function RootLayout() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;

    async function prepareApp() {
      await SplashScreen.hideAsync();

      timeout = setTimeout(() => {
        setShowSplash(false);
      }, 2200);
    }

    prepareApp();

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return (
    <View style={styles.container}>
      <Stack
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="(tabs)" />

        <Stack.Screen name="login" />

        <Stack.Screen name="cadastro" />

        <Stack.Screen name="busca" />

        <Stack.Screen name="produto/[id]" />

        <Stack.Screen
          name="modal"
          options={{
            presentation: 'modal',
          }}
        />
      </Stack>

      {showSplash && (
        <View style={styles.splashOverlay}>
          <CustomSplashScreen />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  splashOverlay: {
    ...StyleSheet.absoluteFill,
    zIndex: 10,
    elevation: 10,
  },
});
