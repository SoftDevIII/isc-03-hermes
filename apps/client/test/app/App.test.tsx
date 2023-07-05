import App from '@src/App';
import { render } from '@testing-library/react';

test('should display App', () => {
  beforeAll(() => render(<App />));
});
