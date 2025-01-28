import { ProductCard } from '../../components/ProductCard';
import './home.css';

interface Product {
  id: number;
  name: string;
  description: string;
  image: string;
}

export function Home() {
  const products: Product[] = [
    { id: 1, name: 'Produto 1', description: 'Descrição breve do produto.', image: 'https://via.placeholder.com/150' },
    { id: 2, name: 'Produto 2', description: 'Descrição breve do produto.', image: 'https://via.placeholder.com/150' },
    { id: 3, name: 'Produto 3', description: 'Descrição breve do produto.', image: 'https://via.placeholder.com/150' },
    { id: 4, name: 'Produto 4', description: 'Descrição breve do produto.', image: 'https://via.placeholder.com/150' },
    { id: 5, name: 'Produto 5', description: 'Descrição breve do produto.', image: 'https://via.placeholder.com/150' },
    { id: 6, name: 'Produto 6', description: 'Descrição breve do produto.', image: 'https://via.placeholder.com/150' },
    { id: 7, name: 'Produto 7', description: 'Descrição breve do produto.', image: 'https://via.placeholder.com/150' },
    { id: 8, name: 'Produto 8', description: 'Descrição breve do produto.', image: 'https://via.placeholder.com/150' },
    { id: 9, name: 'Produto 9', description: 'Descrição breve do produto.', image: 'https://via.placeholder.com/150' },
    { id: 10, name: 'Produto 10', description: 'Descrição breve do produto.', image: 'https://via.placeholder.com/150' },
  ];

  return (
    <div className="home-container">
      <section className="product-section">
        <h2>Nossos Produtos</h2>
        <div className="product-boxes">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              name={product.name}
              description={product.description}
              image={product.image}
            />
          ))}
        </div>
      </section>

      <footer className="home-footer">
        <p>&copy; 2025 Sua Loja de Tecnologia. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}
