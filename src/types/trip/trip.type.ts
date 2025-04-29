// src/types/trip/trip.type.ts

import { TripStatus } from './tripStatus.type';

export type TripId = string;

export interface TripDTO {
  id: TripId;
  title: string;
  from: string;
  to: string;
  status: TripStatus;
  initialAmount: number;
  createdBy: string; // UserId
  members: string[]; // UserIds
}