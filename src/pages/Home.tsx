import styled from 'styled-components'
import TopBar from '../components/topBar'
import Comic from '../components/comic'

// micsco.link

const Home = () => {
  return (
    <Container>
      <TopBar/>
      <Comic/>
      <Comic/>
      <Comic/>
      <Comic/>
      <Comic/>
      <Comic/>
    </Container>
  )
}

const Container = styled.div`
  width:100vw;
  min-height:100vh;
  font-size:18px;
  font-weight: 600;
`
export default Home