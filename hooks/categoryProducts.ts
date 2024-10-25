import { useEffect, useState } from 'react';
import axios from 'axios';

// Definindo o tipo do parâmetro
const useFetchProducts = (categoryId: string | number | null) => {
  const [products, setProducts] = useState<any[]>([]); // Especificando que 'produtos' é um array de qualquer tipo
  const [loading, setLoading] = useState<boolean>(true); // 'loading' é um booleano
  const [error, setError] = useState<string | null>(null); // 'error' é uma string ou nulo

  useEffect(() => {
    const fetchProdutos = async () => {
      setLoading(true); // Inicia o carregamento
      try {
        const response = await axios.get(`http://192.168.0.17:3000/produtosCategoria?categoryId=${categoryId}`);
        // const response = await axios.get(`https://eaf8-2804-29b8-50c6-c618-3071-4714-ff08-1af8.ngrok-free.app/produtosCategoria?categoryId=${categoryId}`);
        console.log(response.data); // Verificar o que está sendo retornado
        setProducts(response.data); // Acessa os dados diretamente do response.data
      } catch (err) {
        if (axios.isAxiosError(err)) {
          // Verifica se o erro é um erro do Axios
          setError(err.message); // Captura a mensagem de erro do Axios
        } else if (err instanceof Error) {
          // Verifica se o erro é uma instância de Error
          setError(err.message); // Captura a mensagem de erro
        } else {
          setError('Erro desconhecido'); // Para outros tipos de erro
        }
      } finally {
        setLoading(false); // Finaliza o carregamento
      }
    };

    if (categoryId) {
      fetchProdutos(); // Chama a função de busca se categoryId estiver disponível
    }
  }, [categoryId]);

  return { products, loading, error };
};

export default useFetchProducts;
