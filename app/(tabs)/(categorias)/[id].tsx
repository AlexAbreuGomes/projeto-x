// import { useLocalSearchParams } from 'expo-router';
// import { Text, View, FlatList, Image, StyleSheet } from 'react-native';
// import { list } from '../../../data/datasmartphone'; // Sua lista de produtos
// import { SafeAreaView } from 'react-native-safe-area-context';

// export default function ProductsScreen() {
//   const { id } = useLocalSearchParams();  // Pega o ID da categoria da URL

//   // Verifique se o ID é uma string e converta para número
//   const categoryId = Array.isArray(id) ? parseInt(id[0]) : parseInt(id as string);

//   // Mapeamento das categorias por ID
//   const categoryMap: { [key: number]: string } = {
//     1: 'carregadores',
//   };

//   const category = categoryMap[categoryId];  // Pega a categoria correspondente
//   const filteredProducts = list.filter((product: { category: string }) => product.category === category);  // Filtra os produtos pela categoria

//   return (
//     <SafeAreaView style={{ flex: 1 }}>  
//       <View style={{ flex: 1, padding: 20 }}>
//         <Text style={styles.title}> {category}</Text>

//         <FlatList
//           style={{ flex: 1 }}  
//           contentContainerStyle={{ paddingBottom: 20 }}  
//           data={filteredProducts}
//           keyExtractor={item => item.id.toString()}
//           renderItem={({ item }) => (
//             <View style={styles.product}>
//               <Image source={{ uri: item.image }} style={styles.image} />
//               <Text style={styles.name}>{item.name}</Text>
//               <Text style={styles.price}>R$ {item.price.toFixed(2)}</Text>
//             </View>
//           )}
//         />
//       </View>
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   title: { fontSize: 24, fontWeight: 'bold', marginBottom: 10 },
//   product: { marginBottom: 20 },
//   image: { width: 100, height: 100 },
//   name: { fontSize: 16, fontWeight: 'bold' },
//   price: { fontSize: 14, color: 'gray' },
// });

