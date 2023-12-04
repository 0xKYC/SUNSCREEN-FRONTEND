import styled from 'styled-components';
import { DiscordGuild } from 'types/discord';

export const DiscordGuildCard = ({ guildName, uniqueCount }: DiscordGuild) => {
  return (
    <Card>
      <Name>{guildName}</Name>
      <Text>
        Unique people: <Span>{uniqueCount} </Span>
      </Text>
    </Card>
  );
};

const Span = styled.span`
  color: white;
`;
const Name = styled.p`
  font-size: 1.7rem;
  font-weight: 600;
  margin-top: 0.3rem;
`;

const Text = styled.p`
  font-size: 1.6rem;
  margin: 0.3rem;
`;
const Card = styled.div`
  background: rgb(var(--cardBackground));
  padding: 1.8rem;
  border-radius: 0.6rem;
  margin: 1rem;
`;
