import { useEffect, useState } from 'react'
import styled from 'styled-components'
import {ReactComponent as SVG_star} from "../svgs/star.svg"
import {ReactComponent as SVG_tag} from "../svgs/tag.svg"
import {ReactComponent as SVG_shield} from "../svgs/shield.svg"

const Comic = () => {
  const starIcon = {width:15,height:15,fill:"#ECD92D",style:{padding:4,marginRight:4,filter: "drop-shadow(0px 0px 0.1px rgba(0,0,0,0.2))"}}
  const InformIcon = {width:15,height:15,fill:"#1A1A1A",style:{opacity:0.6,padding:2,marginRight:8}}
  return (
    <Container>
      <ComicImg src={
        // "https://i.ibb.co/8XcSDdH/img.png"
        ""
      } />
      <Inform>
        <div>
          <ScoreWrapper>
            <SVG_star {...starIcon} />
            <Score>9.5 / 10</Score>
          </ScoreWrapper>
          <Title>테스트용 제목</Title>
          <Explane>작품에 대한 설명을 적어 넣을 부분 작품에 대한 설명을 적어 넣을 부분</Explane>
        </div>
        <div>
          <Genre>
            <SVG_tag {...InformIcon}/>
            <h2>판타지</h2>
            <h2>드라마</h2>
          </Genre>
          <Genre>
            <SVG_shield {...InformIcon} />
            <span/><h2>안전함</h2>
          </Genre>
        </div>
      </Inform>
    </Container>
  )
}

const Container = styled.div`
  width:calc(100vw - 1.5rem);
  background-color: white;
  display:flex;
  margin: 1rem 0px;
  padding:0.75rem;
  border: 1.5px 0px solid rgba(0, 0, 0, 0.2);
`
const ComicImg = styled.img`
  border-radius: 6px;
  width:calc(((100vw - 1.5rem) * 0.4) + 1px);   // 1px 여유 공간
  height:calc((100vw - 1.5rem) * 0.4 / 7 * 10); // 7:10 비율
  margin-right: 10px;
`
const Inform = styled.div`
  display:flex;
  flex-direction: column;
  justify-content: space-between;
  width:100%;
  height:calc((100vw - 1.5rem) * 0.4 / 7 * 10);
`
const Title = styled.h1`
  font-size: 18px;
  margin-top: 4.5px;
  margin-bottom: 4.5px;
  max-height:50px;
  line-height: 25px;
  overflow: hidden;
  text-overflow:ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`
const Explane = styled.h2`
  font-size: 13px;
  height:calc(19px * 4);
  line-height: 19px;
  overflow: hidden;
  opacity: 0.6;
  font-weight: 400;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
`
const ScoreWrapper = styled.div`
  display:flex;
  align-items: center;
`
const Score = styled.h2`
  font-size: 13px;
  color:#ECD92D;
  filter: drop-shadow(0px 0px 0.1px rgba(0,0,0,0.2));
`
const Genre = styled.div`
  font-size: 12px;
  display:flex;
  align-items: center;
  margin: 5px 0px;
  margin-top: 8px;
  h2{
    font-size: 12px;
    color: #1A1A1A;
    opacity: 0.6;
    margin-right: 6px;
  }
  span{
    width:7px;
    height:7px;
    margin-right: 6px;
    margin-top: 2px;
    border-radius: 100px;
    background-color: #2fb67e;
    // 안전 : 2fb67e
    // 조심 : ecb22d
    // 위험 : e01e5a
  }
` 

export default Comic
