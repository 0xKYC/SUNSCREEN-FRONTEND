export type DiscordGuild = {
  guildId: string;
  guildName: string;
  roleId: string;
  uniqueCount: number;
};

export type DiscordGuildsProps = {
  discordGuilds: DiscordGuild[];
  totalCount: number;
};
