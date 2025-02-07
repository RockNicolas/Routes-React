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
  type: 'completo' | 'acessorios' | null; 
  marca: 'AMD' | 'INTEL' | null;
  monitor: '17' | '18' | '19.5' | '21.5' | '23.8' | '27' | '32' ;
}

export function Home() {
  const [filtro, setFiltro] = useState<string>(''); 
  const [marcaFiltro, setMarcaFiltro] = useState<string>(''); 
  const [monitorFiltro, setMonitorFiltro] = useState<string>('');

  const products: Product[] = [
    { id: 1, name: 'Pc Montado', description: 'Descrição breve do produto.', image: '/asset/pc/pc.jpg', type: 'completo', marca: 'AMD', monitor: '17' },
    { id: 2, name: 'Produto 2', description: 'Descrição breve do produto.', image: '/asset/pc/pc 2.jpg', type: 'completo', marca: 'INTEL', monitor: '17' },
    { id: 3, name: 'Produto 3', description: 'Descrição breve do produto.', image: '/asset/pc/pc 3.jpg', type: 'completo', marca: 'AMD', monitor: '17' },
    { id: 4, name: 'Produto 4', description: 'Descrição breve do produto.', image: '/asset/pc/pc 4.jpg', type: 'completo', marca: 'AMD', monitor: '17' },
    { id: 5, name: 'Produto 5', description: 'Descrição breve do produto.', image: '/asset/pc/pc 5.jpg', type: 'completo', marca: 'INTEL', monitor: '17' },
    { id: 6, name: 'Produto 6', description: 'Descrição breve do produto.', image: '/asset/pc/pc 6.jpg', type: 'completo', marca: 'AMD', monitor: '17' },
    { id: 7, name: 'Produto 7', description: 'Descrição breve do produto.', image: '/asset/pc/pc 7.webp', type: 'completo', marca: 'INTEL', monitor: '17' },
    { id: 8, name: 'Produto 8', description: 'Descrição breve do produto.', image: '/asset/pc/pc 8.jpg', type: 'completo', marca: 'INTEL', monitor: '17' },
    { id: 9, name: 'Produto 9', description: 'Descrição breve do produto.', image: '/asset/pc montado/pc 9.jpg', type: 'acessorios', marca: 'INTEL', monitor: '17' },
    { id: 10, name: 'Produto 10', description: 'Descrição breve do produto.', image: '/asset/pc montado/pc 10.jpg', type: 'acessorios', marca: 'INTEL', monitor: '17' },
    { id: 11, name: 'Monitor Gamer MSI ', description: 'Monitor Gamer MSI MAG275CQRF-QD, 27 Pol, Curvo, Rapid VA, WQHD, 1ms, 170Hz, FreeSync Premium, HDMI/DP, MAG-275CQRF-QD', image: '/asset/monitores/27.jpg', monitor: '27', type: 'completo', marca: 'AMD' },
    { id: 12, name: 'Monitor Aoc', description: 'Monitor Aoc, 1366x768, 60 Hz, HDMI, VGA, 18.5" LED HD, Ajuste De Inclinação, Widescreen - E970swhnl', image: '/asset/monitores/18.jpg', monitor: '19.5', type: 'completo', marca: 'INTEL' },
    { id: 13, name: 'Monitor Gamer LED 17', description: 'Monitor Gamer LED 17 5ms 60 Hz HDMI Vga Fhd Controle Luz Azul', image: '/asset/monitores/17 2.jpg' , monitor: '17', type: 'acessorios', marca: 'AMD' },
    { id: 14, name: 'Monitor VST 17', description: 'Monitor VST 17, 17 Pol, HD, 5ms, 60Hz, HDMI/VGA, VST-VST17-BL01', image: '/asset/monitores/17 3.jpg', monitor: '17', type: 'acessorios', marca: 'INTEL' },
    { id: 15, name: 'MONITOR PHILIPS 21.5', description: 'MONITOR PHILIPS "21.5" LED 221V8 WIDE WVA HDMI PT', image: '/asset/monitores/21.5 3.jpg', monitor: '21.5', type: 'completo', marca: 'AMD' },
    { id: 16, name: 'Monitor Gamer LG', description: 'Monitor Gamer LG, Tela de 21.5" Full HD 75Hz 5ms, Freesync, HDMI - 22MP410-B.AWZM', image: '/asset/monitores/21.5 2.jpg', monitor: '21.5', type: 'completo', marca: 'INTEL' },
    { id: 17, name: 'Monitor Gamer AOC Destiny 25G3ZM 24,5', description: 'Monitor Gamer AOC Destiny 25G3ZM 24,5" Widescreen FULL HD 1920x1080 240Hz 0,5ms AMD FreeSync Premium - Preto', image: '/asset/monitores/24.jpg', monitor: '23.8', type: 'completo', marca: 'AMD' },
    { id: 18, name: 'Monitor Gamer Samsung 27¨', description: 'Monitor Gamer Samsung 27¨ Full Hd 180hz 1ms Odyssey G3 100V/240V', image: '/asset/monitores/27 2.jpg', monitor: '27', type: 'acessorios', marca: 'INTEL' },
    { id: 19, name: 'Monitor Gamer LG, 23,8”', description: 'Monitor Gamer LG, 23,8” Polegadas, Painel IPS, Full HD, 144Hz 1ms, com conexão HDMI e DP, Freesync, 24GN60R', image: '/asset/monitores/24 2.jpg', monitor: '23.8', type: 'acessorios', marca: 'AMD' },
    { id: 20, name: 'Monitor GAMEMAX 32"', description: 'Monitor GAMEMAX 32" Preto Curvo 144Hz 1440P 1ms" Preto Curvo 144Hz 1440P 1ms', image: '/asset/monitores/32.jpg', monitor: '32', type: 'completo', marca: 'INTEL' },
    { id: 21, name: 'Monitor Concórdia Gamer Curvo C32f 32"', description: 'Monitor Concórdia Gamer Curvo C32f 32" 165hz 1ms Led Full Hd - Outlet', image: '/asset/monitores/32 2.jpg', monitor: '32', type: 'completo', marca: 'INTEL' },
];

    const filteredProducts = products.filter((product) => {
    const matchesType = filtro ? product.type === filtro : true;
    const matchesMarca = marcaFiltro ? product.marca === marcaFiltro : true;
    const matchesMonitor = monitorFiltro ? product.monitor === monitorFiltro : true;
    return matchesType && matchesMarca && matchesMonitor;
});

  return (
    <div className="home-container">
      <Filtro onFiltroChange={setFiltro}
       onMarcaChange={setMarcaFiltro}
       onMonitorChange={setMonitorFiltro}
       />
       
 {}

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
