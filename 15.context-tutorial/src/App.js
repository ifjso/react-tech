import React from 'react';
import ColorBox from './components/ColorBox';
import { ColorProvider } from './contexts/color';
import SelectColors from './components/SelectColors';

const App = () => (
  <ColorProvider>
    <div>
      <SelectColors />
      <ColorBox />
    </div>
  </ColorProvider>
);

export default App;
