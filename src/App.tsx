import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import Products from './components/Products/Products';
import './App.css';
import { Header } from './components/Header/Header';
import Cart from './components/Cart/Cart';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
const queryClient = new QueryClient()
function App() {
  return (
   <>
    <QueryClientProvider client={queryClient}>
   <Router>
   <Header />
     <Routes>
       <Route path="/" element={<Products />} />
       <Route path="/cart" element={<Cart />} />
     </Routes>
   </Router>
    </QueryClientProvider>
   </>
  );
}



export default App;
