import { Flex, Button, Text, useMediaQuery, Center, border } from "@chakra-ui/react"

const SubHeader = () => {
  const [IsNotSmallScreen] = useMediaQuery('(min-width: 950px)')
  return (
    <Flex
      w={'100%'}
      flexWrap={'nowrap'}
      h={'80px'}
      justifyContent={'center'}
      marginY={'10px'}
      overflow={IsNotSmallScreen ? 'hidden' : 'scroll'}
    >
      <Button
        minW={['100px', '150px', '200px', '7%']}
        bgColor={'transparent'}
        _hover={{
          bgColor: "#c7c7c7",
          border: '1px solid gold',
          borderRadius: '8px'

        }}
        ml={['650px', '620px', '500px', 2]}
        mr={8}
      >
        <Text mr={4} fontSize={'1rem'} textAlign={'end'} marginBottom={'0px'} marginLeft={'10px'}>MARKETPLACE</Text>
      </Button>

      <Button
        minW={['100px', '150px', '200px', '7%']}
        bgColor={'transparent'}
        _hover={{
          bgColor: "#c7c7c7",
          border: '1px solid gold',
          borderRadius: '8px'

        }}
        ml={['70px', '50px', 4, 4]}
        mr={12}
      >
        <Text mr={4} fontSize={'1rem'} textAlign={'end'} marginBottom={'0px'} marginLeft={'10px'}>CREATE A SALE</Text>
      </Button>

      <Button
        minW={['100px', '150px', '200px', '7%']}
        bgColor={'transparent'}
        _hover={{
          bgColor: "#c7c7c7",
          border: '1px solid gold',
          borderRadius: '8px'

        }}
        mr={8}
        ml={12}
      >
        <Text mr={4} fontSize={'1rem'} textAlign={'end'} marginBottom={'0px'} marginLeft={'10px'}>MY LISTING</Text>
      </Button>

      <Button
        minW={['100px', '150px', '200px', '7%']}
        bgColor={'transparent'}
        _hover={{
          bgColor: "#c7c7c7",
          border: '1px solid gold',
          borderRadius: '8px'

        }}
        ml={12}
        mr={8}
      >
        <Text mr={8} fontSize={'1rem'} textAlign={'end'} marginBottom={'0px'} marginLeft={'10px'}>MY PURCHASES</Text>
      </Button>

      <Button
        minW={['100px', '150px', '200px', '7%']}
        bgColor={'transparent'}
        _hover={{
          bgColor: "#c7c7c7",
          border: '1px solid gold',
          borderRadius: '8px'

        }}
        mr={8}
        ml={12}
      >
        <Text fontSize={'1rem'} textAlign={'end'} marginBottom={'0px'} marginLeft={'10px'}>FAVORITES</Text>
      </Button>
    </Flex>
  )
}

export default SubHeader