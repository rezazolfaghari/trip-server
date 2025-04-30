import { Trip } from '@/domain/trip/entities/trip.entity';
import { TripMember } from '@/types/trip/tripMember.type';
import { TripStatus } from '@/types/trip/tripStatus.type';

export class TripService {
  addUserToTrip(trip: Trip, newMember: TripMember): void {
    trip.addMember(newMember);
  }

  confirmInitialPayment(trip: Trip, userId: string): void {
    trip.markInitialAmountAsPaid(userId);
  }

  updateStatus(trip: Trip, status: TripStatus): void {
    trip.changeStatus(status);
  }

  allInitialPaymentsDone(trip: Trip): boolean {
    return trip.getMembers().every(member => member.hasPaidInitialAmount);
  }
}
