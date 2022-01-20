export const VOTE_STATUS = {
  VOTED: 1,
  COMPUTED: 2,
} as const;
export type VoteStatusTypes = typeof VOTE_STATUS[keyof typeof VOTE_STATUS];

export const VOTING_STATUS = {
  IN_PROGRESS: 1,
  FINISHING: 2,
  FINISHED: 3,
} as const;
export type VotingStatusTypes = typeof VOTING_STATUS[keyof typeof VOTING_STATUS];
