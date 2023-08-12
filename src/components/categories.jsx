import { Flex, Button, Text, useMediaQuery, Center, border } from "@chakra-ui/react"

import { TbTrident } from 'react-icons/tb'
import { GiSchoolBag, GiPotionBall, GiSpartanHelmet } from 'react-icons/gi'
import { MdPets } from 'react-icons/md'

const Categories = () => {
  const [IsNotSmallScreen] = useMediaQuery('(min-width: 950px)')
  return (
    <Flex
      w={'100%'}
      flexWrap={'nowrap'}
      h={'80px'}
      justifyContent={'center'}
      marginY={'10px'}
      overflowX={IsNotSmallScreen ? 'hidden' : 'scroll'}
    >
      <Button
        ml={['760px', '600px', 4, 2]}
        minW={['100px', '100px', '200px', '7%']}
        maxW={['100px', '100px', '210px', '10%']}
        bgColor={'transparent'}
        _hover={{
          bgColor: "#c7c7c7",
          border: '1px solid gold',
          borderRadius: '8px'

        }}

        mr={4}
      >
        <TbTrident />
        <Text fontSize={'20px'} marginBottom={'0px'}>Demons</Text>
      </Button>

      <Button
        minW={['100px', '100px', '40%', '7%']}
        maxW={['120px', '170px', '210px', '10%']}
        bgColor={'transparent'}
        _hover={{
          bgColor: "#c7c7c7",
          border: '1px solid gold',
          borderRadius: '8px'

        }}
        mr={2}
        marginLeft={8}
      >
        <GiSpartanHelmet />
        <Text mr={4} fontSize={'20px'} marginBottom={'0px'}>Heroes</Text>
      </Button>

      <Button
        minW={['100px', '90px', '40%', '7%']}
        maxW={['100px', '90px', '210px', '10%']}
        bgColor={'transparent'}
        _hover={{
          bgColor: "#c7c7c7",
          border: '1px solid gold',
          borderRadius: '8px'

        }}
        mr={4}
        marginLeft={'40px'}
      >
        <MdPets />
        <Text mr={4} fontSize={'20px'} marginBottom={'0px'}>Pets</Text>
      </Button>

      <Button
        minW={['100px', '100px', '40%', '7%']}
        maxW={['150px', '170px', '210px', '15%']}
        bgColor={'transparent'}
        _hover={{
          bgColor: "#c7c7c7",
          border: '1px solid gold',
          borderRadius: '8px'

        }}
        mr={8}
        marginLeft={'40px'}
      >
        <GiSchoolBag />
        <Text mr={4} fontSize={'20px'} marginBottom={'0px'}>Equipament</Text>
      </Button>

      <Button
        minW={['100px', '100px', '40%', '7%']}
        maxW={['100px', '170px', '210px', '10%']}
        bgColor={'transparent'}
        _hover={{
          bgColor: "#c7c7c7",
          border: '1px solid gold',
          borderRadius: '8px'

        }}
        mr={4}
        marginLeft={'40px'}
      >
        <GiPotionBall />
        <Text mr={4} fontSize={'20px'} marginBottom={'0px'}>Potions</Text>
      </Button>

      <Button
        minW={['100px', '90px', '40%', '7%']}
        maxW={['100px', '90px', '210px', '10%']}
        bgColor={'transparent'}
        _hover={{
          bgColor: "#c7c7c7",
          border: '1px solid gold',
          borderRadius: '8px'

        }}
        mr={4}
        marginLeft={'40px'}
      >
        <TbTrident />
        <Text mr={4} fontSize={'20px'} marginBottom={'0px'}>Spell</Text>
      </Button>

      <Button
        minW={['150px', '130px', '90%', '7%']}
        bgColor={'gray.100'}
        h={'2.5rem'}
        _hover={{
          bgColor: "#c7c7c7",
          border: '1px solid gold',
          borderRadius: '8px'

        }}
        ml={4}
        mr={4}
      >
        <Text fontSize={'1rem'} marginBottom={'0px'} >374.931 heroes</Text>
      </Button>
    </Flex>
  )
}

export default Categories