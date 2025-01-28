interface ProductImageProps {
  imageUrl: string;
  altText: string;
}

export function ProductImage({ imageUrl, altText }: ProductImageProps) {
  return (
    <div className="product-image-container">
      <img src={imageUrl} alt={altText} className="product-image" />
    </div>
  );
}
