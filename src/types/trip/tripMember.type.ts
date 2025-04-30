// src/types/trip/trip-member.type.ts

import { UserId } from '@/types/user/user.type';

export interface TripMember {
  userId: UserId;
  hasPaidInitialAmount: boolean;
  joinedAt: Date;
}
