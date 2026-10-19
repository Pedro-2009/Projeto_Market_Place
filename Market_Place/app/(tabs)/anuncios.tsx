
import { useState } from 'react';
import {
  ScrollView,
  Text,
  TextInput,
  Pressable,
  View,
} from 'react-native';

import AnuncioStyle from '../../src/theme/AnunciosStyle';

const categorias = [
  'Eletrônicos',
  'Moda',
  'Casa',
  'Outros',
];

const estados = [
  'Novo',
  'Seminovo',
  'Usado',
];

export default function AnunciosScreen() {
  const [titulo, setTitulo] = useState('');
  const [descricao, setDescricao] = useState('');
  const [preco, setPreco] = useState('');
  const [categoria, setCategoria] = useState('');
  const [estado, setEstado] = useState('');
  const [mensagem, setMensagem] = useState('');
  const [sucesso, setSucesso] = useState(false);

  function revisarAnuncio() {
    setSucesso(false);

    if (
      !titulo.trim() ||
      !descricao.trim() ||
      !preco.trim() ||
      !categoria ||
      !estado
    ) {
      setMensagem('Preencha todos os campos antes de continuar.');
      return;
    }

    const valor = Number(preco.replace(',', '.'));

    if (!Number.isFinite(valor) || valor <= 0) {
      setMensagem('Informe um preço válido maior que zero.');
      return;
    }

    setMensagem(
      'Tudo certo! Os campos foram validados. O anúncio ainda não foi publicado.'
    );
    setSucesso(true);
  }

  return (
    <View style={AnuncioStyle.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={AnuncioStyle.content}
        keyboardShouldPersistTaps="handled"
      >
        <View style={AnuncioStyle.header}>
          <Text style={AnuncioStyle.title}>Criar anúncio</Text>

          <Text style={AnuncioStyle.subtitle}>
            Apresente seu produto e prepare seu anúncio para o marketplace.
          </Text>
        </View>

        <View style={AnuncioStyle.section}>
          <Text style={AnuncioStyle.label}>Nome do produto</Text>

          <TextInput
            style={AnuncioStyle.input}
            placeholder="Ex.: Smartphone Samsung"
            placeholderTextColor="#A3A3A3"
            value={titulo}
            onChangeText={setTitulo}
            maxLength={80}
            accessibilityLabel="Nome do produto"
          />
        </View>

        <View style={AnuncioStyle.section}>
          <Text style={AnuncioStyle.label}>Descrição</Text>

          <TextInput
            style={[
              AnuncioStyle.input,
              AnuncioStyle.descriptionInput,
            ]}
            placeholder="Descreva as características do produto..."
            placeholderTextColor="#A3A3A3"
            value={descricao}
            onChangeText={setDescricao}
            multiline
            maxLength={500}
            accessibilityLabel="Descrição do produto"
          />
        </View>

        <View style={AnuncioStyle.section}>
          <Text style={AnuncioStyle.label}>Preço (R$)</Text>

          <TextInput
            style={AnuncioStyle.input}
            placeholder="Ex.: 850,00"
            placeholderTextColor="#A3A3A3"
            value={preco}
            onChangeText={setPreco}
            keyboardType="decimal-pad"
            accessibilityLabel="Preço do produto"
          />
        </View>

        <View style={AnuncioStyle.section}>
          <Text style={AnuncioStyle.label}>Categoria</Text>

          <View style={AnuncioStyle.optionsContainer}>
            {categorias.map((item) => {
              const selecionada = categoria === item;

              return (
                <Pressable
                  key={item}
                  style={[
                    AnuncioStyle.option,
                    selecionada && AnuncioStyle.optionSelected,
                  ]}
                  onPress={() => setCategoria(item)}
                  accessibilityRole="button"
                  accessibilityState={{ selected: selecionada }}
                >
                  <Text
                    style={[
                      AnuncioStyle.optionText,
                      selecionada && AnuncioStyle.optionTextSelected,
                    ]}
                  >
                    {item}
                  </Text>
                </Pressable>
              );
            })}
          </View>
        </View>

        <View style={AnuncioStyle.section}>
          <Text style={AnuncioStyle.label}>Estado de conservação</Text>

          <View style={AnuncioStyle.optionsContainer}>
            {estados.map((item) => {
              const selecionado = estado === item;

              return (
                <Pressable
                  key={item}
                  style={[
                    AnuncioStyle.option,
                    selecionado && AnuncioStyle.optionSelected,
                  ]}
                  onPress={() => setEstado(item)}
                  accessibilityRole="button"
                  accessibilityState={{ selected: selecionado }}
                >
                  <Text
                    style={[
                      AnuncioStyle.optionText,
                      selecionado && AnuncioStyle.optionTextSelected,
                    ]}
                  >
                    {item}
                  </Text>
                </Pressable>
              );
            })}
          </View>
        </View>

        {mensagem !== '' && (
          <Text
            style={[
              AnuncioStyle.feedback,
              sucesso && AnuncioStyle.feedbackSuccess,
            ]}
            accessibilityRole="alert"
          >
            {mensagem}
          </Text>
        )}

        <Pressable
          style={AnuncioStyle.button}
          onPress={revisarAnuncio}
          accessibilityRole="button"
        >
          <Text style={AnuncioStyle.buttonText}>
            Revisar anúncio
          </Text>
        </Pressable>
      </ScrollView>
    </View>
  );
}
