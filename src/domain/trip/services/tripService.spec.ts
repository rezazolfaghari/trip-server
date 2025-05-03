import { Trip } from '@/domain/trip/entities/trip.entity';
import { TripStatus } from '@/types/trip/tripStatus.type';
import { InitialPayment } from '@/domain/trip/valueObject/initialPayment.domain';
import { TripService } from '@/domain/trip/services/tripService.domain';
it('should assign initial payment to a trip member', () => {
  const member = {
    userId: 'u1',
    hasPaidInitialAmount: false,
    joinedAt: new Date(),
    initialAmount: new InitialPayment(100)
  };

  const trip = new Trip("2" , 't1', "source", "MSHD", TripStatus.Completed, "2", [member], 1000, new Date());
  const service = new TripService();
  service.addUserToTrip(trip, member);

  service.setInitialPayment(trip, 'u1', 500);

  const updatedMember = trip.getMembers().find(m => m.userId === 'u1');  expect(updatedMember?.initialAmount.value).toBe(500);
});