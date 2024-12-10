import axios from 'axios';

const BASE_URL = 'https://x3pq6nlu7h.execute-api.us-east-2.amazonaws.com/Sandbox/';

const apiService = axios.create({
  baseURL: BASE_URL

});

export const getUsers = async () => {
  try {
    const response =  await apiService.get('GetActivatePersonas');
    console.log("LA DATA ES ",response)
    return response.data;
    
  } catch (error) {
    console.error('Error fetching users:', error);
  }
};


export const getUserId = async (userId) => {
    try {
      const response = await apiService.get(`GetPersonaId?idPersona=${userId}`);
      return response.data;
    } catch (error) {
      console.error(`Error deleting user ${userId}:`, error);
    }
  };

export const createUser = async (userData) => {
  try {
    const response = await apiService.post('CreatePersona', userData);
    return response.data;
  } catch (error) {
    console.error('Error creating user:', error);
  }
};

export const updateUser = async (userData) => {
  try {
    const response = await apiService.put(`UpdatePersona`, userData);
    return response.data;
  } catch (error) {
    console.error(`Error updating user`, error);
  }
};

export const deleteUser = async (userId) => {
  try {
    const response=await apiService.delete(`/DeletePersona?idPersona=${userId}`);
    return response.data;
  } catch (error) {
    console.error(`Error deleting user ${userId}:`, error);
  }
};



export default apiService;