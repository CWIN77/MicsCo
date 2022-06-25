import styled from 'styled-components'
import TopBar from '../components/topBar'
import Comic from '../components/comic'
import { useRef, useState } from 'react'
import imageCompression from 'browser-image-compression';

// micsco.link

const Home = () => {
  const imgInput = useRef<HTMLInputElement>(null);
  const [imageSrc, setImageSrc] = useState<string | ArrayBuffer | null>();
  const onImgChange = async (e:any) => {
    const reader = new FileReader();
    compressImage(e.target.files[0]).then((result:any)=>{
      reader.readAsDataURL(result);
      reader.onload = () => {
        console.log(e.target.files[0],result)
        setImageSrc(reader.result);
      }
    })
  }
  const compressImage = async (image: File) => {
    try{
      const options = {
        maxSizeMb: 1,
        maxWidthOrHeight: 700,
      }
      return await imageCompression(image, options);
    } catch(e){
      console.log(e);
    }
  }
  return (
    <Container>
      <TopBar/>
      <input ref={imgInput} type="file" accept='image/*' onChange={onImgChange} />
      {
        typeof imageSrc === "string" &&
        <img style={{width:"600px",height:"auto"}} src={imageSrc}/>
      }
      <Comic/>
      {/* <Comic/>
      <Comic/>
      <Comic/>
      <Comic/>
      <Comic/> */}
    </Container>
  )
}

const Container = styled.div`
  width:100vw;
  min-height:100vh;
  font-size:18px;
  font-weight: 600;
`
export default Home