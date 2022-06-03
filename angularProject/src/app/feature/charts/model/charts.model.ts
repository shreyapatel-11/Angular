export class Chart{
    day: string;
    patient: number;
  static LineStyleSpec: any;

    constructor(
        day: string,
        patient: number){
            this.day = day,
            this.patient = patient
        }
}