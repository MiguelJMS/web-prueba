import { Box, Flex, Text } from '@chakra-ui/react'
import { IoIosArrowDropleft, IoIosArrowDropright } from 'react-icons/io'

const Pagination = () => {

    return (
        <Box>
            <Flex mb={4} w={'100%'} justifyContent={'center'}>
                <IoIosArrowDropleft fontSize={'2rem'} />
                <Text mr={2} ml={2} fontWeight={'bold'}>Page</Text>
                <Box borderRadius={'5px'} backgroundColor={'black'} w={'3rem'} textAlign={'center'} p={1} color={'white'}><Text mb={0}>1</Text></Box>
                <Text ml={2} mr={2}>of 15.234</Text>
                <IoIosArrowDropright fontSize={'2rem'} />
            </Flex>
        </Box>
    )
}

export default Pagination