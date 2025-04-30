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
  addMember(member: TripMember): void {
    const exists = this.members.find((m) => m.userId === member.userId);
    if (exists) {
      throw new Error('Member already exists in this trip');
    }
    this.members.push(member);
  }
  getMembers(): TripMember[] {
    return [...this.members]; // کپی برای محافظت از داده
  }
  markInitialAmountAsPaid(userId: string): void {
    const member = this.members.find((m) => m.userId === userId);
    if (!member) {
      throw new Error('Member not found');
    }
    member.hasPaidInitialAmount = true;
  }

  changeStatus(newStatus: TripStatus): void {
    this.status = newStatus;
  }
  // می‌تونی این متدها رو به مرور اضافه کنی:
  // - تغییر وضعیت سفر
  // - اضافه‌کردن عضو جدید
  // - بررسی پرداخت تمام اعضا
}
