import { ProductImage } from './ProductImage';
import { ProductInfo } from './ProductInfo';

interface ProductDetailsProps {
  imageUrl: string;
  name: string;
  description: string;
}

export function ProductDetails({ imageUrl, name, description }: ProductDetailsProps) {
  return (
    <div className="product-details-container">
      <ProductImage imageUrl={imageUrl} altText={name} />
      <ProductInfo name={name} description={description} />
    </div>
  );
}
