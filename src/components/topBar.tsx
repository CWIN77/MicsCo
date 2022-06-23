import styled from 'styled-components'
import {ReactComponent as SVG_search}  from "../svgs/search.svg"
import {ReactComponent as SVG_menu} from "../svgs/menu.svg"
import {ReactComponent as SVG_profile} from "../svgs/profile.svg"

import { loginGoogle } from '../firebase/auth'

const TopBar = () => {
  const svgProps = {width:20,height:20,fill:"#1A1A1A",style:{padding:4,marginLeft:12}}
  return (
    <div>
      <div style={{width:"100%",height:52.16}}></div>
      <Bar>
        <div onClick={()=>{loginGoogle()}} style={{left:10}}>
          <SVG_profile style={{padding:4}}/>
        </div>
        <Title>MicsCo</Title>
        <div style={{right:10}}>
          <SVG_search {...svgProps} />
          <SVG_menu {...svgProps} />
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
  top:0px;
  width:100vw;
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
