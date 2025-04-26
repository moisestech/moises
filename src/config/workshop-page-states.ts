export const WORKSHOP_PAGE_STATES = {
  days: {
    '1': true,  // Day 1 is enabled
    '2': false,  // Day 2 is enabled
    '3': false,  // Day 3 is enabled
    '4': false,  // Day 4 is enabled
  },
  sessions: {
    '1': {
      '1': true,  // Day 1 Session 1 is enabled
      '2': true,  // Day 1 Session 2 is enabled
    },
    '2': {
      '1': true,  // Day 2 Session 1 is enabled
      '2': true,  // Day 2 Session 2 is enabled
    },
    '3': {
      '1': true,  // Day 3 Session 1 is enabled
      '2': true,  // Day 3 Session 2 is enabled
    },
    '4': {
      '1': true,  // Day 4 Session 1 is enabled
      '2': true,  // Day 4 Session 2 is enabled
    },
  },
  info: {
    'schedule': true, // Schedule section is enabled
  }
} as const;

export type WorkshopPageState = {
  isEnabled: boolean;
  message?: string;
};

export function getPageState(day: string, session?: string): WorkshopPageState {
  const dayEnabled = WORKSHOP_PAGE_STATES.days[day as keyof typeof WORKSHOP_PAGE_STATES.days];
  
  if (!dayEnabled) {
    return {
      isEnabled: false,
      message: 'This day is not yet available. Check back soon!',
    };
  }

  if (session) {
    const sessionEnabled = WORKSHOP_PAGE_STATES.sessions[day as keyof typeof WORKSHOP_PAGE_STATES.sessions]?.[session as keyof typeof WORKSHOP_PAGE_STATES.sessions['1']];
    
    if (!sessionEnabled) {
      return {
        isEnabled: false,
        message: 'This session is not yet available. Check back soon!',
      };
    }
  }

  return { isEnabled: true };
} 