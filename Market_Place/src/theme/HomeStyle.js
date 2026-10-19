
import { StyleSheet } from 'react-native';
import Colors from './Colors';

const HomeStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },

  content: {
    paddingHorizontal: 20,
    paddingTop: 18,
    paddingBottom: 28,
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 22,
  },

  brand: {
    color: Colors.text,
    fontSize: 23,
    fontWeight: '800',
    letterSpacing: -0.8,
  },

  brandSubtitle: {
    color: Colors.textSecondary,
    fontSize: 12,
    marginTop: 3,
  },

  headerButton: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: Colors.surfaceSecondary,
    alignItems: 'center',
    justifyContent: 'center',
  },

  searchContainer: {
    height: 50,
    backgroundColor: Colors.surfaceSecondary,
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 14,
    marginBottom: 26,
  },

  searchInput: {
    flex: 1,
    color: Colors.text,
    fontSize: 14,
    marginLeft: 10,
    paddingVertical: 8,
    outlineStyle: 'none',
  },

  section: {
    marginBottom: 28,
  },

  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 15,
  },

  sectionTitle: {
    color: Colors.text,
    fontSize: 19,
    fontWeight: '700',
  },

  sectionAction: {
    color: Colors.textSecondary,
    fontSize: 12,
    fontWeight: '600',
  },

  categories: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  categoryItem: {
    alignItems: 'center',
    width: '23%',
  },

  categoryIcon: {
    width: 58,
    height: 58,
    borderRadius: 18,
    backgroundColor: Colors.surfaceSecondary,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 8,
  },

  categoryLabel: {
    color: Colors.text,
    fontSize: 12,
    fontWeight: '500',
    textAlign: 'center',
  },

  featuredCard: {
    backgroundColor: Colors.primary,
    borderRadius: 18,
    padding: 20,
    minHeight: 145,
    justifyContent: 'center',
  },

  featuredEyebrow: {
    color: '#D4D4D4',
    fontSize: 11,
    fontWeight: '600',
    letterSpacing: 1,
    textTransform: 'uppercase',
    marginBottom: 8,
  },

  featuredTitle: {
    color: '#FFFFFF',
    fontSize: 22,
    fontWeight: '800',
    maxWidth: 250,
  },

  featuredDescription: {
    color: '#D4D4D4',
    fontSize: 13,
    marginTop: 8,
  },

  productsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },

  productCard: {
    width: '48%',
    marginBottom: 18,
  },

  productImage: {
    height: 145,
    borderRadius: 14,
    backgroundColor: Colors.surfaceSecondary,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },

  productCategory: {
    color: Colors.textSecondary,
    fontSize: 11,
    marginBottom: 5,
  },

  productName: {
    color: Colors.text,
    fontSize: 14,
    fontWeight: '500',
    marginBottom: 5,
  },

  productPrice: {
    color: Colors.text,
    fontSize: 17,
    fontWeight: '800',
  },

  productCondition: {
    color: Colors.textSecondary,
    fontSize: 11,
    marginTop: 4,
  },
});

export default HomeStyle;
