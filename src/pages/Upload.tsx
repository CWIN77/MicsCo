import styled from 'styled-components'
import TopBar from '../components/mainHeader'
import { useRef, useState } from 'react'
import imageCompression from 'browser-image-compression';
import AWS from "aws-sdk"
AWS.config.update({
  region: "ap-northeast-2",
  credentials: new AWS.CognitoIdentityCredentials({
    IdentityPoolId:process.env.REACT_APP_IDENTITY_POOLID||""
  }),
})

const getImgName = () => {
  const date = new Date()
  const year = String(date.getFullYear()-2000)
  const month = date.getMonth()+1 < 10 ? "0"+String(date.getMonth()+1) : String(date.getMonth()+1)
  const day = date.getDate() < 10 ? "0"+String(date.getDate()) : String(date.getDate())
  const hour = date.getHours() < 10 ? "0"+String(date.getHours()) : String(date.getHours())
  const min = date.getMinutes() < 10 ? "0"+String(date.getMinutes()) : String(date.getMinutes())
  const sec = date.getSeconds() < 10 ? "0"+String(date.getSeconds()) : String(date.getSeconds())
  const fullDate = year+month+day+hour+min+sec

  const chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz';
  const randChars = `${chars[Math.floor(Math.random() * chars.length)]+chars[Math.floor(Math.random() * chars.length)]+chars[Math.floor(Math.random() * chars.length)]+chars[Math.floor(Math.random() * chars.length)]}`
  
  return fullDate+randChars
}

const Upload = () => {
  const imgInput = useRef<HTMLInputElement>(null);
  const [imgSrc, setImgSrc] = useState<string | ArrayBuffer | null>();
  const [imgFile, setImgFile] = useState<File>();
  const onImgChange = async (e:any) => {
    const reader = new FileReader();
    compressImage(e.target.files[0]).then((result:any)=>{
      setImgFile(result)
      reader.readAsDataURL(result);
      reader.onload = () => {
        setImgSrc(reader.result);
      }
    })
  }
  const compressImage = async (image: File) => {
    try{
      const options = {
        maxSizeMb: 1,
        maxWidthOrHeight: 600,
      }
      return await imageCompression(image, options);
    } catch(e){
      console.log(e);
    }
  }
  const fileUpload = (file:any) => {
    const upload = new AWS.S3.ManagedUpload({
      params: {
        Bucket: "micsco",
        Key: getImgName() + ".jpg",
        Body: file,
      },
    })
    const promise = upload.promise()
    promise.then(
      (data)=>{
        console.log(data.Location)
        //TODO: 이곳에 데이터 저장 코드를 작성
      },
      (err)=>alert("오류\n" + err.message)
    )
  }

  return (
    <Container>
      <TopBar/>
      <input ref={imgInput} type="file" accept='image/*' onChange={onImgChange} />
      <button onClick={()=>{
        fileUpload(imgFile)
      }}>이미지 업로드</button>
      {
        typeof imgSrc === "string" &&
        <img style={{width:"25vw",height:"auto"}} src={imgSrc}/>
      }
    </Container>
  )
}

const Container = styled.div`
  width:100vw;
  min-height:100vh;
  font-size:18px;
  font-weight: 600;
`
export default Upload