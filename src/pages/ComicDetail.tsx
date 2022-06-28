import { useParams } from 'react-router-dom';
import styled from 'styled-components'
import ComicHeader from '../components/comicHeader';
import {ReactComponent as SVG_book_open} from "../svgs/book_open.svg"
import {ReactComponent as SVG_shield} from "../svgs/shield.svg"
import {ReactComponent as SVG_tag} from "../svgs/tag.svg"
import {ReactComponent as SVG_calendar} from "../svgs/calendar.svg"
import {ReactComponent as SVG_people} from "../svgs/people.svg"
import {ReactComponent as SVG_star} from "../svgs/star.svg"

const ComicDetail = () => {
  const {id} = useParams();
  const iconProps = {width:16,height:16,fill:"#1A1A1A"}
  const starIcon = {width:18,height:18,fill:"#ECD92D",style:{padding:4,marginRight:6,filter: "drop-shadow(0px 0px 0.2px rgba(0,0,0,0.25))"}}
  return (
    <Container>
      <ComicHeader />
      <ComicImg src="https://micsco.s3.ap-northeast-2.amazonaws.com/220625201234OcpW.jpg"/>
      <ComicInform>
        <Title>테스트 제목</Title>
        <Explane>테스트 설명</Explane>
        <TagContainer>
          <Tag>
            <SVG_book_open {...iconProps} />
            <h2>연재중</h2>
          </Tag>
          <Tag>
            <SVG_shield {...iconProps} />
            <h2>안전</h2>
          </Tag>
          <Tag>
            <SVG_tag {...iconProps} />
            <h2>판타지</h2>
            <h2>드라마</h2>
          </Tag>
        </TagContainer>
        <TagContainer>
          <Tag>
            <SVG_calendar {...iconProps} />
            <h2>22년 6월 연재 시작됨</h2>
          </Tag>
          <Tag>
            <SVG_people {...iconProps} />
            <h2>신도 마사유키</h2>
          </Tag>
        </TagContainer>
        <AssessTop>
          <h2>평가</h2>
          <div>
            <SVG_star {...starIcon} />
            <h2>9.5 / 10</h2>
          </div>
        </AssessTop>
        <Assess>
          <div>
            <Profile>
              <img src="https://lh3.googleusercontent.com/a-/AOh14GhNSjWAGbrfqbT6j186QBK8iPJBQIAQzCC6EOxheQ=s96-c"/>
              <h2>CWIN77</h2>
            </Profile>
            <AssessScore>
              <SVG_star width={15} height={15} fill={"#ECD92D"} style={{padding:4,marginRight:3,filter: "drop-shadow(0px 0px 0.2px rgba(0,0,0,0.25))"}} />
              <h2>9.5 / 10</h2>
            </AssessScore>
          </div>
          <h1>댓글을 적을 부분</h1>
        </Assess>
        <Assess>
          <div>
            <Profile>
              <img src="https://lh3.googleusercontent.com/a-/AOh14GhNSjWAGbrfqbT6j186QBK8iPJBQIAQzCC6EOxheQ=s96-c"/>
              <h2>CWIN77</h2>
            </Profile>
            <AssessScore>
              <SVG_star width={15} height={15} fill={"#ECD92D"} style={{padding:4,marginRight:3,filter: "drop-shadow(0px 0px 0.2px rgba(0,0,0,0.25))"}} />
              <h2>9.5 / 10</h2>
            </AssessScore>
          </div>
          <h1>댓글을 적을 부분</h1>
        </Assess>
        <Assess>
          <div>
            <Profile>
              <img src="https://lh3.googleusercontent.com/a-/AOh14GhNSjWAGbrfqbT6j186QBK8iPJBQIAQzCC6EOxheQ=s96-c"/>
              <h2>CWIN77</h2>
            </Profile>
            <AssessScore>
              <SVG_star width={15} height={15} fill={"#ECD92D"} style={{padding:4,marginRight:3,filter: "drop-shadow(0px 0px 0.2px rgba(0,0,0,0.25))"}} />
              <h2>9.5 / 10</h2>
            </AssessScore>
          </div>
          <h1>댓글을 적을 부분</h1>
        </Assess>
        <Assess>
          <div>
            <Profile>
              <img src="https://lh3.googleusercontent.com/a-/AOh14GhNSjWAGbrfqbT6j186QBK8iPJBQIAQzCC6EOxheQ=s96-c"/>
              <h2>CWIN77</h2>
            </Profile>
            <AssessScore>
              <SVG_star width={15} height={15} fill={"#ECD92D"} style={{padding:4,marginRight:3,filter: "drop-shadow(0px 0px 0.2px rgba(0,0,0,0.25))"}} />
              <h2>9.5 / 10</h2>
            </AssessScore>
          </div>
          <h1>댓글을 적을 부분</h1>
        </Assess>
        <Assess>
          <div>
            <Profile>
              <img src="https://lh3.googleusercontent.com/a-/AOh14GhNSjWAGbrfqbT6j186QBK8iPJBQIAQzCC6EOxheQ=s96-c"/>
              <h2>CWIN77</h2>
            </Profile>
            <AssessScore>
              <SVG_star width={15} height={15} fill={"#ECD92D"} style={{padding:4,marginRight:3,filter: "drop-shadow(0px 0px 0.2px rgba(0,0,0,0.25))"}} />
              <h2>9.5 / 10</h2>
            </AssessScore>
          </div>
          <h1>댓글을 적을 부분</h1>
        </Assess>
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
  padding-bottom: 0.5rem;
  width:calc(100vw - 2rem);
  height:calc((100vw - 2rem) / 7 * 10);
  border-radius: 18px;
`
const ComicInform = styled.div`
  height:100%;
  padding: 0px 1.5rem;
`
const Title = styled.h1`
  font-size: 22px;
  padding: 2px 0px;
`
const Explane = styled.h2`
  font-size: 16px;
  font-weight: 400;
  opacity: 0.8;
  margin-bottom: 30px;
`
const TagContainer = styled.div`
  display:flex;
  overflow: auto;
  padding-top: 2px;
  padding-bottom: 16px;
`
const Tag = styled.div`
  opacity: 0.6;
  display:flex;
  align-items: center;
  margin-right: 25px;
  h2{
    white-space: nowrap;
    margin-left: 9px;
    font-size: 13px;
  }
`
const AssessTop = styled.div`
  display:flex;
  margin-top: 28px;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 8px;
  h2{
    font-size: 18px;
  }
  div{
    display:flex;
    align-items: center;
    h2{
      font-weight: 400;
      font-size: 17px;
      color:#ECD92D;
      filter: drop-shadow(0px 0px 0.2px rgba(0,0,0,0.25));
    }
  }
`
const Assess = styled.div`
  display:flex;
  flex-direction: column;
  margin: 1.2rem 2px;
  div{
    display:flex;
    align-items: center;
  }
  h1{
    margin-top: 12px;
    opacity: 0.8;
    font-size: 15px;
  }
`
const Profile = styled.div`
  display:flex;
  margin-right: 18px;
  img{
    width:17px;
    height:17px;
    border-radius: 100px;
  }
  h2{
    font-size: 12px;
    margin-left: 6px;
    opacity: 0.8;
  }
`
const AssessScore = styled.div`
  h2{
    font-size: 12px;
    font-weight: 400;
    color:#ECD92D;
    filter: drop-shadow(0px 0px 0.2px rgba(0,0,0,0.25));
  }
`

export default ComicDetail