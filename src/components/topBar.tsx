import styled from 'styled-components'
import {ReactComponent as SVG_search}  from "../svgs/search.svg"
import {ReactComponent as SVG_profile} from "../svgs/profile.svg"

import { loginGoogle } from '../firebase/auth'

const TopBar = () => {
  const svgProps = {width:20.1,height:20.1,fill:"#1A1A1A",style:{padding:4,marginRight:12}}
  return (
    <div>
      <div style={{width:"100%",height:52.16}}/>
      <Bar>
        
        <Title>MicsCo</Title>
        <div style={{right:10}}>
          <SVG_search {...svgProps} />
          <SVG_profile width={24} height={24} onClick={()=>{loginGoogle()}} style={{padding:4}}/>
        </div>
      </Bar>
    </div>
  )
}

const Bar = styled.div`
  background-color: white;
  display:flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  z-index: 1;
  top:0px;
  width:100vw;
  border-bottom: 1.25px solid rgba(0,0,0,0.2);
  div{
    position: absolute;
    display:flex;
    align-items: center;
  }
`
const Title = styled.h1`
  font-size: 22px;
  padding:10px;
`

export default TopBar
