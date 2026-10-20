
import { Pressable, ScrollView, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import { useRouter } from 'expo-router';

import ModalStyle from '../src/theme/ModalStyle';

export default function ModalScreen() {
  const router = useRouter();

  const opcoes = [
    {
      id: 'perfil',
      titulo: 'Minha conta',
      descricao: 'Acesse seu perfil e seus dados.',
      icone: 'person-outline' as const,
      rota: '/(tabs)/perfil',
    },
    {
      id: 'anuncios',
      titulo: 'Meus anúncios',
      descricao: 'Consulte a área de anúncios.',
      icone: 'pricetag-outline' as const,
      rota: '/(tabs)/anuncios',
    },
    {
      id: 'favoritos',
      titulo: 'Meus favoritos',
      descricao: 'Veja seus produtos favoritos.',
      icone: 'heart-outline' as const,
      rota: '/(tabs)/favoritos',
    },
  ];

  return (
    <ScrollView
      contentContainerStyle={ModalStyle.container}
      showsVerticalScrollIndicator={false}
    >
      <StatusBar style="dark" />

      <View style={ModalStyle.content}>
        <View style={ModalStyle.header}>
          <View style={ModalStyle.logoContainer}>
            <Ionicons name="storefront-outline" size={25} color="#FFFFFF" />
          </View>

          <Pressable
            style={ModalStyle.closeButton}
            onPress={() => router.back()}
            accessibilityRole="button"
            accessibilityLabel="Fechar modal"
          >
            <Ionicons name="close" size={22} color="#171717" />
          </Pressable>
        </View>

        <Text style={ModalStyle.title}>
          Como podemos ajudar?
        </Text>

        <Text style={ModalStyle.subtitle}>
          Escolha uma opção para continuar no Market_Place.
        </Text>

        <View style={ModalStyle.optionsContainer}>
          {opcoes.map((opcao, index) => (
            <View key={opcao.id}>
              <Pressable
                style={({ pressed }) => [
                  ModalStyle.option,
                  pressed && { opacity: 0.65 },
                ]}
                onPress={() => router.push(opcao.rota as any)}
                accessibilityRole="button"
              >
                <View style={ModalStyle.optionIconContainer}>
                  <Ionicons
                    name={opcao.icone}
                    size={22}
                    color="#171717"
                  />
                </View>

                <View style={ModalStyle.optionTextContainer}>
                  <Text style={ModalStyle.optionTitle}>
                    {opcao.titulo}
                  </Text>

                  <Text style={ModalStyle.optionDescription}>
                    {opcao.descricao}
                  </Text>
                </View>

                <Ionicons
                  name="chevron-forward"
                  size={19}
                  color="#737373"
                />
              </Pressable>

              {index < opcoes.length - 1 && (
                <View style={ModalStyle.optionDivider} />
              )}
            </View>
          ))}
        </View>

        <View style={ModalStyle.footer}>
          <Text style={ModalStyle.footerText}>
            Market_Place · Simples e prático
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}
