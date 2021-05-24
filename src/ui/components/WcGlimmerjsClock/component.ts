import Component, { tracked } from '@glimmer/component';

export default class WcGlimmerjsClock extends Component {
  @tracked private hours = 0;
  @tracked private minutes = 0;
  @tracked private seconds = 0;

  private offsetMarker = [1, 2, 3, 4];
  private minutesMarker = [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55];

  get date() {
    return new Date();
  }

  constructor(option) {
    super(option);

    setInterval(() => {
      this.hours = this.date.getHours();
      this.minutes = this.date.getMinutes();
      this.seconds = this.date.getSeconds();
    }, 1000);
  }
}
