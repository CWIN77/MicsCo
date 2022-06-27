import styled from 'styled-components'
import {ReactComponent as SVG_search}  from "../svgs/search.svg"
import {ReactComponent as SVG_profile} from "../svgs/profile.svg"
import {ReactComponent as SVG_loading} from "../svgs/loading.svg"
import {ReactComponent as SVG_more_option} from "../svgs/more_option.svg"
import { loginGoogle,getCurrentUser,logOut } from '../firebase/auth'
import { useEffect, useState } from 'react'
import {IUser} from "../types"

const MainHeader = () => {
  const svgProps = {width:20,height:20.1,fill:"#1A1A1A",style:{padding:4,marginRight:8}}
  const [user,setUser] = useState<IUser|null>(JSON.parse(localStorage.getItem("user")||JSON.stringify(null)))
  const [loading,setLoading] = useState(JSON.parse(sessionStorage.getItem("loading")||JSON.stringify(false)))
  useEffect(()=>{
    getCurrentUser(setUser,setLoading)
  },[])

  return (
    <div>
      <div style={{width:"100%",height:52.16}}/>
      <Bar>
        <div style={{left:10}}>
          {
            loading 
            ? <Loading/>
            : user
              ? <Profile onClick={()=>{logOut(setLoading)}} src={user.img} />
              : <div onClick={()=>{loginGoogle(setLoading)}}>
                  <SVG_profile width={28} height={28} style={{padding:4,marginRight:16}}/>
                </div>
          }
        </div>
        <Title>MicsCo</Title>
        <div style={{right:2}}>
          <SVG_search {...svgProps} />
          <SVG_more_option {...svgProps} />
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
  div{
    display:flex;
    align-items: center;
    position: absolute;
  }
`
const Title = styled.h1`
  font-size: 22px;
  padding:12px;
  margin-left: 4px;
`
const Profile = styled.img`
  width:28px;
  height:28px;
  margin-right:14px;
  margin-left: 6px;
  border-radius: 100px;
`
const Loading = styled(SVG_loading)`
  width:22px;
  height:22px;
  padding:5px;
  margin-right:14px;
  opacity: 0.8;
  @keyframes Loading {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
  animation: Loading infinite 1s linear;
`

export default MainHeader
