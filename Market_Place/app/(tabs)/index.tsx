
import { useState } from 'react';
import {
  ScrollView,
  Text,
  TextInput,
  Pressable,
  View,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import Colors from '../../src/theme/Colors';
import HomeStyle from '../../src/theme/HomeStyle';

const categories = [
  { name: 'Eletrônicos', icon: 'phone-portrait-outline' as const },
  { name: 'Moda', icon: 'shirt-outline' as const },
  { name: 'Casa', icon: 'home-outline' as const },
  { name: 'Outros', icon: 'grid-outline' as const },
];

const products = [
  {
    id: '1',
    name: 'Smartphone',
    category: 'Eletrônicos',
    price: 'R$ 850,00',
    condition: 'Usado • Bom estado',
    icon: 'phone-portrait-outline' as const,
  },
  {
    id: '2',
    name: 'Tênis casual',
    category: 'Moda',
    price: 'R$ 120,00',
    condition: 'Usado • Bom estado',
    icon: 'footsteps-outline' as const,
  },
  {
    id: '3',
    name: 'Cadeira',
    category: 'Casa',
    price: 'R$ 180,00',
    condition: 'Usado • Bom estado',
    icon: 'bed-outline' as const,
  },
  {
    id: '4',
    name: 'Fone de ouvido',
    category: 'Eletrônicos',
    price: 'R$ 95,00',
    condition: 'Usado • Bom estado',
    icon: 'headset-outline' as const,
  },
];

export default function HomeScreen() {
  const [search, setSearch] = useState('');

  return (
    <View style={HomeStyle.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={HomeStyle.content}
        keyboardShouldPersistTaps="handled"
      >
        <View style={HomeStyle.header}>
          <View>
            <Text style={HomeStyle.brand}>
              Market_Place
            </Text>

            <Text style={HomeStyle.brandSubtitle}>
              Encontre algo que combina com você.
            </Text>
          </View>

          <Pressable
            accessibilityRole="button"
            accessibilityLabel="Notificações"
            style={HomeStyle.headerButton}
            onPress={() => {}}
          >
            <Ionicons
              name="notifications-outline"
              size={21}
              color={Colors.icon}
            />
          </Pressable>
        </View>

        <View style={HomeStyle.searchContainer}>
          <Ionicons
            name="search-outline"
            size={21}
            color={Colors.textSecondary}
          />

          <TextInput
            value={search}
            onChangeText={setSearch}
            placeholder="O que você está procurando?"
            placeholderTextColor={Colors.textSecondary}
            style={HomeStyle.searchInput}
            returnKeyType="search"
            accessibilityLabel="Buscar produtos"
          />
        </View>

        <View style={HomeStyle.section}>
          <View style={HomeStyle.sectionHeader}>
            <Text style={HomeStyle.sectionTitle}>
              Categorias
            </Text>
          </View>

          <View style={HomeStyle.categories}>
            {categories.map((category) => (
              <Pressable
                key={category.name}
                style={HomeStyle.categoryItem}
                accessibilityRole="button"
                accessibilityLabel={category.name}
                onPress={() => setSearch(category.name)}
              >
                <View style={HomeStyle.categoryIcon}>
                  <Ionicons
                    name={category.icon}
                    size={25}
                    color={Colors.icon}
                  />
                </View>

                <Text style={HomeStyle.categoryLabel}>
                  {category.name}
                </Text>
              </Pressable>
            ))}
          </View>
        </View>

        <View style={HomeStyle.section}>
          <View style={HomeStyle.featuredCard}>
            <Text style={HomeStyle.featuredEyebrow}>
              Marketplace
            </Text>

            <Text style={HomeStyle.featuredTitle}>
              Boas descobertas começam aqui.
            </Text>

            <Text style={HomeStyle.featuredDescription}>
              Explore produtos e encontre novas oportunidades.
            </Text>
          </View>
        </View>

        <View style={HomeStyle.section}>
          <View style={HomeStyle.sectionHeader}>
            <Text style={HomeStyle.sectionTitle}>
              Produtos em destaque
            </Text>
          </View>

          <View style={HomeStyle.productsGrid}>
            {products
              .filter((product) => {
                const term = search.trim().toLowerCase();

                return (
                  product.name.toLowerCase().includes(term) ||
                  product.category.toLowerCase().includes(term)
                );
              })
              .map((product) => (
                <Pressable
                  key={product.id}
                  style={HomeStyle.productCard}
                  accessibilityRole="button"
                  accessibilityLabel={`${product.name}, ${product.price}`}
                >
                  <View style={HomeStyle.productImage}>
                    <Ionicons
                      name={product.icon}
                      size={48}
                      color="#A3A3A3"
                    />
                  </View>

                  <Text style={HomeStyle.productCategory}>
                    {product.category}
                  </Text>

                  <Text style={HomeStyle.productName}>
                    {product.name}
                  </Text>

                  <Text style={HomeStyle.productPrice}>
                    {product.price}
                  </Text>

                  <Text style={HomeStyle.productCondition}>
                    {product.condition}
                  </Text>
                </Pressable>
              ))}
          </View>

          {products.filter((product) => {
            const term = search.trim().toLowerCase();

            return (
              product.name.toLowerCase().includes(term) ||
              product.category.toLowerCase().includes(term)
            );
          }).length === 0 && (
            <Text
              style={{
                color: Colors.textSecondary,
                textAlign: 'center',
                marginTop: 12,
              }}
            >
              Nenhum produto encontrado.
            </Text>
          )}
        </View>
      </ScrollView>
    </View>
  );
}
