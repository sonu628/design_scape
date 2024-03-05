import './App.css'
import { BrowserRouter, useRoutes } from 'react-router-dom';
// import routes from 'virtual:generated-pages-react'
import routes from '~react-pages'
// import routes from 'vite-plugin-react-pages'
// import routes from 'vite-plugin-pages'
// import routes from '~pages'


const AppRoutes = () => {
  const elements = useRoutes(routes);
  return elements;
};

const App = () => {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
};

export default App