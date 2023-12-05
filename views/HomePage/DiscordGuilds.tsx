import styled from 'styled-components';
import { AutofitGrid, AutofitGridMobile } from 'components/AutofitGrid';
import { Title } from 'components/BasicSection';
import Container from 'components/Container';
import { DiscordGuildCard } from 'components/DiscordGuildCard';
import { DiscordGuildsProps } from 'types/discord';

export const DiscordGuilds = ({ discordGuilds, totalCount }: DiscordGuildsProps) => {
  return (
    <CustomContainer>
      <Title>
        Over {totalCount.toString()} Discord Servers <br /> are protected by <Text>Sunscreen Bot</Text>
      </Title>
      <AutofitGrid>
        {discordGuilds.map((guild) => {
          return <DiscordGuildCard {...guild} key={guild.guildId} />;
        })}
      </AutofitGrid>

      <AutofitGridMobile>
        {discordGuilds.slice(0, 5).map((guild) => {
          return <DiscordGuildCard {...guild} key={guild.guildId} />;
        })}
      </AutofitGridMobile>
    </CustomContainer>
  );
};

const Text = styled.strong`
  color: #fb7324;
`;
const CustomContainer = styled(Container)`
  text-align: center;
  margin-top: 5rem;
`;
