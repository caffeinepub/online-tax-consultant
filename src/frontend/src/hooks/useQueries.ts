import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useActor } from './useActor';
import type { LeadSubmission } from '../backend';

export function useSubmitLead() {
  const { actor } = useActor();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({
      name,
      contactInfo,
      serviceInterested,
      message,
    }: {
      name: string;
      contactInfo: string;
      serviceInterested: string;
      message: string;
    }) => {
      if (!actor) throw new Error('Actor not available');
      return actor.submitLead(name, contactInfo, serviceInterested, message);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['leads'] });
    },
  });
}

export function useGetAllLeads() {
  const { actor, isFetching } = useActor();

  return useQuery<LeadSubmission[]>({
    queryKey: ['leads'],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getAllLeads();
    },
    enabled: !!actor && !isFetching,
  });
}
