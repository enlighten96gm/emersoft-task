import { PostType, CategoriesType } from './../../lib/data';
import { useEffect } from 'react';
import { useState } from 'react';
import { url } from '../constants/constants';

type postsType = {
    message: string
    posts: PostType[]
    currentPage: number
    totalPages: number
}

type categoriesType = {
    message: string
    categories: CategoriesType[]
}

const useFetch = (path: string, page: number, title?: string, category?: string) => {    
  const [data, setData] = useState<postsType | categoriesType | null>(null)
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>('');
  
    useEffect(() => {
        const fetchData = async () => {
            try {
            setLoading(true)
            const query = `?page=${page}${title && '&title='}${title}${category && '&category='}${category}`
            const response = await fetch(`${url}${path}${query}`);
    
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
    
            const jsonData = await response.json();
            setData(jsonData);
          } catch (error) {
            setError(JSON.stringify(error));
          } finally {
            setLoading(false)
          }
        }
        fetchData();
    }, [path, page, title, category]);
    
    return { data, loading, error };
}

export default useFetch