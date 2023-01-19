import { Helper } from "../../helpers/utils";
import { TransactionOperation } from "./TransactionOperation";

export class Account {
    private accountTransactions: TransactionOperation[] = [];
    constructor(private activeCard: boolean, private availableLimit: number) {
        this.activeCard = activeCard;
        this.availableLimit = availableLimit;
    }

    public getAvailableLimit(): number {
        return this.availableLimit;
    }

    public setAvailableLimit(availableLimit: number) {
        this.availableLimit = availableLimit;
    }

    public updateAvailableLimit(amount: number) {
        this.availableLimit -= amount;
    }

    public getActiveCard(): boolean {
        return this.activeCard;
    }

    public setActiveCard(activeCard: boolean) {
        this.activeCard = activeCard;
    }

    public addTransaction(transaction: TransactionOperation): void {
        this.accountTransactions.push(transaction);
    }

    public getTransactions(): TransactionOperation[] {
        return this.accountTransactions;
    }

    public getLastNTransactions(numberOfTransactions: number): TransactionOperation[] {
        return this.accountTransactions.length <= numberOfTransactions ? this.accountTransactions : this.accountTransactions.slice(this.accountTransactions.length - numberOfTransactions);
    }

    public getLastNMinutesTransactions(minutes: number, actualTime: string): TransactionOperation[] {
        const actualTimeDate = new Date(actualTime);
        return this.accountTransactions.filter((transaction) => Helper.diffDates(actualTimeDate, new Date(transaction.getTime())) <= minutes * 60 * 1000);
    }
}