export interface Session {
  id: number;
  title: string;
  description: string;
  start_date: string;
  end_date: string;
  agendas?: Agenda[];
  organizer?: Organizer;
}

export interface Agenda {
  id: number;
  title: string;
  description: string;
  sessionId: number;
  status: string;
  startVotingAt: string;
  endVotingAt: string;
  informationVotes: {
    totalVotes: number;
    approvals: number;
    rejects: number;
  };
}

export interface Organizer {
  id: number;
  name: string;
  email: string;
  role: string;
}
