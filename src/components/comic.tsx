import { useEffect, useState } from 'react'
import styled from 'styled-components'
import {ReactComponent as SVG_star} from "../svgs/star.svg"
import {ReactComponent as SVG_tag} from "../svgs/tag.svg"
import {ReactComponent as SVG_shield} from "../svgs/shield.svg"
import {safety,tag} from "./comicData"
import imageCompression from 'browser-image-compression'

const Comic = () => {
  const starIcon = {width:15,height:15,fill:"#ECD92D",style:{padding:4,marginRight:4,filter: "drop-shadow(0px 0px 0.1px rgba(0,0,0,0.2))"}}
  const InformIcon = {width:15,height:15,fill:"#1A1A1A",style:{opacity:0.6,padding:2,marginRight:8}}
  function getThumbFile(_IMG:any){
    //canvas에 이미지 객체를 리사이징해서 담는 과정
    var canvas:any = document.createElement("canvas");
    canvas.width = '131px'; //리사이징하여 그릴 가로 길이
    canvas.height ='187px'; //리사이징하여 그릴 세로 길이
    //131 × 187 px
    canvas.getContext("2d").drawImage(_IMG, 0, 0, "131px", "187px");
  
    //canvas의 dataurl를 blob(file)화 하는 과정
    var dataURL:any = canvas.toDataURL("image/png"); //png => jpg 등으로 변환 가능
    var byteString = atob(dataURL.split(',')[1]);
    var mimeString = dataURL.split(',')[0].split(':')[1].split(';')[0];
    var ab = new ArrayBuffer(byteString.length);
    var ia = new Uint8Array(ab);
    for (var i = 0; i < byteString.length; i++) {
      ia[i] = byteString.charCodeAt(i);
    }
    var tmpThumbFile = new Blob([ab], {type: mimeString});
    return tmpThumbFile;
  }
  
  const compressImage = async (image: File) => {
    try{
      const options = {
        maxSizeMb: 1,
        maxWidthOrHeight: 300,
      }
      return await imageCompression(image, options);
    } catch(e){
      console.log(e);
    }
  }
  useEffect(()=>{
    // console.log(getThumbFile("https://i.ibb.co/8XcSDdH/img.png"))
  },[])
  return (
    <Container>
      <ComicImg src={
        "https://i.ibb.co/8XcSDdH/img.png"
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
            <h2>{tag[0]}</h2>
            <h2>{tag[1]}</h2>
          </Genre>
          <Genre>
            <SVG_shield {...InformIcon} />
            <span style={{backgroundColor:safety[0].color}} /><h2>{safety[0].text}함</h2>
          </Genre>
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
  font-size: 13px;
  color:#ECD92D;
  filter: drop-shadow(0px 0px 0.1px rgba(0,0,0,0.2));
`
const Genre = styled.div`
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

export default Comic
