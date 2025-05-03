// src/types/trip/trip-member.type.ts
import { InitialPayment } from '@/domain/trip/valueObjects/initialPayment.domain';

import { UserId } from '@/types/user/user.type';

export interface TripMember {
  userId: UserId;
  hasPaidInitialAmount: boolean;
  joinedAt: Date;
  initialAmount: InitialPayment;
}