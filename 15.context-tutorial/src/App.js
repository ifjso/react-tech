import React from 'react';
import ColorBox from './components/ColorBox';
import { ColorProvider } from './contexts/color';

const App = () => (
  <ColorProvider>
    <div>
      <ColorBox />
    </div>
  </ColorProvider>
);

export default App;
