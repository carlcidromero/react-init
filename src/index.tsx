import React from 'react';
import { createRoot } from 'react-dom/client';

const container = document.getElementById('root');
const root = createRoot(container!);

const App = () => <h1>Hello, world!</h1>;

root.render(<App />);
