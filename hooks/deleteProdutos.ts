import { useState } from 'react';
import axios from 'axios';

export const useDeleteProducts = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const deleteProducts = async (productIds: number[]) => {
    setIsLoading(true);
    setError(null);
    setSuccess(false);

    try {
      await Promise.all(
        productIds.map(id => axios.delete(`https://api-alexabreugomes-alexs-projects-91cb9f2f.vercel.app/deleteProduto/${id}`))
      );
      setSuccess(true);
    } catch (err) {
      console.error('Erro ao excluir produtos: ', err);
      setError('Erro ao excluir produtos.');
    } finally {
      setIsLoading(false);
    }
  };

  return { deleteProducts, isLoading, error, success };
};
