import { Trip } from '@/domain/trip/entities/trip.entity';
import { TripMember } from '@/types/trip/tripMember.type';
import { TripStatus } from '@/types/trip/tripStatus.type';
import { InitialPayment } from '@/domain/trip/valueObject/initialPayment.domain';
import { TripRepository } from '@/domain/trip/repositories/trip.repository.interface';


export class TripService {

  constructor(private readonly tripRepository: TripRepository) {}
  
  async addUserToTrip(tripId: string, member: TripMember) {
    const trip = await this.tripRepository.findById(tripId);
    if (!trip) throw new Error('Trip not found');
    trip.addMember(member);
    await this.tripRepository.save(trip);
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
