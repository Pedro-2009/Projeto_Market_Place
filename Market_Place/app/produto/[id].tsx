
import { useLocalSearchParams, useRouter } from 'expo-router';

import {
  ScrollView,
  Text,
  Pressable,
  View,
} from 'react-native';

import { Ionicons } from '@expo/vector-icons';

import Colors from '../../src/theme/Colors';
import ProdutoStyle from '../../src/theme/ProdutoStyle';

const produtos = {
  '1': {
    nome: 'Smartphone',
    categoria: 'Eletrônicos',
    preco: 'R$ 850,00',
    estado: 'Usado • Bom estado',
    descricao:
      'Produto de demonstração do Market_Place. Aqui será apresentada a descrição completa do anúncio, incluindo suas características e condições.',
    icon: 'phone-portrait-outline' as const,
  },

  '2': {
    nome: 'Tênis casual',
    categoria: 'Moda',
    preco: 'R$ 120,00',
    estado: 'Usado • Bom estado',
    descricao:
      'Produto de demonstração do Market_Place. Aqui será apresentada a descrição completa do anúncio, incluindo suas características e condições.',
    icon: 'footsteps-outline' as const,
  },

  '3': {
    nome: 'Cadeira',
    categoria: 'Casa',
    preco: 'R$ 180,00',
    estado: 'Usado • Bom estado',
    descricao:
      'Produto de demonstração do Market_Place. Aqui será apresentada a descrição completa do anúncio, incluindo suas características e condições.',
    icon: 'bed-outline' as const,
  },

  '4': {
    nome: 'Fone de ouvido',
    categoria: 'Eletrônicos',
    preco: 'R$ 95,00',
    estado: 'Usado • Bom estado',
    descricao:
      'Produto de demonstração do Market_Place. Aqui será apresentada a descrição completa do anúncio, incluindo suas características e condições.',
    icon: 'headset-outline' as const,
  },
};

export default function ProdutoScreen() {
  const router = useRouter();
  const { id } = useLocalSearchParams<{ id: string }>();

  const produto = typeof id === 'string' ? produtos[id as keyof typeof produtos] : undefined;

  if (!produto) {
    return (
      <View
        style={[
          ProdutoStyle.container,
          { justifyContent: 'center', alignItems: 'center', padding: 24 },
        ]}
      >
        <Ionicons
          name="alert-circle-outline"
          size={48}
          color={Colors.textSecondary}
        />

        <Text style={[ProdutoStyle.sectionTitle, { marginTop: 16 }]}>
          Produto não encontrado
        </Text>

        <Pressable
          onPress={() => router.back()}
          accessibilityRole="button"
        >
          <Text style={ProdutoStyle.backText}>
            Voltar
          </Text>
        </Pressable>
      </View>
    );
  }

  return (
    <View style={ProdutoStyle.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={ProdutoStyle.content}
      >
        <Pressable
          style={ProdutoStyle.backButton}
          onPress={() => router.back()}
          accessibilityRole="button"
          accessibilityLabel="Voltar"
        >
          <Ionicons
            name="arrow-back"
            size={21}
            color={Colors.text}
          />

          <Text style={ProdutoStyle.backText}>
            Voltar
          </Text>
        </Pressable>

        <View style={ProdutoStyle.imageContainer}>
          <Ionicons
            name={produto.icon}
            size={76}
            color="#A3A3A3"
          />

          <Text style={ProdutoStyle.imageHint}>
            Imagem ilustrativa
          </Text>
        </View>

        <Text style={ProdutoStyle.category}>
          {produto.categoria}
        </Text>

        <Text style={ProdutoStyle.title}>
          {produto.nome}
        </Text>

        <Text style={ProdutoStyle.price}>
          {produto.preco}
        </Text>

        <Text style={ProdutoStyle.condition}>
          {produto.estado}
        </Text>

        <View style={ProdutoStyle.divider} />

        <Text style={ProdutoStyle.sectionTitle}>
          Sobre o produto
        </Text>

        <Text style={ProdutoStyle.description}>
          {produto.descricao}
        </Text>

        <View style={ProdutoStyle.infoCard}>
          <Ionicons
            name="shield-checkmark-outline"
            size={25}
            color={Colors.icon}
          />

          <View style={ProdutoStyle.infoTextContainer}>
            <Text style={ProdutoStyle.infoTitle}>
              Compre com atenção
            </Text>

            <Text style={ProdutoStyle.infoDescription}>
              Confira as informações do produto antes de
              combinar uma compra.
            </Text>
          </View>
        </View>

        <View style={ProdutoStyle.infoCard}>
          <Ionicons
            name="chatbubble-ellipses-outline"
            size={25}
            color={Colors.icon}
          />

          <View style={ProdutoStyle.infoTextContainer}>
            <Text style={ProdutoStyle.infoTitle}>
              Contato com o vendedor
            </Text>

            <Text style={ProdutoStyle.infoDescription}>
              A comunicação entre comprador e vendedor
              poderá ser implementada futuramente.
            </Text>
          </View>
        </View>

        <Text style={ProdutoStyle.notice}>
          Este é um produto demonstrativo. As informações
          ainda não vêm de um banco de dados.
        </Text>
      </ScrollView>
    </View>
  );
}
