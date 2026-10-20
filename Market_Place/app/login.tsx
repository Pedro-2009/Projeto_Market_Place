
import { useState } from 'react';
import {
  ScrollView,
  Text,
  TextInput,
  Pressable,
  View,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

import Colors from '../src/theme/Colors';
import LoginStyle from '../src/theme/LoginStyle';

export default function LoginScreen() {
  const router = useRouter();

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [mensagem, setMensagem] = useState('');

  function entrar() {
    if (!email.trim() || !senha) {
      setMensagem('Preencha o e-mail e a senha.');
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      setMensagem('Informe um e-mail válido.');
      return;
    }

    setMensagem(
      'Campos validados. A autenticação será implementada futuramente.'
    );
  }

  return (
    <View style={LoginStyle.container}>
      <ScrollView
        contentContainerStyle={LoginStyle.content}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      >
        <View style={LoginStyle.logoArea}>
          <View style={LoginStyle.logoCircle}>
            <Ionicons
              name="storefront-outline"
              size={38}
              color="#FFFFFF"
            />
          </View>

          <Text style={LoginStyle.title}>Bem-vindo!</Text>

          <Text style={LoginStyle.subtitle}>
            Entre na sua conta para continuar no Market_Place.
          </Text>
        </View>

        <View style={LoginStyle.field}>
          <Text style={LoginStyle.label}>E-mail</Text>

          <View style={LoginStyle.inputContainer}>
            <Ionicons
              name="mail-outline"
              size={20}
              color={Colors.icon}
              style={LoginStyle.inputIcon}
            />

            <TextInput
              style={LoginStyle.input}
              placeholder="seuemail@exemplo.com"
              placeholderTextColor={Colors.textSecondary}
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
              autoCorrect={false}
              accessibilityLabel="E-mail"
            />
          </View>
        </View>

        <View style={LoginStyle.field}>
          <Text style={LoginStyle.label}>Senha</Text>

          <View style={LoginStyle.inputContainer}>
            <Ionicons
              name="lock-closed-outline"
              size={20}
              color={Colors.icon}
              style={LoginStyle.inputIcon}
            />

            <TextInput
              style={LoginStyle.input}
              placeholder="Digite sua senha"
              placeholderTextColor={Colors.textSecondary}
              value={senha}
              onChangeText={setSenha}
              secureTextEntry
              autoCapitalize="none"
              accessibilityLabel="Senha"
            />
          </View>
        </View>

        {mensagem !== '' && (
          <Text style={LoginStyle.message} accessibilityRole="alert">
            {mensagem}
          </Text>
        )}

        <Pressable
          style={LoginStyle.primaryButton}
          onPress={entrar}
          accessibilityRole="button"
        >
          <Text style={LoginStyle.primaryButtonText}>
            Entrar
          </Text>
        </Pressable>

        <View style={LoginStyle.footer}>
          <Text style={LoginStyle.footerText}>
            Ainda não tem uma conta?
          </Text>

          <Pressable
            onPress={() => router.push('/cadastro')}
            accessibilityRole="button"
          >
            <Text style={LoginStyle.linkText}>
              Criar conta
            </Text>
          </Pressable>
        </View>
      </ScrollView>
    </View>
  );
}
