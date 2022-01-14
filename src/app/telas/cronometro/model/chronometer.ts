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
}
