import { Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout.tsx';
import Users from './pages/Users.tsx';
import NotFound from './components/NotFound.tsx';

function App() {
  return (
    <Routes>
      <Route path={'/'} element={<Layout />}>
        <Route path={'/'} element={<Users />} />
        <Route path={'users'} element={<Users />} />
        <Route path={'*'} element={<NotFound/>} />
      </Route>
    </Routes>
  );
}

export default App;
