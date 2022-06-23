import { useEffect, useState } from 'react'
import styled from 'styled-components'

const Comic = () => {
  const starIcon = {width:15,height:15,style:{padding:1.2}}
  // const InformIcon = {width:16,height:16,fill:"#1A1A1A",style:{opacity:0.6,padding:2,marginRight:4}}
  // const [titleWidth,setTitleWidth] = useState<number | undefined>(undefined)
  // useEffect(()=>{
  //   setTitleWidth(document.getElementById(ComicInform.styledComponentId)?.clientWidth);
  //   console.log(document.getElementById(ComicInform.styledComponentId)?.clientWidth)
  // },[])
  return (
    <Container>
      <ComicImg src={
        //"https://manatoki142.net/data/file/comic/62a2f888e3a67_8DXqy5HM_d8b16836d3f7ca722e18dfc82b91222596c208da.jpg"
        ""
      } />
      {/* <ComicInform id={ComicInform.styledComponentId}>
        <div>
          <Grade>
            <div style={{display:"flex"}}>
              <SVG_star_full {...starIcon} />
              <SVG_star_full {...starIcon} />
              <SVG_star_full {...starIcon} />
              <SVG_star_full {...starIcon} />
              <SVG_star_full {...starIcon} />
              <h2>(6)</h2>
            </div>
            <Publish>연재중</Publish>
          </Grade>
          <Title width={String(titleWidth)}>루리 드래곤</Title>
          <Explane>작품에 </Explane>
        </div>
        <div>
          <InformWrapper>
            <SVG_people {...InformIcon} />
            <h2>작가 이름</h2>
          </InformWrapper>
          <InformWrapper>
            <SVG_tag {...InformIcon} />
            <h2>판타지</h2>
            <h2>드라마</h2>
          </InformWrapper>
        </div>
      </ComicInform> */}
    </Container>
  )
}

const Container = styled.div`
  width:calc(100vw - 1.5rem);
  background-color: white;
  display:flex;
  margin: 1rem 0px;
  padding:0.75rem;
`
// const ComicInform = styled.div`
//   display:flex;
//   flex-direction: column;
//   justify-content: space-between;
//   padding: 1px 0.8rem;
//   padding-right:6px;
// `
const ComicImg = styled.img`
  border-radius: 6px;
  width:calc(((100vw - 1.5rem) * 0.37) + 1px);   // 1px 여유 공간
  height:calc((100vw - 1.5rem) * 0.37 / 7 * 10); // 7:10 비율
`
// const Title = styled.h1<{width:string}>`
//   font-size: 18.5px;
//   margin-top: 8px;
//   margin-bottom: 3px;
//   height: 26.67px;
//   width: calc(${({width})=>width === "undefined" ? "0" : width}px - 1rem);
//   text-overflow: ellipsis;
//   white-space: nowrap;
//   overflow: hidden;
// `
// const Explane = styled.h2`
//   font-size: 12.5px;
//   opacity: 0.6;
//   height:72.16px;
//   width: 231px;
//   text-overflow: ellipsis;
//   overflow: hidden;
// `
// const Grade = styled.div`
//   display:flex;
//   align-items: center;
//   justify-content: space-between;
//   h2{
//     font-size: 11px;
//     opacity: 0.6;
//     margin-left: 4px;
//   }
// ` 
// const Publish = styled.h1`
//   font-size: 10px;
//   padding:2px 7px;
//   border-radius: 4px;
//   color:white;
//   background-color:#1264A3;
//   font-weight: 400;
// `
// const InformWrapper = styled.div`
//   display:flex;
//   margin-top: 8px;
//   h2{
//     font-size: 12px;
//     opacity: 0.6;
//     margin: 0px 3px;
//   }
// `

export default Comic
