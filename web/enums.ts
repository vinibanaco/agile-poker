export const VOTE_STATUS = {
  VOTED: 1,
  COMPUTED: 2,
} as const;

export type VoteStatusTypes = typeof VOTE_STATUS[keyof typeof VOTE_STATUS];
