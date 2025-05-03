import { Trip } from '@/domain/trip/entities/trip.entity';
import { TripMember } from '@/types/trip/tripMember.type';
import { TripStatus } from '@/types/trip/tripStatus.type';
import { InitialPayment } from '@/domain/trip/valueObjects/initialPayment.domain';

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

  setInitialPayment(trip: Trip, userId: string, amount: number) {
    const member = trip.getMembers().find(m => m.userId === userId);
    if (!member) {
      throw new Error('User is not a member of this trip.');
    }

    member.initialAmount = new InitialPayment(amount);
  }
}
