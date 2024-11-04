import { useEffect, useState } from 'react';
import axios from 'axios'; // Importa o axios
import { Product } from '../types/product'; // Ajuste o caminho conforme necessário

export const useProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);

  // Função para buscar produtos usando axios
  const fetchProducts = async () => {
    try {
      // Usando a URL da API no Vercel
      const response = await axios.get('https://api-alexabreugomes-alexs-projects-91cb9f2f.vercel.app/products');
      return response.data; // Retorna os produtos recebidos
    } catch (error) {
      console.error('Erro ao buscar produtos: ', error);
      return []; // Retorna um array vazio em caso de erro
    }
  };

  const loadProducts = async () => {
    try {
      const productsData = await fetchProducts();
      setProducts(productsData); // Armazena os produtos recebidos no estado
    } catch (error) {
      console.error('Erro ao carregar produtos: ', error);
    }
  };

  useEffect(() => {
    loadProducts(); // Chama a função para buscar produtos ao iniciar o hook
  }, []);

  return products; // Retorna a lista de produtos
};
