import { Box, Flex, Text } from "@chakra-ui/react"

import { AiFillTwitterCircle } from 'react-icons/ai'
import { BsFacebook, BsInstagram, BsTwitch } from 'react-icons/bs'

const Footer = () => {

    return (
        <Box w={'100%'} backgroundColor={'gray.100'} h={'10rem'} >
            <Flex justify={'center'} h={'80%'} w={'100%'} align={'center'}>
                <Box mr={2}>
                    <AiFillTwitterCircle fontSize={'3rem'} />
                </Box>
                <Box mr={2}>
                    <BsFacebook fontSize={'3rem'} />
                </Box>
                <Box mr={2}>
                    <BsInstagram fontSize={'3rem'} />
                </Box>
                <Box>
                    <BsTwitch fontSize={'3rem'} />
                </Box>
            </Flex>
            <Text textAlign={'center'}>English | Español</Text>
        </Box>
    )
}

export default Footer