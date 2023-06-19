import useBounds from '../../context/bounds/BoundsState';
import AlertPopUp from './components/AlertPopUp';

function PopUp() {
  const { isOutBounds } = useBounds();

  if (isOutBounds) {
    return <AlertPopUp />;
  }
}

export default PopUp;
