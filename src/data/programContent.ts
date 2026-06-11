export type ProgramId = 'self' | 'advisor' | 'leadership' | 'management' | 'mentoria';

export const PROGRAM_ID_TO_SLUG: Record<ProgramId, string> = {
  self: 'self-management',
  advisor: 'advisor',
  leadership: 'leadership',
  management: 'management',
  mentoria: 'mentoria-individual',
};
