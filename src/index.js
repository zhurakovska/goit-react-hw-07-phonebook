import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';
import { Provider } from 'react-redux';
import { store } from './redux';

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    {/* огортаємо провайдером, передаємо пропс стор для того щоб працював редакс */}
    {/* імпорт стор йде з файлу стро в редаксі */}
    <Provider store={store}>
      <App />
    </Provider>
  </>
);
