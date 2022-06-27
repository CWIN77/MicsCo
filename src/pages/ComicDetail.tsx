import { useParams } from 'react-router-dom';
import styled from 'styled-components'
import ComicHeader from '../components/comicHeader';


const ComicDetail = () => {
  const {id} = useParams();
  
  return (
    <Container>
      <ComicHeader />
      <ComicImg src=""/>
      <ComicInform>
        <Title>테스트 제목</Title>

      </ComicInform>
    </Container>
  )
}

const Container = styled.div`
  width:100vw;
  min-height:100vh;
`
const ComicImg = styled.img`
  padding:0.5rem 1rem;
  padding-bottom: 0.75rem;
  width:calc(100vw - 2rem);
  height:calc((100vw - 2rem) / 7 * 10);
  border-radius: 18px;
`
const ComicInform = styled.div`
  padding: 0px 1.5rem;
`
const Title = styled.h1`
  font-size: 24px;
  padding: 2px 0px;
`


export default ComicDetail