// src/hooks/useProductById.ts
import { useEffect, useState } from 'react';
import axios from 'axios'; // Importa o axios
import { Product } from '../types/product'; // Ajuste o caminho conforme necessário

export const useProductById = (id: string) => {
  const [product, setProduct] = useState<Product | null>(null); // Estado para armazenar o produto
  const [loading, setLoading] = useState(true); // Estado para controlar o carregamento
  const [error, setError] = useState<string | null>(null); // Estado para armazenar erros

  // Função para buscar o produto usando axios
  const fetchProductById = async () => {
    try {
      // URL da sua API com o ID passado como parâmetro de consulta
      const response = await axios.get(`http://192.168.0.17:3000/produtosDetalhes?Id=${id}`); 
      setProduct(response.data); // Armazena o produto no estado
    } catch (error) {
      console.error('Erro ao buscar produto: ', error);
      setError('Erro ao buscar produto'); // Atualiza o estado de erro
    } finally {
      setLoading(false); // Finaliza o carregamento
    }
  };

  useEffect(() => {
    fetchProductById(); // Chama a função para buscar o produto ao iniciar o hook
  }, [id]);

  return { product, loading, error }; // Retorna o produto, o estado de carregamento e o erro
};
