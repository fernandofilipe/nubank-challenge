import { frequencyNumberOfTransactions, frequencyMaxTime, doubledTransactionMaxTime } from "../../config/settings";
import { Helper } from "../../helpers/utils";
import { Violation } from "../constants/Violation";
import { IOperation } from "../interface/IOperation";
import { Account } from "./Account";

export class TransactionOperation implements IOperation {
    constructor(private merchant: string, private amount: number, private time: string, private violations: string[]) {
        this.merchant = merchant;
        this.amount = amount;
        this.time = time;
        this.violations = violations;
    }

    public getMerchant(): string {
        return this.merchant;
    }

    public setMerchant(merchant: string) {
        this.merchant = merchant;
    }

    public getAmount(): number {
        return this.amount;
    }

    public setAmount(amount: number) {
        this.amount = amount;
    }

    public getTime(): string {
        return this.time;
    }

    public setTime(time: string): void {
        this.time = time;
    }

    public addViolation(violation: Violation): void {
        this.violations.push(violation);
    }

    public validate(account: Account): Violation[] {
        let violations: Violation[] = [];
        if (!account) {
            violations.push("account-not-initialized");
            return violations;
        }

        if (!account.getActiveCard())
            violations.push('card-not-active');

        if (account.getAvailableLimit() - this.amount < 0)
            violations.push('insufficient-limit');

        if (this.hasHighFrequencySmallInterval(account, this.time))
            violations.push('high-frequency-small-interval');

        if (this.hasDoubledTransaction(account, this.time))
            violations.push('doubled-transaction');

        return violations;
    }

    private hasHighFrequencySmallInterval(account: Account, time: string): boolean {
        if (!account || !account.getActiveCard())
            return false;

        const last3transactions: TransactionOperation[] = account.getLastNTransactions(frequencyNumberOfTransactions);
        if (last3transactions.length < frequencyNumberOfTransactions)
            return false;

        const olderTransaction: TransactionOperation = last3transactions[0];
        const olderTransactionTime: Date = new Date(olderTransaction.getTime());
        const actualTime: Date = new Date(time);

        return Helper.diffDates(actualTime, olderTransactionTime) <= frequencyMaxTime;
    }

    private hasDoubledTransaction(account: Account, time: string): boolean {
        if (!account || !account.getActiveCard())
            return false;

        const lastTransactions: TransactionOperation[] = account.getLastNMinutesTransactions(doubledTransactionMaxTime, time);
        const filterdTransactions = lastTransactions.filter((transaction) => this.merchant === transaction.merchant && this.amount === transaction.amount);

        return filterdTransactions.length > 0;
    }
};