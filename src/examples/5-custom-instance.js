import { useEffect } from 'react';
import authFetch from '../axios/custome';
import axios from 'axios';

const randomUserUrl = 'https://randomuser.me/api';

const CustomInstance = () => {
  const fetchData = async () => {
    try {
      const rep1 = await authFetch('/react-store-products')
      const rep2 = await axios(randomUserUrl)
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return <h2 className='text-center'>custom instance</h2>;
};
export default CustomInstance;
