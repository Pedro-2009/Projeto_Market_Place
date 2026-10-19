
import { useEffect, useRef } from 'react';
import {
  Animated,
  Image,
  Text,
  View,
} from 'react-native';

import SplashStyle from '../theme/SplashStyle';

export default function SplashScreen() {
  const opacity = useRef(new Animated.Value(0)).current;
  const scale = useRef(new Animated.Value(0.92)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(opacity, {
        toValue: 1,
        duration: 700,
        useNativeDriver: true,
      }),

      Animated.spring(scale, {
        toValue: 1,
        speed: 1.5,
        bounciness: 3,
        useNativeDriver: true,
      }),
    ]).start();
  }, [opacity, scale]);

  return (
    <View style={SplashStyle.container}>
      <Animated.View
        style={[
          SplashStyle.logoContainer,
          {
            opacity,
            transform: [{ scale }],
          },
        ]}
      >
        <Image
          source={require('../../assets/images/logo.png')}
          style={SplashStyle.logo}
          resizeMode="contain"
        />

        <Text style={SplashStyle.title}>
          Market_Place
        </Text>

        <Text style={SplashStyle.subtitle}>
          Seu espaço para comprar e vender.
        </Text>
      </Animated.View>

      <View style={SplashStyle.loadingContainer}>
        <Text style={SplashStyle.loadingText}>
          PREPARANDO SUA EXPERIÊNCIA
        </Text>
      </View>
    </View>
  );
}
