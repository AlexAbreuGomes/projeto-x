import { useState } from 'react';
import axios from 'axios';

// Define o tipo de dados para a categoria, sem o ID, pois ele é autoincrementado no banco de dados
type CategoryData = {
  title: string;
  image: string;
};

export const useAddCategory = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  // Função para adicionar uma nova categoria
  const addCategory = async (categoryData: CategoryData) => {
    setIsLoading(true);
    setError(null);
    setSuccess(false);

    try {
      // Usando a URL da API no Vercel
      await axios.post('https://api-alexabreugomes-alexs-projects-91cb9f2f.vercel.app/addCategoria', categoryData);
      setSuccess(true);
    } catch (err) {
      console.error('Erro ao adicionar categoria: ', err);
      setError('Erro ao enviar categoria');
    } finally {
      setIsLoading(false);
    }
  };

  return { addCategory, isLoading, error, success };
};
