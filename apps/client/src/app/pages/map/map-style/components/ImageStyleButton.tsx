import Button from '@map-shared-components/Button';

type ImageStyleButtonProps = {
  imgSrc: string;
  style: 'streets' | 'light' | 'dark' | 'satellite';
  onClick: () => void;
  className?: string;
};

function ImageStyleButton({
  imgSrc,
  style,
  onClick,
  className
}: ImageStyleButtonProps) {
  return (
    <Button onClick={onClick} className={className}>
      <img src={imgSrc} alt={style} />
    </Button>
  );
}

ImageStyleButton.defaultProps = {
  className: ''
};

export default ImageStyleButton;
