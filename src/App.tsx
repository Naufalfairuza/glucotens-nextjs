import { Route, Routes } from 'react-router-dom'
import CardiovascularActivity from './pages/CardiovascularActivity'
import Detail from './pages/Detail'
import DetailNews2 from './pages/DetailNews2'
import DetailNews3 from './pages/DetailNews3'
import DetailNews4 from './pages/DetailNews4'
import GulaDarah from './pages/GulaDarah'
import Home from './pages/Home'
import KalkulatorBMI from './pages/KalkulatorBMI'
import KalkulatorKalori from './pages/KalkulatorKalori'
import TekananDarah from './pages/TekananDarah'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/detail" element={<Detail />} />
      <Route path="/detail-news-2" element={<DetailNews2 />} />
      <Route path="/detail-news-3" element={<DetailNews3 />} />
      <Route path="/detail-news-4" element={<DetailNews4 />} />
      <Route path="/gula-darah" element={<GulaDarah />} />
      <Route path="/tekanan-darah" element={<TekananDarah />} />
      <Route path="/kalkulator-bmi" element={<KalkulatorBMI />} />
      <Route path="/kalkulator-kalori" element={<KalkulatorKalori />} />
      <Route path="/cardiovascular-activity" element={<CardiovascularActivity />} />
    </Routes>
  )
}

export default App
