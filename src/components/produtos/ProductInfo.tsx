interface ProductInfoProps {
  name: string;
  description: string;
}

export function ProductInfo({ name, description }: ProductInfoProps) {
  return (
    <div className="product-info">
      <h3>{name}</h3>
      <p>{description}</p>
    </div>
  );
}
