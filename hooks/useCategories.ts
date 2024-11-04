import { useState, useEffect } from 'react';
import axios from 'axios';

export const useCategories = () => {
  const [categories, setCategories] = useState([]);
  const [error, setError] = useState<string | null>(null); // Ajuste o tipo para 'string | null'
  const [loading, setLoading] = useState(true);

  const fetchCategories = async () => {
    try {
      const response = await axios.get('https://api-alexabreugomes-alexs-projects-91cb9f2f.vercel.app/categories'); // URL da sua API
      setCategories(response.data); // Atualiza o estado com as categorias recebidas
      setLoading(false); // Atualiza o estado de carregamento
    } catch (err) {
      setError('Erro ao buscar categorias'); // Define a mensagem de erro como string
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCategories(); // Chama a função ao montar o componente
  }, []);

  return { categories, loading, error }; // Retorna o estado e as funções relevantes
};
