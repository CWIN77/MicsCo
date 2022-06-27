import styled from 'styled-components'
import TopBar from '../components/topBar'
import Comic from '../components/comic'
import {API,graphqlOperation} from "aws-amplify"
import {listComics} from '../graphql/queries'
import { useEffect, useState } from 'react'
import {IComicList} from "../types"

const Home = () => {
  const [comicList,setComicList] = useState<IComicList[] | null>(null)
  const getComic = async ()=>{
    const req:any = await API.graphql(graphqlOperation(listComics));
    sessionStorage.setItem("comicList",JSON.stringify(req.data.listComics.items))
    setComicList(req.data.listComics.items);
  }
  useEffect(()=>{
    getComic()
  },[])
  return (
    <Container>
      <TopBar/>
      {
        comicList?.map((data,key)=>(
          <Comic key={key} data={data} />
        ))
      }
    </Container>
  )
}

const Container = styled.div`
  width:100vw;
  min-height:100vh;
`
export default Home