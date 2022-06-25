import styled from 'styled-components'
import {ReactComponent as SVG_star} from "../svgs/star.svg"
import {ReactComponent as SVG_tag} from "../svgs/tag.svg"
import {ReactComponent as SVG_shield} from "../svgs/shield.svg"
import {safety,genre,publish} from "./comicData"
import {IComicList} from "../types"
import { Link } from 'react-router-dom'

const Comic = ({data}:{data:IComicList}) => {
  const starIcon = {width:14,height:14,fill:"#ECD92D",style:{padding:4,marginRight:4,filter: "drop-shadow(0px 0px 0.2px rgba(0,0,0,0.25))"}}
  const InformIcon = {width:15,height:15,fill:"#1A1A1A",style:{opacity:0.6,padding:2,marginRight:8}}

  return (
    <Container>
      <Link to={`/${data.id}`}>
        <ComicImg src={data.img} />
      </Link>
      <Inform>
        <div>
          <div style={{display:'flex',alignItems:'center',justifyContent: "space-between"}}>
            <ScoreWrapper>
              <SVG_star {...starIcon} />
              <Score>{data.score + " / 10"}</Score>
            </ScoreWrapper>
            <Publish style={{backgroundColor:publish[data.publish].color}}>{publish[data.publish].text}</Publish>
          </div>
          <Link to={`/${data.id}`}>
            <Title>{data.title}</Title>
            <Explane>{data.explane}</Explane>
          </Link>
        </div>
        <div>
          <Tag>
            <SVG_tag {...InformIcon}/>
            {
              data.genre.map((num,key)=>(
                <h2 key={key}>{genre[num]}</h2>
              ))
            }
          </Tag>
          <Tag>
            <SVG_shield {...InformIcon} />
            <span style={{backgroundColor:safety[data.safety].color}} /><h2>{safety[data.safety].text}</h2>
          </Tag>
        </div>
      </Inform>
    </Container>
  )
}

const Container = styled.div`
  width:calc(100vw - 1.5rem);
  border-bottom: 1px solid black;
  display:flex;
  margin: 1rem 0px;
  padding:0.75rem;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid rgba(0,0,0,0.1);
`
const ComicImg = styled.img`
  border-radius: 8px;
  width:calc(((100vw - 1.5rem) * 0.35) + 1px);   // 1px 여유 공간
  height:calc((100vw - 1.5rem) * 0.35 / 7 * 10); // 7:10 비율
  margin-right: 10px;
`
const Inform = styled.div`
  display:flex;
  flex-direction: column;
  justify-content: space-between;
  width:100%;
  height:calc((100vw - 1.5rem) * 0.35 / 7 * 10);
`
const Title = styled.h1`
  font-size: 18px;
  margin-top: 4px;
  margin-bottom: 4px;
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
  height:calc(19px * 3);
  line-height: 19px;
  overflow: hidden;
  opacity: 0.6;
  font-weight: 400;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
`
const ScoreWrapper = styled.div`
  display:flex;
  align-items: center;
`
const Score = styled.h2`
  font-size: 12px;
  color:#ECD92D;
  filter: drop-shadow(0px 0px 0.2px rgba(0,0,0,0.25));
`
const Tag = styled.div`
  font-size: 12px;
  display:flex;
  flex-wrap: wrap;
  width:100%;
  height:19px;
  overflow: hidden;
  align-items: center;
  margin: 5px 0px;
  margin-top: 8px;
  h2{
    font-size: 12px;
    color: #1A1A1A;
    opacity: 0.6;
    margin-right: 7px;
  }
  span{
    width:7px;
    height:7px;
    margin-right: 5px;
    margin-top: 2px;
    border-radius: 100px;
  }
` 
const Publish = styled.div`
  font-size: 10px;
  padding:3px 6px;
  border-radius: 4px;
  color:white;
`

export default Comic
