import styled from 'styled-components' 
import { Routes,Route } from 'react-router-dom'
import Home from './pages/Home'
import Upload from './pages/Upload'

const Container = styled.div`
  width:100%;
  min-height:100%;
` 

function App() {
  return (
    <Container>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/upload" element={<Upload/>} />
      </Routes>
    </Container>
  )
}

export default App
