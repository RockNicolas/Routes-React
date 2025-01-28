import { Link } from 'react-router-dom';

interface ProductCardProps {
  id: number;
  name: string;
  description: string;
  image: string;
}

export function ProductCard({ id, name, description, image }: ProductCardProps) {
  return (
    <div className="product-box">
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p>{description}</p>
      <Link to={`/produto/${id}`}>Ver detalhes</Link>
    </div>
  );
}
