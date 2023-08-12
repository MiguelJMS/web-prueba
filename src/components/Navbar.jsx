import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
  Button,
  ChevronDownIcon,
  Flex,
  Text,
  Box,
  useMediaQuery,
  HamburgerIcon,
  AddIcon,
  ExternalLinkIcon,
  EditIcon,
  IconButton,
  RepeatIcon
} from '@chakra-ui/react'

import { AiOutlineMenu } from 'react-icons/ai'
import { BsGlobe } from 'react-icons/bs'
import { FaCopy } from 'react-icons/fa'
import { SiEpicgames } from 'react-icons/si'
// import { IoMdArrowDropdown } from 'react-icons/io'


const Navbar = () => {
  const [IsNotSmallScreen] = useMediaQuery('(min-width: 900px)')
  return (
    // <>Hola</>
    <Flex
      w={'100%'}
      h={'90px'}
      bgColor={'black'}
      color="white"
      alignItems={'center'}
      paddingLeft={IsNotSmallScreen ? '80px' : '40px'}
      paddingRight={IsNotSmallScreen ? '80px' : '40px'}
    >
      {IsNotSmallScreen ?
        <>
          <Flex w={'100%'} alignItems={'center'}>
            <Text marginBottom={'0'} marginRight={'40px'} fontWeight={'600'}>MY ASSETS</Text>
            <Text marginBottom={'0'} marginRight={'40px'} fontWeight={'600'}>VESTING/CLAIM</Text>
            <Text marginBottom={'0'} marginRight={'40px'} fontWeight={'600'}>MARKETPLACE</Text>
            <Text marginBottom={'0'} marginRight={'40px'} fontWeight={'600'}>STAKING SYSTEM</Text>
          </Flex>
          <Flex w={'20rem'} justifyContent={'end'}>
            <Flex alignItems={'center'}>
              <BsGlobe fontSize={'1.5rem'} />
              <Box ml={2} w={'13rem'} border={'1px solid gold'} borderRadius={'15px'} h={'5rem'}>
                <Flex w={'100%'} mt={2} justifyContent={'center'}>
                  <SiEpicgames fontSize={'1.5rem'} />
                  <Text>100 DANTES</Text>
                </Flex>
                <Flex justifyContent={'center'}>
                  <Text mb={4} mr={2}>1000088 0092309</Text>
                  <FaCopy fontSize={'1.5rem'} />
                </Flex>
              </Box>
            </Flex>
          </Flex>
        </> : <>
          <Menu>
            <MenuButton
              color={'white'}
              _hover={{
                bgColor: 'black'
              }}
              as={IconButton}
              aria-label='Options'
              icon={<AiOutlineMenu />}
              variant='outline'
            />
            <MenuList color={'black'}>
              <MenuItem marginBottom={'0'} marginRight={'40px'} fontWeight={'600'}>MY ASSETS</MenuItem>
              <MenuItem marginBottom={'0'} marginRight={'40px'} fontWeight={'600'}>VESTING/CLAIM</MenuItem>
              <MenuItem marginBottom={'0'} marginRight={'40px'} fontWeight={'600'}>MARKETPLACE</MenuItem>
              <MenuItem marginBottom={'0'} marginRight={'40px'} fontWeight={'600'}>STAKING SYSTEM</MenuItem>
            </MenuList>
          </Menu>
        </>
      }

    </Flex >
  )
}

export default Navbar