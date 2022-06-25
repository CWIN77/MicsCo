import styled from 'styled-components'
import {ReactComponent as SVG_search}  from "../svgs/search.svg"
import {ReactComponent as SVG_profile} from "../svgs/profile.svg"
import {ReactComponent as SVG_loading} from "../svgs/loading.svg"
import { loginGoogle,getCurrentUser,logOut } from '../firebase/auth'
import { useEffect, useState } from 'react'
import {IUser} from "../types"

const TopBar = () => {
  const svgProps = {width:20.1,height:20.1,fill:"#1A1A1A",style:{padding:4,marginRight:12}}
  const [user,setUser] = useState<IUser|null>(null)
  const [loading,setLoading] = useState(JSON.parse(sessionStorage.getItem("loading")||JSON.stringify(false)))
  useEffect(()=>{
    getCurrentUser(setUser,setLoading)
  },[])
  
  return (
    <div>
      <div style={{width:"100%",height:52.16}}/>
      <Bar>
        <Title>MicsCo</Title>
        <div>
          <SVG_search {...svgProps} />
          {
            loading 
            ? <Loading/>
            : user
              ? <Profile onClick={async()=>{logOut(setLoading)}} src={user.img} />
              : <div onClick={()=>{loginGoogle(setLoading)}}>
                <SVG_profile width={24} height={24} style={{padding:4,marginRight:14}}/>
              </div>
          }
        </div>
      </Bar>
    </div>
  )
}

const Bar = styled.div`
  background-color: white;
  display:flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  z-index: 1;
  top:0px;
  width:100vw;
  border-bottom: 1.25px solid rgba(0,0,0,0.2);
  div{
    display:flex;
    align-items: center;
  }
`
const Title = styled.h1`
  font-size: 22px;
  padding:10px;
  margin-left: 4px;
`
const Profile = styled.img`
  width:28px;
  height:28px;
  margin-right:14px;
  margin-left: 4px;
  border-radius: 100px;
`
const Loading = styled(SVG_loading)`
  width:24px;
  height:24px;
  padding:4px;
  margin-right:14px;
  @keyframes Loading {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
  animation: Loading infinite 2s linear;
`

export default TopBar
