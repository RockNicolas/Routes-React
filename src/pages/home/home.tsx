import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ProductCard } from '../../components/home/ProductCard';
import Filtro from '../../components/filtro/filtro'; 
import './home.css';

interface Product {
  id: number;
  name: string;
  description: string;
  image: string;
  type: 'completo' | 'acessorios'; 
  marca: 'AMD' | 'INTEL';
  monitor: '17"' | '18"' | '19.5"' | '21.5"' | '23.8"' | '27""'
}

export function Home() {
  const [filtro, setFiltro] = useState<string>(''); 
  const [marcaFiltro, setMarcaFiltro] = useState<string>(''); 

  const products: Product[] = [
    { id: 1, name: 'Pc Montado', description: 'Descrição breve do produto.', image: '/asset/img/pc/pc.jpg', type: 'completo', marca: 'AMD', monitor: '17"' },
    { id: 2, name: 'Produto 2', description: 'Descrição breve do produto.', image: '/asset/img/pc/pc 2.jpg', type: 'completo', marca: 'INTEL', monitor: '17"' },
    { id: 3, name: 'Produto 3', description: 'Descrição breve do produto.', image: '/asset/img/pc/pc 3.jpg', type: 'completo', marca: 'AMD', monitor: '17"' },
    { id: 4, name: 'Produto 4', description: 'Descrição breve do produto.', image: '/asset/img/pc/pc 4.jpg', type: 'completo', marca: 'AMD', monitor: '17"' },
    { id: 5, name: 'Produto 5', description: 'Descrição breve do produto.', image: '/asset/img/pc/pc 5.jpg', type: 'completo', marca: 'INTEL', monitor: '17"' },
    { id: 6, name: 'Produto 6', description: 'Descrição breve do produto.', image: '/asset/img/pc/pc 6.jpg', type: 'completo', marca: 'AMD', monitor: '17"' },
    { id: 7, name: 'Produto 7', description: 'Descrição breve do produto.', image: '/asset/img/pc/pc 7.webp', type: 'completo', marca: 'INTEL', monitor: '17"' },
    { id: 8, name: 'Produto 8', description: 'Descrição breve do produto.', image: '/asset/img/pc/pc 8.jpg', type: 'completo', marca: 'INTEL', monitor: '17"' },
    { id: 9, name: 'Produto 9', description: 'Descrição breve do produto.', image: '/asset/img/pc montado/pc 9.jpg', type: 'acessorios', marca: 'INTEL', monitor: '17"' },
    { id: 10, name: 'Produto 10', description: 'Descrição breve do produto.', image: '/asset/img/pc montado/pc 10.jpg', type: 'acessorios', marca: 'INTEL', monitor: '17"' },
    { id: 11, name: 'Produto 11', description: 'Descrição breve do produto.', image: '/asset/img/pc/pc.jpg', monitor: '17"', type: 'completo', marca: 'AMD' },
    { id: 12, name: 'Produto 12', description: 'Descrição breve do produto.', image: '/asset/img/pc/pc 2.jpg', monitor: '19.5"', type: 'completo', marca: 'INTEL' },
    { id: 13, name: 'Produto 13', description: 'Descrição breve do produto.', image: '/asset/img/pc/pc 3.jpg', monitor: '19.5"', type: 'acessorios', marca: 'AMD' },
    { id: 14, name: 'Produto 14', description: 'Descrição breve do produto.', image: '/asset/img/pc/pc 4.jpg', monitor: '19.5"', type: 'acessorios', marca: 'INTEL' },
    { id: 15, name: 'Produto 15', description: 'Descrição breve do produto.', image: '/asset/img/pc/pc 5.jpg', monitor: '19.5"', type: 'completo', marca: 'AMD' },
    { id: 16, name: 'Produto 16', description: 'Descrição breve do produto.', image: '/asset/img/pc/pc 6.jpg', monitor: '19.5"', type: 'completo', marca: 'INTEL' },
    { id: 17, name: 'Produto 17', description: 'Descrição breve do produto.', image: '/asset/img/pc/pc 7.webp', monitor: '19.5"', type: 'completo', marca: 'AMD' },
    { id: 18, name: 'Produto 18', description: 'Descrição breve do produto.', image: '/asset/img/pc/pc 8.jpg', monitor: '19.5"', type: 'acessorios', marca: 'INTEL' },
    { id: 19, name: 'Produto 19', description: 'Descrição breve do produto.', image: '/asset/img/pc montado/pc 9.jpg', monitor: '19.5"', type: 'acessorios', marca: 'AMD' },
    { id: 20, name: 'Produto 20', description: 'Descrição breve do produto.', image: '/asset/img/pc montado/pc 10.jpg', monitor: '19.5"', type: 'completo', marca: 'INTEL' },
];

  const filteredProducts = products.filter((product) => {
  const matchesType = filtro ? product.type === filtro : true;
  const matchesMarca = marcaFiltro ? product.marca === marcaFiltro : true;
  return matchesType && matchesMarca;
});


  return (
    <div className="home-container">
      <Filtro onFiltroChange={setFiltro} onMarcaChange={setMarcaFiltro} /> {}

      <section className="product-section" style={{ marginLeft: '270px', marginTop: '-220px' }}>
        <h2>Nossos Produtos</h2>
        <div className="product-boxes">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <Link 
                to={`/produto/${product.id}`} 
                key={product.id} 
                state={product} 
              >
                <ProductCard
                  id={product.id}
                  name={product.name}
                  description={product.description}
                  image={product.image}
                />
              </Link>
            ))
          ) : (
            <p>Nenhum produto encontrado para o filtro selecionado.</p>
          )}
        </div>
      </section>

      <footer className="home-footer">
        <p>&copy; 2025 Sua Loja de Tecnologia. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}
