import './styles/cards.css'
import { Box, Flex, Img, SimpleGrid, Text } from '@chakra-ui/react'

import { TbMoneybag } from 'react-icons/tb'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { IoMdArrowDropdown } from 'react-icons/io'

const cards = [
  {
    level: '72',
    price: '2.500.100',
    img: 'https://i.pinimg.com/236x/89/31/3f/89313f32be7449150d1b13b34c683923.jpg',
    color: '#2d6a4f'
  },
  {
    level: '13',
    price: '2.500.000',
    img: 'https://i.pinimg.com/236x/59/24/18/5924188c080cc7f5d1ac48dadb8f22d3.jpg',
    color: '#003f88'
  },
  {
    level: '72',
    price: '2.500.000',
    img: 'https://i.pinimg.com/236x/fb/ce/05/fbce05cf28b1231c622733d635f31810.jpg',
    color: '#eeef20'
  },
  {
    level: '72',
    price: '2.500.000',
    img: 'https://i.pinimg.com/236x/63/53/72/635372d4bcfcdf70ff7de388f6ada3d9.jpg',
    color: '#9d4edd'
  },
  {
    level: '72',
    price: '2.500.100',
    img: 'https://i.pinimg.com/236x/89/31/3f/89313f32be7449150d1b13b34c683923.jpg',
    color: '#2d6a4f'
  },
  {
    level: '13',
    price: '2.500.000',
    img: 'https://i.pinimg.com/236x/59/24/18/5924188c080cc7f5d1ac48dadb8f22d3.jpg',
    color: '#003f88'
  },

  {
    level: '72',
    price: '2.500.000',
    img: 'https://i.pinimg.com/236x/63/53/72/635372d4bcfcdf70ff7de388f6ada3d9.jpg',
    color: '#9d4edd'
  },
  {
    level: '72',
    price: '2.500.100',
    img: 'https://i.pinimg.com/236x/89/31/3f/89313f32be7449150d1b13b34c683923.jpg',
    color: '#2d6a4f'
  },
  {
    level: '13',
    price: '2.500.000',
    img: 'https://i.pinimg.com/236x/59/24/18/5924188c080cc7f5d1ac48dadb8f22d3.jpg',
    color: '#003f88'
  },

  {
    level: '72',
    price: '2.500.000',
    img: 'https://i.pinimg.com/236x/63/53/72/635372d4bcfcdf70ff7de388f6ada3d9.jpg',
    color: '#9d4edd'
  },
]

const Cards = () => {

  return (
    <>
      <Box>
        <Flex mt={[4, 4, 4, 0]} ml={4} mb={4} justifyContent={'space-between'} h={['2rem', '2rem', '2rem', '2rem']} alignItems={'center'} w={['80%', '80%', '80%', '20%']} backgroundColor={'gray.100'}>
          <Text mb={0}>Lowest price</Text>
          <IoMdArrowDropdown />
        </Flex>
        <SimpleGrid columns={['1', '2', '2', '3']} justifyItems={['center', 'center']} spacingX='20px' justifyContent={'center'} alignItems={'center'} spacingY='20px'>
          {cards && cards.map((card, index) => (
            <Box position={'relative'} height='450px' w={'236px'} borderRadius={'5px'}>
              <Flex backgroundColor={'gray.100'} borderRadius={'5px'} width={'100%'} justifyContent={'space-between'} alignItems={'center'}>
                <Flex alignItems={'center'} ml={2}>
                  <TbMoneybag /> ${card.price}
                </Flex>

                <Flex alignItems={'center'} mr={2}>
                  <AiOutlineShoppingCart />25
                </Flex>
              </Flex>
              <Img width={'300px'} height={'400px'} boxShadow='base' borderRadius={'10px'} position={'relative'} src={card.img} alt="personaje de pelea" />
              <Box color={'white'} display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'} boxShadow='base' borderRadius={'50%'} bottom={'5px'} right={'1px'} position={'absolute'} border={'2px solid white'} h={'5rem'} w={'5rem'} backgroundColor={card.color}>
                <Text mb={0}>Level</Text>
                {card.level}
              </Box>
            </Box>
          ))
          }
        </SimpleGrid >
      </Box>
    </>
  )
}

export default Cards