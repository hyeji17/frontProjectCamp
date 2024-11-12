import { BrowserRouter, Routes, Route } from "react-router-dom"
/** 페이지 컴포넌트 */
import HomePage from "./views/Home"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
      </Routes>
    </BrowserRouter>
  )
}
