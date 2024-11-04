import { useState } from 'react';
import axios from 'axios'; // Importa o axios
import { Product } from '../types/product'; // Ajuste o caminho conforme necessário

export const useAddProduct = () => {
  const [isLoading, setIsLoading] = useState(false); // Estado para controle do carregamento
  const [error, setError] = useState<string | null>(null); // Ajuste o tipo para 'string | null'
  const [success, setSuccess] = useState(false); // Estado para capturar sucesso na inserção

  // Função para adicionar um novo produto
  const addProduct = async (productData: Omit<Product, 'id'>) => {
    setIsLoading(true); // Define o estado de carregamento como verdadeiro
    setError(null); // Reseta o estado de erro
    setSuccess(false); // Reseta o estado de sucesso

    try {
      // Faz uma requisição POST para adicionar o produto usando a URL da API no Vercel
      await axios.post('https://api-alexabreugomes-alexs-projects-91cb9f2f.vercel.app/addProduto/', productData);

      setSuccess(true); // Define o estado de sucesso como verdadeiro
    } catch (err) {
      console.error('Erro ao adicionar produto: ', err);
      setError('Erro ao enviar produtos'); // Armazena o erro no estado
    } finally {
      setIsLoading(false); // Define o estado de carregamento como falso após a operação
    }
  };

  return { addProduct, isLoading, error, success }; // Retorna a função e estados relacionados
};
