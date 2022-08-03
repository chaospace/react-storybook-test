import {createRoot} from 'react-dom/client';
const appContainer = document.getElementById('app');

if (appContainer) {
  const root = createRoot(appContainer);
  root.render(<p>Hello World!!</p>);
}
