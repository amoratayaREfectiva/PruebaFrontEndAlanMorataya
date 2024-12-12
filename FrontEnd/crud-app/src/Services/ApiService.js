import axios from 'axios';

const BASE_URL = 'https://4huf2k1ud0.execute-api.us-east-2.amazonaws.com/Sandbox/';

const apiService = axios.create({
  baseURL: BASE_URL

});

export const getPersonas = async () => {
  try {
    const response =  await apiService.get('GetActivatePersonas');
 
    return response.data;
    
  } catch (error) {
    console.error('Error fetching Personas:', error);
  }
};


export const getPersonaId = async (PersonaId) => {
    try {
      const response = await apiService.get(`GetPersonaId?idPersona=${PersonaId}`);
      return response.data;
    } catch (error) {
      console.error(`Error deleting Persona ${PersonaId}:`, error);
    }
  };

export const createPersona = async (PersonaData) => {
  try {
    const response = await apiService.post('CreatePersona', PersonaData);
    return response.data;
  } catch (error) {
    console.error('Error creating Persona:', error);
  }
};

export const updatePersona = async (PersonaData) => {
  try {
    const response = await apiService.put(`UpdatePersona`, PersonaData);
    return response.data;
  } catch (error) {
    console.error(`Error updating Persona`, error);
  }
};

export const deletePersona = async (PersonaId) => {
  try {
    const response=await apiService.delete(`/DeletePersona?idPersona=${PersonaId}`);
    return response.data;
  } catch (error) {
    console.error(`Error deleting Persona ${PersonaId}:`, error);
  }
};



export default apiService;