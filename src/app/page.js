'use client';
import { CacheProvider } from '@chakra-ui/next-js'
import { ChakraProvider, Flex, Text, Box } from '@chakra-ui/react';
import './styles.css'
import { BsGlobe } from 'react-icons/bs'
import { FaCopy } from 'react-icons/fa'
import { SiEpicgames } from 'react-icons/si'
import { TbTrident } from 'react-icons/tb'
import { GiSchoolBag, GiPotionBall, GiSpartanHelmet } from 'react-icons/gi'
import { MdPets } from 'react-icons/md'
import { LiaBookSolid } from 'react-icons/lia'
import Cards from '@/components/cards'
import Aside from '@/components/Aside';
import Pagination from '@/components/Pagination';
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar';
import Categories from '@/components/categories';
import SubHeader from '@/components/SubHeader';

export default function Home() {
  return (
    <CacheProvider>
      <ChakraProvider>
        <main>
          <div classNameName='container'>
            <Navbar />
            <Box width='100%' display={'flex'} justifyContent={'center'} flexWrap={'wrap'}>
              <SubHeader />
            </Box>
            <Box width='100%' display={'flex'} justifyContent={'center'} flexWrap={'wrap'}>
              <Categories />
            </Box>
          </div>
          <Flex width={'100%'} flexDirection={['column', 'column', 'row', 'row']} justifyContent={'space-around'}>
            <Aside />
            <Cards />
          </Flex>
          <Pagination />
          <Footer />
        </main>
      </ChakraProvider>
    </CacheProvider>
  )
}
