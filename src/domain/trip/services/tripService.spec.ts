import { Trip } from '@/domain/trip/entities/trip.entity';
import { TripStatus } from '@/types/trip/tripStatus.type';
import { TripService } from '@/domain/trip/services/tripService.domain';
import { TripMember } from '@/types/trip/tripMember.type';

describe('TripService', () => {
  let trip: Trip;
  let service: TripService;

  const member1: TripMember = { userId: 'u1', hasPaidInitialAmount: false , joinedAt: new Date() };
  const member2: TripMember = { userId: 'u2', hasPaidInitialAmount: false , joinedAt: new Date() };
  

  beforeEach(() => {
    trip = new Trip('trip1', 'سفر شمال', TripStatus.NotStarted,"",TripStatus.NotStarted,"",[],100,new Date());
    service = new TripService();
  });

  it('should add new members to trip', () => {
    service.addUserToTrip(trip, member1);
    service.addUserToTrip(trip, member2);

    expect(trip.getMembers().length).toBe(2);
  });

  it('should not allow duplicate members', () => {
    service.addUserToTrip(trip, member1);
    expect(() => service.addUserToTrip(trip, member1)).toThrowError('Member already exists in this trip');
  });

  it('should mark member as paid', () => {
    service.addUserToTrip(trip, member1);
    service.confirmInitialPayment(trip, 'u1');

    const updatedMember = trip.getMembers().find(m => m.userId === 'u1');
    expect(updatedMember?.hasPaidInitialAmount).toBe(true);
  });

  it('should check if all members have paid', () => {
    service.addUserToTrip(trip, member1);
    service.addUserToTrip(trip, member2);

    service.confirmInitialPayment(trip, 'u1');
    expect(service.allInitialPaymentsDone(trip)).toBe(false);

    service.confirmInitialPayment(trip, 'u2');
    expect(service.allInitialPaymentsDone(trip)).toBe(true);
  });

  it('should update trip status', () => {
    service.updateStatus(trip, TripStatus.InProgress);
    expect(trip.status).toBe(TripStatus.InProgress);
  });
});
