import { TripRepository } from '@/domain/trip/repositories/trip.repository.interface';
import { Trip } from '@/domain/trip/entities/trip.entity';

export class InMemoryTripRepository implements TripRepository {
  private trips: Trip[] = [];

  async findById(tripId: string): Promise<Trip | null> {
    return this.trips.find(t => t.tripId === tripId) || null;
  }

  async save(trip: Trip): Promise<void> {
    const index = this.trips.findIndex(t => t.tripId === trip.tripId);
    if (index >= 0) this.trips[index] = trip;
    else this.trips.push(trip);
  }
}
