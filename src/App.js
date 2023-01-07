import { Routes, Route } from 'react-router-dom'

import Home from "./routes/home/home.component";
import Navigation from './routes/navigation/navigation.component';
import Authetication from './routes/authentication/authentication.component';
import Shop from './routes/shop/shop.component';




const App = () => {

  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="auth" element={<Authetication />} />
      </Route>
    </Routes>
  )

}

export default App;
