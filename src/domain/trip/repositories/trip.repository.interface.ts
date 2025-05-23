import { Trip } from '@/domain/trip/entities/trip.entity';

export interface TripRepository {
  findById(tripId: string): Promise<Trip | null>;
  save(trip: Trip): Promise<void>;
}
