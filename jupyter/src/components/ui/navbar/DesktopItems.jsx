import React from 'react'
import { Link as RouterLink } from 'react-router-dom'
import { Link, Text, HStack } from '@chakra-ui/react'

function DesktopItems(props) {
  return (
    <>
      <HStack spacing="6" fontWeight="600" display={['none', 'none', 'flex']}>
        {props.items.map((item) => {
          return (
            <Link as={RouterLink} to={item.path}>
              <Text>{item.title}</Text>
            </Link>
          )
        })}
      </HStack>
    </>
  )
}

export default DesktopItems
