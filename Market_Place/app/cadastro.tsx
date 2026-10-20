
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

import CadastroStyle from '../src/theme/CadastroStyle';

export default function CadastroScreen() {
  const router = useRouter();

  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [cpf, setCpf] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');
  const [mensagem, setMensagem] = useState('');

  function cadastrar() {
    if (
      !nome.trim() ||
      !email.trim() ||
      !cpf.trim() ||
      !senha ||
      !confirmarSenha
    ) {
      setMensagem('Preencha todos os campos obrigatórios.');
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      setMensagem('Informe um e-mail válido.');
      return;
    }

    const cpfNumeros = cpf.replace(/\D/g, '');

    if (cpfNumeros.length !== 11) {
      setMensagem('Informe um CPF com 11 números.');
      return;
    }

    if (senha.length < 6) {
      setMensagem('A senha deve ter pelo menos 6 caracteres.');
      return;
    }

    if (senha !== confirmarSenha) {
      setMensagem('As senhas não correspondem.');
      return;
    }

    setMensagem(
      'Campos validados. O cadastro será integrado futuramente.'
    );
  }

  return (
    <View style={CadastroStyle.container}>
      <ScrollView
        contentContainerStyle={CadastroStyle.content}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      >
        <Pressable
          style={CadastroStyle.backButton}
          onPress={() => router.back()}
          accessibilityRole="button"
        >
          <Ionicons name="arrow-back" size={20} color="#171717" />

          <Text style={CadastroStyle.backText}>
            Voltar
          </Text>
        </Pressable>

        <View style={CadastroStyle.header}>
          <Text style={CadastroStyle.title}>
            Criar conta
          </Text>

          <Text style={CadastroStyle.subtitle}>
            Preencha seus dados para preparar seu cadastro no Market_Place.
          </Text>
        </View>

        <View style={CadastroStyle.photoArea}>
          <View style={CadastroStyle.photoPlaceholder}>
            <Ionicons
              name="camera-outline"
              size={32}
              color="#525252"
            />
          </View>

          <Text style={CadastroStyle.photoText}>
            Foto de perfil
          </Text>

          <Text style={CadastroStyle.photoHint}>
            Poderá ser adicionada futuramente
          </Text>
        </View>

        <View style={CadastroStyle.field}>
          <Text style={CadastroStyle.label}>Nome completo</Text>

          <TextInput
            style={CadastroStyle.input}
            placeholder="Digite seu nome"
            placeholderTextColor="#737373"
            value={nome}
            onChangeText={setNome}
            autoCapitalize="words"
            accessibilityLabel="Nome completo"
          />
        </View>

        <View style={CadastroStyle.field}>
          <Text style={CadastroStyle.label}>E-mail</Text>

          <TextInput
            style={CadastroStyle.input}
            placeholder="seuemail@exemplo.com"
            placeholderTextColor="#737373"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
            accessibilityLabel="E-mail"
          />
        </View>

        <View style={CadastroStyle.field}>
          <Text style={CadastroStyle.label}>CPF</Text>

          <TextInput
            style={CadastroStyle.input}
            placeholder="Digite os 11 números do CPF"
            placeholderTextColor="#737373"
            value={cpf}
            onChangeText={setCpf}
            keyboardType="numeric"
            maxLength={14}
            accessibilityLabel="CPF"
          />
        </View>

        <View style={CadastroStyle.field}>
          <Text style={CadastroStyle.label}>Senha</Text>

          <TextInput
            style={CadastroStyle.input}
            placeholder="Mínimo de 6 caracteres"
            placeholderTextColor="#737373"
            value={senha}
            onChangeText={setSenha}
            secureTextEntry
            autoCapitalize="none"
            accessibilityLabel="Senha"
          />
        </View>

        <View style={CadastroStyle.field}>
          <Text style={CadastroStyle.label}>
            Confirmar senha
          </Text>

          <TextInput
            style={CadastroStyle.input}
            placeholder="Digite a senha novamente"
            placeholderTextColor="#737373"
            value={confirmarSenha}
            onChangeText={setConfirmarSenha}
            secureTextEntry
            autoCapitalize="none"
            accessibilityLabel="Confirmar senha"
          />
        </View>

        {mensagem !== '' && (
          <Text
            style={CadastroStyle.message}
            accessibilityRole="alert"
          >
            {mensagem}
          </Text>
        )}

        <Pressable
          style={CadastroStyle.primaryButton}
          onPress={cadastrar}
          accessibilityRole="button"
        >
          <Text style={CadastroStyle.primaryButtonText}>
            Criar conta
          </Text>
        </Pressable>

        <View style={CadastroStyle.footer}>
          <Text style={CadastroStyle.footerText}>
            Já tem uma conta?
          </Text>

          <Pressable
            onPress={() => router.replace('/login')}
            accessibilityRole="button"
          >
            <Text style={CadastroStyle.linkText}>
              Entrar
            </Text>
          </Pressable>
        </View>
      </ScrollView>
    </View>
  );
}
