import styled from 'styled-components'
import {ReactComponent as SVG_arrow_left} from "../svgs/arrow_left.svg"

const ComicHeader = () => {
  const svgProps = {width:28,height:28,fill:"#1A1A1A",style:{padding:8}}

  return (
    <Bar>
      <div style={{position:"absolute",left:0}}>
        <SVG_arrow_left {...svgProps} onClick={()=>{window.history.back()}} />
      </div>
      <div>
        <Profile src={"https://lh3.googleusercontent.com/a-/AOh14GhNSjWAGbrfqbT6j186QBK8iPJBQIAQzCC6EOxheQ=s96-c"} />
        <h2>CWIN77</h2>
      </div>
    </Bar>
  )
}

const Bar = styled.div`
  background-color: white;
  display:flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
  width:100vw;
  div{
    padding: 6px;
    display:flex;
    align-items: center;
    h2{
      font-size: 15px;
    }
  }
`
const Profile = styled.img`
  width:22px;
  height:22px;
  padding: 4px;
  margin: 4px;
  margin-right:6px;
  border-radius: 100px;
`

export default ComicHeader
