import './App.css';
import Header from './Components/Header';
import Card from './Components/Card';
import cardData from './Products';
import { useEffect, useState } from 'react';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredProducts, setFilterProducts] = useState([]);

  const handleChange = (event) => {
    const searchTerm = event.target.value.toLowerCase();
    setSearchTerm(searchTerm);

    const myfilteredProducts = cardData.filter((product) =>
      product.title.toLowerCase().includes(searchTerm)
    );

    setFilterProducts(myfilteredProducts);

    if (searchTerm.length === 0) {
      setFilterProducts(cardData);
    }
  };

  useEffect(() => {
    setFilterProducts(cardData);
  }, []);

  return (
    <div className='App'>
      <Header />
      
      <div className="search-input">
      <div>
        <p>All products in videos</p>
        <input
          type="text"
          placeholder="Search..."
          onChange={handleChange}
          value={searchTerm}
        />
      </div>
      </div>

      <div className="card-container">
        {filteredProducts.map((card) => (
          <Card key={card.id} imageSrc={card.imageSrc} title={card.title} affLink={card.affLink} />
        ))}
      </div>
    </div>
  );
}

export default App;
