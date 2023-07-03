import { LoopOutlined } from '@mui/icons-material';
import ImageStyleButton from './components/ImageStyleButton';
import MapStyleButton from './components/MapStyleButton';
import usePanelMapStyle from './hooks/panelMapStyle';
import useRefPanel from './hooks/useRefPanel';

function MapStyle() {
  const {
    isPanelVisible,
    togglePanel,
    handleImageClick,
    imageStyles,
    setPanelVisible
  } = usePanelMapStyle();

  const ref = useRefPanel({ setIsOpen: setPanelVisible });

  return (
    <div ref={ref}>
      <MapStyleButton onClick={togglePanel} disabled={isPanelVisible}>
        <LoopOutlined />
      </MapStyleButton>

      {isPanelVisible && (
        <div
          className='fixed bottom-10 left-1/2 transform translate-x-[-50%] flex flex-row
          items-center justify-center bg-black/50 text-white font-roboto
          font-bold rounded-lg p-1 md:p-2 lg:p-3 gap-3'
        >
          {Object.keys(imageStyles).map(style => (
            <div key={style} className='flex flex-col'>
              <div
                className='w-16 h-12 md:w-20 md:h-16 lg:w-32 lg:h-28
              grid place-items-center content-center'
              >
                <ImageStyleButton
                  className='h-fit w-fit'
                  onClick={() => handleImageClick(style.toLowerCase())}
                  style={
                    imageStyles[style].style as
                      | 'streets'
                      | 'light'
                      | 'dark'
                      | 'satellite'
                  }
                  imgSrc={imageStyles[style].imgSrc}
                />
              </div>
              <p className='text-center'>{style}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default MapStyle;
