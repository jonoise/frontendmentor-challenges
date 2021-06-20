import React from 'react'
import { Link as RouterLink } from 'react-router-dom'
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  VStack,
  Text,
  Link,
} from '@chakra-ui/react'

function MobileItems(props) {
  return (
    <>
      <Drawer placement="top" isOpen={props.isOpen} onClose={props.onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader borderBottomWidth="1px">Menu</DrawerHeader>
          <DrawerBody>
            <VStack>
              {/* MAP */}
              {props.items.map((item) => {
                return (
                  <Link as={RouterLink} to={item.path}>
                    <Text>{item.title}</Text>
                  </Link>
                )
              })}
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  )
}

export default MobileItems
