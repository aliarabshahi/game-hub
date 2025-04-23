import React from 'react'
import { Game } from '../hooks/useGames'
import { Heading, Image } from "@chakra-ui/react"
import { Card } from '@chakra-ui/react'
import { CardBody } from '@chakra-ui/react'
interface Props{
    // Define the props for the GameCard component here
    game: Game
}
export const GameCard = ({game}: Props) => {
  return (
    <Card borderRadius={10} overflow="hidden" >
        <Image src={game.background_image} />
        <CardBody>
            <Heading fontSize='2xl'>{game.name}</Heading>
        </CardBody>
    </Card>
  )
}
