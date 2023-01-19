import { Violation } from "../constants/Violation";
import { IOperation } from "../interface/IOperation";
import { Account } from "./Account";

export class AccountOperation implements IOperation {
    constructor(private activeCard: boolean, private availableLimit: number, private violations: Violation[]) {
        this.activeCard = activeCard;
        this.availableLimit = availableLimit;
        this.violations = [];
    }

    public validate(account: Account): Violation[] {
        let violations: Violation[] = [];
        if (account)
            violations.push("account-already-initialized");

        return violations;
    }

    public getAvailableLimit(): number {
        return this.availableLimit;
    }

    public setAvailableLimit(availableLimit: number) {
        this.availableLimit = availableLimit;
    }

    public getActiveCard(): boolean {
        return this.activeCard;
    }

    public setActiveCard(activeCard: boolean) {
        this.activeCard = activeCard;
    }

    public addViolation(violation: Violation) {
        this.violations.push(violation);
    }
}