import api from './axios.config';

export const getStartGame = async () => {
  try {
    const response = await api.get('/quiz');
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const postQuestion = async (id, question) => {
  try {
    const response = await api.post('/question', { id, question });
    console.log('response', response.data);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const postAnswer = async (id, answer) => {
  try {
    const response = await api.post('/answer', { id, answer });
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const getHint = async (id, num) => {
  try {
    const response = await api.get(`/hint?num=${num}&id=${id}`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
