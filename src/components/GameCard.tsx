import { Game } from "../hooks/useGames";
import { Heading, HStack, Image } from "@chakra-ui/react";
import { Card } from "@chakra-ui/react";
import { CardBody } from "@chakra-ui/react";
import { PlatformIconList } from "./PlatformIconList";
import { CriticScore } from "./CriticScore";
import { getCroppedImageUrl } from "../services/image-urls";

interface Props {
  // Define the props for the GameCard component here
  game: Game;
}
export const GameCard = ({ game }: Props) => {
  return (
    <Card >
      <Image src={getCroppedImageUrl(game.background_image)} />
      <CardBody>
        <Heading fontSize="2xl">{game.name}</Heading>
        <HStack justifyContent="space-between">
          <PlatformIconList
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
          <CriticScore score={game.metacritic} />
        </HStack>
      </CardBody>
    </Card>
  );
};
