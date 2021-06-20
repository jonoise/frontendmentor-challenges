import React, { useState } from 'react'
import myTheme from '../../myTheme'
import { FaBars, FaTimes } from 'react-icons/fa'
import { Box, Flex, Image, Text, Button, useDisclosure } from '@chakra-ui/react'
import DesktopItems from '../ui/navbar/DesktopItems'
import MobileItems from '../ui/navbar/MobileItems'
function Navbar() {
  const { isOpen, onClose, onToggle } = useDisclosure()
  const [responsive, setResponsive] = useState(false)

  const smallScreens = myTheme.sizes.container.md.split('p')[0]
  window.addEventListener('resize', () => {
    if (window.innerWidth <= smallScreens) {
      setResponsive(true)
    } else {
      setResponsive(false)
    }
  })

  return (
    <Box bg="transparent" position="absolute" h="5rem" w="100%" display="flex">
      <Flex
        px={['.7rem', '1rem', '8.4rem']}
        bg="transparent"
        justify="space-between"
        align="center"
        position="relative"
        w="100%"
      >
        <Flex align="flex-end">
          <Image src="./images/jvpiter-logo.svg" w="20px"></Image>
          <Text fontFamily="mono" fontSize="1.4rem">
            VPYTER
          </Text>
        </Flex>
        <Button onClick={onToggle} display={responsive ? 'block' : 'none'}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </Button>
        {responsive ? (
          <MobileItems items={NavItems} isOpen={isOpen} onClose={onClose} />
        ) : (
          <DesktopItems items={NavItems} />
        )}
      </Flex>
    </Box>
  )
}

const NavItems = [
  {
    title: 'Our work',
    path: '/ourwork',
  },
  {
    title: 'Pricing',
    path: 'pricing',
  },
  {
    title: 'Contact',
    path: '/contact',
  },
  {
    title: 'About',
    path: '/about',
  },
]

export default Navbar
