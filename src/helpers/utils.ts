export class Helper {
    constructor() { }

    public static diffDates(dateA: Date, dateB: Date): number {
        return (dateA.getTime() - dateB.getTime()) / (1000 * 60); // in minutes => (1000 - milliseconds = 1 second and 60 seconds = 1 minute)
    }
}