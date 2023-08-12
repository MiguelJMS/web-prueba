import { Box, Flex, Text } from "@chakra-ui/react"

import { GrPowerReset } from 'react-icons/gr'
import { BiSolidUpArrow, BiInfinite, BiSearchAlt2 } from 'react-icons/bi'
import { BsFillShieldSlashFill, BsFillStarFill } from 'react-icons/bs'
import { GiVikingHelmet, GiElfHelmet } from 'react-icons/gi'
import { FaHatWizard } from 'react-icons/fa'

const Aside = () => {

  return (
    <>
      <Box w={['100%', '100%', '30%', '30%']} display={'flex'} flexDirection={'column'} alignItems={'center'}>
        <Flex borderRadius={'5px'} alignItems={'center'} justifyContent={'space-between'} backgroundColor={"gray.100"} w={'80%'} h={'2rem'}>
          <Text mb={0} ml={4}>Filter</Text>
          <Flex alignItems={'center'} mr={4}>
            <Text mb={0}>reset </Text>
            <GrPowerReset />
          </Flex>
        </Flex>

        <Box backgroundColor={"gray.100"} w={'80%'} h={'10%'} mt={4}>
          <Flex borderRadius={'5px'} alignItems={'center'} justifyContent={'space-between'} >
            <Flex w={'100%'} justifyContent={'space-between'}>
              <Flex ml={4} alignItems={'center'}>
                <Box color="gray">
                  <BiSolidUpArrow />
                </Box>
                <Text fontWeight={'bold'} mb={0}>Rarity</Text>
              </Flex>
              <Text padding={1} mr={2} mt={2} mb={0} borderRadius={'5px'} fontWeight={'bold'} border={'2px solid gold'}>Legendary</Text>
            </Flex>
          </Flex>
          <Flex ml={4} mt={4} mb={[4, 4, 0, 0]} alignItems={'end'}>
            <Box backgroundColor={'#2d6a4f'} mr={1} w={'1.5rem'} h={'1.5rem'} borderRadius={'50%'} />
            <Box backgroundColor={'#003f88'} mr={1} w={'1.5rem'} h={'1.5rem'} borderRadius={'50%'} />
            <Box backgroundColor={'#eeef20'} mr={1} w={'1.5rem'} h={'1.5rem'} borderRadius={'50%'} />
            <Box backgroundColor={'#9d4edd'} mr={1} w={'1.5rem'} h={'1.5rem'} borderRadius={'50%'} />
          </Flex>
        </Box>

        <Flex mt={4} borderRadius={'5px'} alignItems={'center'} backgroundColor={"gray.100"} w={'80%'} h={'3rem'}>
          <Flex mr={2} ml={2} alignItems={'center'}>
            <Box color="gray">
              <BiSolidUpArrow />
            </Box>
            <Text fontWeight={'bold'} fontSize={'.8rem'} mb={0}>Element</Text>
          </Flex>
          <Box mr={2} w={'3rem'} borderRadius={'3px'} h={'60%'} backgroundColor={'gray.300'}>
            <Text mb={0} textAlign={'center'}>0</Text>
          </Box>
          <Flex alignItems={'center'} mr={2}>
            <Text mr={2} mb={0}>To </Text>
            <BiInfinite fontSize={'1.5rem'} />
          </Flex>
          <Text mb={0} fontSize={'1rem'} fontWeight={'bold'} textAlign={'center'} h={'2rem'} w={'2rem'} borderRadius={'50%'} border={'1px solid gold'}>1</Text>
        </Flex >

        <Box mt={4} borderRadius={'5px'} alignItems={'center'} backgroundColor={"gray.100"} w={'80%'} h={'10%'}>
          <Flex w={'100%'} alignItems={'center'} justifyContent={'space-between'}>
            <Flex ml={2}>
              <Box color="gray">
                <BiSolidUpArrow />
              </Box>
              <Text fontWeight={'bold'} fontSize={'.8rem'} mb={0}>Heroe</Text>
            </Flex>
            <Text mr={2} mb={0} fontSize={'1rem'} fontWeight={'bold'} textAlign={'center'} h={'2rem'} w={'2rem'} borderRadius={'50%'} border={'1px solid gold'}>1</Text>
          </Flex>
          <Flex mb={[4, 4, 0, 0]} flexDirection={['column', 'column', 'column', 'row']}>
            <Text mb={[4, 4, 4, 0]} mr={[4, 4, 4, 2]} ml={[4, 4, 4, 2]} fontWeight={'bold'} mr={2} borderRadius={'3px'} p={2} backgroundColor={'gray.300'} ml={4}>Atalanta</Text>
            <Text mb={[4, 4, 4, 0]} mr={[4, 4, 4, 2]} ml={[4, 4, 4, 2]} fontWeight={'bold'} borderRadius={'3px'} p={2} backgroundColor={'gray.300'} mr={2}>Heracles</Text>
            <Text mb={[4, 4, 4, 0]} mr={[4, 4, 4, 2]} ml={[4, 4, 4, 2]} fontWeight={'bold'} borderRadius={'3px'} p={2} backgroundColor={'gray.300'}>Achilles</Text>
          </Flex>
        </Box >

        <Box mt={4} borderRadius={'5px'} alignItems={'center'} backgroundColor={"gray.100"} w={'80%'} h={['15%', '15%', '15%', '10%']}>
          <Flex w={'100%'} alignItems={'center'} justifyContent={'space-between'}>
            <Flex ml={2}>
              <Box color="gray">
                <BiSolidUpArrow />
              </Box>
              <Text fontWeight={'bold'} fontSize={'.8rem'} mb={0}>Class</Text>
            </Flex>
            <Text mr={2} mb={0} fontSize={'1rem'} fontWeight={'bold'} textAlign={'center'} h={'2rem'} w={'2rem'} borderRadius={'50%'} border={'1px solid gold'}>1</Text>
          </Flex>
          <Flex flexDirection={['column', 'column', 'column', 'row']} >
            <Flex mb={[4, 4, 4, 0]} borderRadius={'3px'} p={2} backgroundColor={'gray.300'} alignItems={'center'} mr={[4, 4, 4, 2]} ml={4}>
              <BsFillShieldSlashFill />
              <Text ml={2} fontWeight={'bold'} mb={0}>  Warriors</Text>
            </Flex>
            <Flex mb={[4, 4, 4, 0]} borderRadius={'3px'} p={2} backgroundColor={'gray.300'} alignItems={'center'} mr={[4, 4, 4, 2]} ml={4}>
              <GiVikingHelmet />
              <Text ml={2} fontWeight={'bold'} mb={0}>  Bards</Text>
            </Flex>
            <Flex mb={[4, 4, 4, 0]} borderRadius={'3px'} p={2} backgroundColor={'gray.300'} alignItems={'center'} mr={[4, 4, 4, 2]} ml={4}>
              <BsFillStarFill />
              <Text fontWeight={'bold'} mb={0}>  Rangers</Text>
            </Flex>
          </Flex>
          <Flex mt={2} mb={[4, 4, 4, 0]} flexDirection={['column', 'column', 'column', 'row']}>
            <Flex mb={[4, 4, 4, 0]} borderRadius={'3px'} p={2} backgroundColor={'gray.300'} alignItems={'center'} mr={[4, 4, 4, 2]} ml={4}>
              <FaHatWizard />
              <Text fontWeight={'bold'} mb={0}>  Rangers</Text>
            </Flex>
            <Flex mb={[4, 4, 4, 0]} borderRadius={'3px'} p={2} backgroundColor={'gray.300'} alignItems={'center'} mr={[4, 4, 4, 2]} ml={4}>
              <GiElfHelmet />
              <Text fontWeight={'bold'} mb={0}>  Rangers</Text>
            </Flex>
          </Flex>
        </Box >

        <Box mt={4} borderRadius={'5px'} backgroundColor={"gray.100"} w={'80%'} h={'7%'}>
          <Flex mt={4} w={'100%'} alignItems={'center'} justifyContent={'space-between'}>
            <Flex ml={2}>
              <Box color="gray">
                <BiSolidUpArrow />
              </Box>
              <Text fontWeight={'bold'} fontSize={'.8rem'} mb={0}>Ability</Text>
            </Flex>
          </Flex>
          <Box mb={[4, 4, 0, 0]} h={'50%'} w={'100%'} display={'flex'} justifyContent={'center'} alignItems={'end'}>
            <Flex w={'80%'} h={'2rem'} justifyContent={'start'} alignItems={'center'} borderRadius={'10px'} backgroundColor={'gray.300'}>
              <Flex ml={4} align={'center'}>
                <BiSearchAlt2 color={'gray.400'} />
                <Text color={'gray.400'} mb={0}>Search abilities</Text>
              </Flex>
            </Flex>
          </Box>
        </Box>
      </Box >
    </>
  )
}

export default Aside