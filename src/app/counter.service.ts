export class CounterService {
  activeToInactiveCounter = 0;
  inactiveToActiveCounter = 0;

  incrementActiveToInactive(){
    this.activeToInactiveCounter++;
    console.log('act to inactive ' + this.activeToInactiveCounter);
  }

  incrementInactiveToActive(){
    this.inactiveToActiveCounter++;
    console.log('inact to active ' + this.inactiveToActiveCounter);
  }

}
