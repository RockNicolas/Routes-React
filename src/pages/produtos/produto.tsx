import { useLocation } from 'react-router-dom';
import { ProductDetails } from '../../components/produtos/ProductDetails';
import './produto.css';

export function Produto() {
  const location = useLocation(); 
  const product = location.state as {
    id: number;
    name: string;
    description: string;
    image: string;
  }; 

  if (!product) {
    return <div>Produto não encontrado!</div>;
  }

  return (
    <div className="produto-container">
      <section className="produto-section">
        <h2>Detalhes do Produto {product.id}</h2>
        <ProductDetails 
          imageUrl={product.image} 
          name={product.name} 
          description={product.description} 
        />
      </section>

      <footer className="produto-footer">
        <p>&copy; 2025 Sua Loja de Tecnologia. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}
