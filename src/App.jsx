import { useState, useEffect } from 'react'
import * as API from './services/launches'
import logo from './assets/logo.png'
import { Heading, Box, Image, Flex, Text } from '@chakra-ui/react'
import {LaunchItem} from './components/LaunchItem' 
export function App() {

  const [launches, setLaunches] = useState([])

  useEffect( () => {
    API.getAllLaunches().then(setLaunches)
  }, [])

  return (
    <>
    <Image m={4} src={logo} width={200} />
      <Heading as="h1" size="lg" m={4}>SpaceX launches</Heading>
      <section>
         <ul>
          {
            launches.map( (launch) => (
             <LaunchItem {...launch}/>
            ))
          }
         </ul>
      </section>
    </>
  )
}

