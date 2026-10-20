
import {
  ScrollView,
  Text,
  View,
} from 'react-native';

import { Ionicons } from '@expo/vector-icons';

import Colors from '../../src/theme/Colors';
import FavoritosStyle from '../../src/theme/FavoritosStyle';

export default function FavoritosScreen() {
  return (
    <View style={FavoritosStyle.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={FavoritosStyle.content}
      >
        <View style={FavoritosStyle.header}>
          <Text style={FavoritosStyle.title}>
            Meus favoritos
          </Text>

          <Text style={FavoritosStyle.subtitle}>
            Guarde os produtos que chamaram sua atenção
            e encontre-os facilmente depois.
          </Text>
        </View>

        <View style={FavoritosStyle.emptyContainer}>
          <View style={FavoritosStyle.iconContainer}>
            <Ionicons
              name="heart-outline"
              size={48}
              color={Colors.icon}
            />
          </View>

          <Text style={FavoritosStyle.emptyTitle}>
            Nenhum favorito por enquanto
          </Text>

          <Text style={FavoritosStyle.emptyDescription}>
            Quando você adicionar produtos aos favoritos,
            eles aparecerão aqui para facilitar sua busca.
          </Text>

          <Text style={FavoritosStyle.hint}>
            Suas próximas descobertas começam na tela Início.
          </Text>
        </View>
      </ScrollView>
    </View>
  );
}
