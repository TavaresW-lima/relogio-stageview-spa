export class Chronometer {

  counting: boolean;
  onGoingTime: number;

  constructor(
    counting: boolean = false,
    time: number = 0
  ) {
    this.counting = counting;
    this.onGoingTime = time;
  }

  public getHour(): number {
    return Math.floor(this.onGoingTime / 3600);
  }

  public getMinute(): number {
    return Math.floor((this.onGoingTime % 3600) / 60);
  }

  public getSecond(): number {
    return Math.floor((this.onGoingTime % 60));
  }

  /**@override*/
  public toString(): string {
    return `${String(this.getHour()).padStart(2,'0')}:${String(this.getMinute()).padStart(2,'0')}:${String(this.getSecond()).padStart(2,'0')}`;
  }
}
