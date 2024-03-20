import { getTeamsMock } from "../hooks/queries/teams/mocks/utils/getTeamMock";
import { Team } from "../models/team/Team";
import { TeamCropped } from "../models/team/TeamCropped";

type TeamsBuilderType = Team | TeamCropped;

class TeamsBuilder<T extends TeamsBuilderType> {
  teams: T[] = [];

  isCropped?: boolean;

  constructor(count: number | undefined = 50, isCropped?: boolean) {
    this.isCropped = isCropped;

    if (isCropped) (this.teams as TeamCropped[]) = [];
    else (this.teams as Team[]) = getTeamsMock(count);
  }

  getTeams() {
    return this.teams;
  }

  getPartialTeams(startIndex: number, endIndex: number) {
    return this.teams.slice(startIndex, endIndex);
  }

  getUserById(teamId: string) {
    return this.teams.filter(({ id }) => id === teamId)[0];
  }
}

export const teamsBuilder: TeamsBuilder<Team> = new TeamsBuilder(50);
