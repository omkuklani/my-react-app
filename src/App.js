import logo from './logo.svg';
import './App.css';
import { useEffect , useState} from 'react';


const App=()=> {
  const [user,setuser]=useState([]);
  console.log(user)


	useEffect(()=>{

    const fetchData = async () => {
      try {
        const response = await fetch('https://s3.amazonaws.com/open-to-cors/assignment.json');
        const jsonData = await response.json();

        // Log the response to the console
        console.log('Response:', jsonData);

        // Update the state with the fetched data
        setuser(jsonData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }
  ,[])


	return (
	<div>
			{Object.keys(user.products).map((productId) => {
      const product = user.products[productId];
      return (
        <li key={productId}>
          <strong>Subcategory:</strong> {product.subcategory},{' '}
          <strong>Title:</strong> {product.title},{' '}
          <strong>Price:</strong> {product.price}
        </li>
      );
    })}
			
	</div>
	)
}

export default App;
