import { useParams } from 'react-router-dom';
import { ProductDetails } from '../../components/produtos/ProductDetails';
import './produto.css';

export function Produto() {
  const { id } = useParams<{ id: string }>();

  const product = {
    id,
    name: `Produto ${id}`,
    description: `Descrição detalhada do produto ${id}. Aqui você pode adicionar mais informações sobre o produto, características, preço, etc.`,
    imageUrl: 'https://via.placeholder.com/300',
  };

  return (
    <div className="produto-container">
      <section className="produto-section">
        <h2>Detalhes do Produto {id}</h2>
        <ProductDetails 
          imageUrl={product.imageUrl} 
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
