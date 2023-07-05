import dark from '@map-assets/dark.png';
import light from '@map-assets/light.png';
import satellite from '@map-assets/satellite.png';
import streets from '@map-assets/streets.png';
import { useState } from 'react';
import useMapStyle from './useMapStyle';

const imageStyles: Record<string, { style: string; imgSrc: string }> = {
  Streets: { style: 'streets', imgSrc: streets },
  Light: { style: 'light', imgSrc: light },
  Dark: { style: 'dark', imgSrc: dark },
  Satellite: { style: 'satellite', imgSrc: satellite }
};

function usePanelMapStyle() {
  const [isPanelVisible, setPanelVisible] = useState(false);
  const { handleStyleClick } = useMapStyle();

  const handleImageClick = (image: string) => {
    handleStyleClick(image);
  };

  const togglePanel = () => {
    setPanelVisible(!isPanelVisible);
  };

  return {
    isPanelVisible,
    togglePanel,
    handleImageClick,
    imageStyles,
    setPanelVisible
  };
}

export default usePanelMapStyle;
