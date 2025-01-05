// import { useNavigate } from 'react-router-dom';
// import API from '../api';
// const Logout = async () => {
//   const navigate = useNavigate();
  
//   try {
//     const response = await API.post('/logout', {}, { withCredentials: true });

//     if (response.status === 200) {
//       // Clear localStorage or sessionStorage
//       localStorage.removeItem('token');
//       localStorage.removeItem('user');

//       // Redirect to login page
//       navigate('/login');
//     }
//   } catch (error) {
//     console.error('Error during logout:', error.message);
//   }
// };

// export default Logout;
