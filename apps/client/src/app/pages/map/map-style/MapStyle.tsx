import { LoopOutlined } from '@mui/icons-material';
import ImageStyleButton from './components/ImageStyleButton';
import MapStyleButton from './components/MapStyleButton';
import usePanelMapStyle from './hooks/panelMapStyle';

function MapStyle() {
  const { isPanelVisible, togglePanel, handleImageClick, imageStyles } =
    usePanelMapStyle();

  return (
    <div className='absolute right-5 bottom-[140px] rounded-full md:right-8 md:bottom-30 lg:right-8 lg:bottom-30'>
      <MapStyleButton onClick={togglePanel} disabled={isPanelVisible}>
        <LoopOutlined />
      </MapStyleButton>

      {isPanelVisible && (
        <div className='fixed bottom-10 left-1/2 transform translate-x-[-50%] flex flex-row items-center justify-center bg-white bg-opacity-70 rounded-lg p-4 md:p-5 lg:p-6'>
          {Object.keys(imageStyles).map(style => (
            <div
              key={style}
              className='p-1 rounded-lg md:p-2 lg:p-3'
              style={{
                overflowX: 'hidden'
              }}
            >
              <ImageStyleButton
                onClick={() => handleImageClick(style)}
                style={
                  imageStyles[style].style as
                    | 'streets'
                    | 'light'
                    | 'dark'
                    | 'satellite'
                }
                imgSrc={imageStyles[style].imgSrc}
                className='w-16 h-16 md:w-24 md:h-24 lg:w-32 lg:h-32'
              />
              <p className='text-center mt-2'>{style}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default MapStyle;
