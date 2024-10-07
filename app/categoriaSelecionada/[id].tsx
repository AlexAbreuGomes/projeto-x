import { useLocalSearchParams, useRouter, Stack } from 'expo-router';
import { Text, View, FlatList, Image, StyleSheet, Button, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

// Importe todos os arquivos de dados de produtos
import { carregadores } from '../../data/dataCarregadores';
import { cabos } from '../../data/dataCabos';
import { powerBanks } from '../../data/dataPowerBanks';
import { acessorios } from '../../data/dataAcessorios';
import { ProductItem } from '../../components/product-item';0
import { BackButton } from '../../components/backButton';
import { fones } from '../../data/dataFones';


const screenWidth = Dimensions.get('window').width;

export default function ProductsScreen() {
  const { id } = useLocalSearchParams();  // Pega o ID da categoria da URL
  const router = useRouter();  // Usado para navegação

  // Verifique se o ID é uma string e converta para número
  const categoryId = Array.isArray(id) ? parseInt(id[0]) : parseInt(id as string);

  // Mapeamento das categorias por ID
  const categoryMap: { [key: number]: { name: string, products: any[] } } = {
    1: { name: 'Carregadores', products: carregadores },
    2: { name: 'Cabos', products: cabos },
    3: { name: 'Fones de Ouvido', products: fones },
    4: { name: 'Powerbanks', products: powerBanks },
    5: { name: 'Acessórios', products: acessorios },
    
  };

  // Pega a categoria e os produtos correspondentes
  const category = categoryMap[categoryId]?.name;
  const products = categoryMap[categoryId]?.products;


  // Caso a categoria não exista, retorne null ou uma mensagem de erro
  if (!category || !products) {
    return (
      <>
      
        <Stack.Screen
          options={{
            headerShown: true, 
            title: 'Erro',  
            headerTitleStyle: {
              fontSize: 30,         
              fontFamily: 'Orbitron_700Bold', 
              color: '#0361dd',     
            },
            headerTitleAlign: 'center',
            headerLeft: () => (
              <BackButton onPress={() => router.back()} />  // Botão de voltar
            ),
          }}
        />
  
        <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text style={styles.infoProductNull}>Categoria não encontrada</Text>
          <Text style={styles.infoProductNullEmoji}>😒</Text>
          <Text style={styles.infoProductNull2}>Senta e chora</Text>
        </SafeAreaView>
      </>
    );
  }
  return (
    <>
      <Stack.Screen
        options={{
          headerShown: true, 
          title: category,  
          headerTitleStyle: {
            fontSize: 30,        
            fontFamily: 'Orbitron_700Bold', 
            color: '#0361dd',    
          },
          headerTitleAlign: 'center',
          headerLeft: () => (
            <BackButton onPress={() => router.back()} />  // Botão de voltar
          ),
        }}
      />


      <SafeAreaView style={styles.container}>

        <View style={styles.container} >

          <FlatList
            style={{ flex: 1 }}
            contentContainerStyle={{ paddingBottom: 0 }}
            data={products}

            renderItem={({ item }) => (
              <View style={styles.container}>
                <ProductItem product={item} />
              </View>
            )}
            keyExtractor={(item) => item.id.toString()}
            numColumns={2}  // Exibir 2 itens por linha
            showsHorizontalScrollIndicator={false}
            pagingEnabled={true}
            snapToAlignment="center"
            decelerationRate="fast"
          />
        </View>
      </SafeAreaView>
    </>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1
  },


  touchable: {
    width: '100%',
    height: 200,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 10,
  },

  infoProduct: {
    alignItems: 'center',

    fontFamily: 'Orbitron_600SemiBold',
  },

  infoProductNull: {
    fontSize: 50,
    fontFamily: 'Orbitron_600SemiBold',
    textAlign: 'center',
    margin: 10,
    color: '#0361dd',

  },

  infoProductNull2: {
    fontSize: 45,
    fontFamily: 'Orbitron_600SemiBold',
    textAlign: 'center',
    margin: 10,
    color: '#24cc02',

  },

  infoProductNullEmoji: {
    fontSize: 80,
  
  },

  infoProductPrice: {
    fontSize: 25,
    fontFamily: 'Orbitron_800ExtraBold',
    color: '#24cc02',
  },
  itemWrapper2: {
    width: screenWidth,
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'Orbitron_900Black',
  },
});