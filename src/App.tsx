import { Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout.tsx';
import Users from './pages/Users.tsx';

function App() {
  return (
    <Routes>
      <Route path={'/'} element={<Layout />}>
        <Route path={'/'} element={<Users />} />
        <Route path={'users'} element={<Users />} />
        <Route path={'*'} element={<p>Not found</p>} />
      </Route>
    </Routes>
  );
}

export default App;
