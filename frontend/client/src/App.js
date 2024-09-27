import React, { useEffect, useState } from 'react';
import { fetchBackendData } from './api';

function App() {
   const [message, setMessage] = useState('');

   useEffect(() => {
      fetchBackendData()
         .then(response => setMessage(response.data))
         .catch(error => console.error('Error fetching data:', error));
   }, []);

   return (
      <div>
         <h1>{message}</h1>
      </div>
   );
}

export default App;

