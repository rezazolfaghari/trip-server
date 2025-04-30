// src/types/trip/trip.dto.ts

import { TripId } from './trip.type';
import { TripStatus } from './tripStatus.type';
import { UserId } from '@/types/user/user.type';
import { Location } from '@/types/shared/location.type';
import { Amount } from '@/types/shared/amount.type';
import { TripMember } from './tripMember.type';

export interface TripDTO {
  id: TripId;
  title: string;
  from: Location;
  to: Location;
  status: TripStatus;
  initialAmount: Amount;
  createdBy: UserId;
  members: TripMember[];
  createdAt: Date;
}
