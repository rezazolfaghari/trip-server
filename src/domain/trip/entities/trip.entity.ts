import { TripId } from '@/types/trip/trip.type';
import { TripStatus } from '@/types/trip/tripStatus.type';
import { TripMember } from '@/types/trip/tripMember.type';
import { Amount } from '@/types/shared/amount.type';

export class Trip {
  constructor(
    private readonly id: TripId,
    private title: string,
    private source: string,
    private destination: string,
    private status: TripStatus,
    private ownerId: string,
    private members: TripMember[],
    private initialAmount: Amount,
    private readonly createdAt: Date,
  ) {}

  get tripId(): TripId {
    return this.id;
  }

  get tripTitle(): string {
    return this.title;
  }

  get tripStatus(): TripStatus {
    return this.status;
  }

  get allMembers(): TripMember[] {
    return this.members;
  }

  get totalMembers(): number {
    return this.members.length;
  }

  // می‌تونی این متدها رو به مرور اضافه کنی:
  // - تغییر وضعیت سفر
  // - اضافه‌کردن عضو جدید
  // - بررسی پرداخت تمام اعضا
}
