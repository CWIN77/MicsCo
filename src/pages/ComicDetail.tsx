import { useParams } from 'react-router-dom';
import styled from 'styled-components'
import ComicHeader from '../components/comicHeader';


const ComicDetail = () => {
  const {id} = useParams();
  
  return (
    <Container>
      <ComicHeader />
      <ComicImg src="https://micsco.s3.ap-northeast-2.amazonaws.com/220625201234OcpW.jpg"/>
      
    </Container>
  )
}

const Container = styled.div`
  width:100vw;
  min-height:100vh;
`
const ComicImg = styled.img`
  padding:0.75rem;
  padding-top: 0.25rem;
  width:calc(100vw - 1.5rem);
  height:calc((100vw - 1.5rem) / 7 * 10);
  border-radius: 18px;
`


export default ComicDetail