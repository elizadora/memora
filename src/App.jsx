import { BrowserRouter } from "react-router-dom"
import AppRoutes from "./routes"

function App() {
  return (
    <BrowserRouter>
      <div className="bg-platium">
        <AppRoutes />
      </div>
    </BrowserRouter>
  )
}

export default App
