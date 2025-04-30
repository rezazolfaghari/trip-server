import { Trip } from '@/domain/trip/entities/trip.entity';
import { TripMember } from '@/types/trip/tripMember.type';
import { TripStatus } from '@/types/trip/tripStatus.type';
import { TripService } from '@/domain/trip/services/tripService.domain';

const trip = new Trip('trip1', 'سفر شمال', TripStatus.NotStarted,"",TripStatus.NotStarted,"",[],100,new Date());

const member1: TripMember = { userId: 'u1', hasPaidInitialAmount: false , joinedAt: new Date() };
const member2: TripMember = { userId: 'u2', hasPaidInitialAmount: false , joinedAt: new Date() };

const service = new TripService();

service.addUserToTrip(trip, member1);
service.addUserToTrip(trip, member2);

service.confirmInitialPayment(trip, 'u1');

console.log(service.allInitialPaymentsDone(trip)); // false

service.confirmInitialPayment(trip, 'u2');

if (service.allInitialPaymentsDone(trip)) {
  service.updateStatus(trip, TripStatus.InProgress);
}

console.log(trip);