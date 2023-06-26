function Image({ src, className = '' }: ImageProps) {
  return <img className={className} src={src} alt={src} draggable={false} />;
}

export default Image;
