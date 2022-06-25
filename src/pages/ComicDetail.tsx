import { useParams } from 'react-router-dom';
import styled from 'styled-components'

const ComicDetail = () => {
  const {id} = useParams();
  
  return (
    <Container>
      {id}
    </Container>
  )
}

const Container = styled.div`
  width:100vw;
  min-height:100vh;
`


export default ComicDetail