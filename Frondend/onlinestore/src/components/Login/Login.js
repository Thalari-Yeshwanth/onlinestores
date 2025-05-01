import axios from 'axios';

// Function to handle login
export const Login = async (username, password) => {
  try {
    // API call to login
    const response = await axios.post(
      'https://online-storeservice-production.up.railway.app/onlinestores/user/login',
      { username, password }
    );
    
    // Return the response if successful
    return response.data;
  } catch (error) {
    // Return error message if login fails
    throw new Error('Invalid credentials. Please try again.');
  }
};
