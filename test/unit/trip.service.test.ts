import { TripService } from '@/domain/trip/services/tripService.domain';
import { InMemoryTripRepository } from '@/infrastructure/repositories/fake-trip.repository';
import { Trip } from '@/domain/trip/entities/trip.entity';
import { TripStatus } from '@/types/trip/tripStatus.type';

it('should add a user to a trip', async () => {
  const repo = new InMemoryTripRepository();
  const service = new TripService(repo);

  const trip = new Trip('1', 'Trip 1', 'Source', 'Destination', TripStatus.NotStarted, '1', [], 0, new Date());
  await repo.save(trip);

  const member = { userId: '2', hasPaidInitialAmount: false, joinedAt: new Date() , initialAmount: 0 };
  await service.addUserToTrip(trip.tripId, member);

  const updatedTrip = await repo.findById(trip.tripId);
  expect(updatedTrip?.getMembers()).toContainEqual(member);
});
