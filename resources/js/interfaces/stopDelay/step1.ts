export interface IStep1 {
    from: string; // start airport
    to: string; // end airport
    directFlight: number;
    countOfStops: number;
    placeOfStops: Array<Number>;
}
