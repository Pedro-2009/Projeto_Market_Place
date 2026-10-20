
import {
  ScrollView,
  Text,
  View,
} from 'react-native';

import { Ionicons } from '@expo/vector-icons';

import Colors from '../../src/theme/Colors';
import PerfilStyle from '../../src/theme/PerfilStyle';

export default function PerfilScreen() {
  return (
    <View style={PerfilStyle.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={PerfilStyle.content}
      >
        <View style={PerfilStyle.header}>
          <Text style={PerfilStyle.title}>Meu perfil</Text>

          <Text style={PerfilStyle.subtitle}>
            Gerencie suas informações e preferências.
          </Text>
        </View>

        <View style={PerfilStyle.profileCard}>
          <View style={PerfilStyle.avatar}>
            <Ionicons
              name="person-outline"
              size={34}
              color={Colors.icon}
            />
          </View>

          <View style={PerfilStyle.userInfo}>
            <Text style={PerfilStyle.userName}>
              Visitante
            </Text>

            <Text style={PerfilStyle.userEmail}>
              Entre na sua conta para ver seus dados.
            </Text>
          </View>
        </View>

        <View style={PerfilStyle.section}>
          <Text style={PerfilStyle.sectionTitle}>
            Minha conta
          </Text>

          <View style={PerfilStyle.optionRow}>
            <View style={PerfilStyle.optionIcon}>
              <Ionicons
                name="person-outline"
                size={20}
                color={Colors.icon}
              />
            </View>

            <View style={PerfilStyle.optionContent}>
              <Text style={PerfilStyle.optionTitle}>
                Dados pessoais
              </Text>

              <Text style={PerfilStyle.optionDescription}>
                Nome, e-mail e informações da conta.
              </Text>
            </View>

            <Ionicons
              name="chevron-forward"
              size={20}
              color={Colors.textSecondary}
            />
          </View>

          <View style={PerfilStyle.optionRow}>
            <View style={PerfilStyle.optionIcon}>
              <Ionicons
                name="pricetag-outline"
                size={20}
                color={Colors.icon}
              />
            </View>

            <View style={PerfilStyle.optionContent}>
              <Text style={PerfilStyle.optionTitle}>
                Meus anúncios
              </Text>

              <Text style={PerfilStyle.optionDescription}>
                Consulte os produtos que você anunciou.
              </Text>
            </View>

            <Ionicons
              name="chevron-forward"
              size={20}
              color={Colors.textSecondary}
            />
          </View>
        </View>

        <View style={PerfilStyle.section}>
          <Text style={PerfilStyle.sectionTitle}>
            Preferências e suporte
          </Text>

          <View style={PerfilStyle.optionRow}>
            <View style={PerfilStyle.optionIcon}>
              <Ionicons
                name="settings-outline"
                size={20}
                color={Colors.icon}
              />
            </View>

            <View style={PerfilStyle.optionContent}>
              <Text style={PerfilStyle.optionTitle}>
                Configurações
              </Text>

              <Text style={PerfilStyle.optionDescription}>
                Preferências do aplicativo.
              </Text>
            </View>

            <Ionicons
              name="chevron-forward"
              size={20}
              color={Colors.textSecondary}
            />
          </View>

          <View style={PerfilStyle.optionRow}>
            <View style={PerfilStyle.optionIcon}>
              <Ionicons
                name="help-circle-outline"
                size={20}
                color={Colors.icon}
              />
            </View>

            <View style={PerfilStyle.optionContent}>
              <Text style={PerfilStyle.optionTitle}>
                Ajuda e suporte
              </Text>

              <Text style={PerfilStyle.optionDescription}>
                Informações para utilizar o marketplace.
              </Text>
            </View>

            <Ionicons
              name="chevron-forward"
              size={20}
              color={Colors.textSecondary}
            />
          </View>
        </View>

        <View style={PerfilStyle.logoutRow}>
          <Ionicons
            name="log-out-outline"
            size={20}
            color={Colors.text}
          />

          <Text style={PerfilStyle.logoutText}>
            Sair da conta
          </Text>
        </View>

        <Text style={PerfilStyle.footer}>
          Market_Place
        </Text>
      </ScrollView>
    </View>
  );
}
