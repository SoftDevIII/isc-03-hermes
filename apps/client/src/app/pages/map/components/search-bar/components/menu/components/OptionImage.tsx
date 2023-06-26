import Image from '@map-shared-components/Image';

function OptionImage({ src }: OptionImageProps) {
  return (
    <Image
      className='h-5 w-5 portrait:h-5 portrait:w-5 portrait:md:h-8 portrait:md:w-8'
      src={src}
    />
  );
}

export default OptionImage;
