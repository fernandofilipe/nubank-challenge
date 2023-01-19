import { Account } from "../concrete/Account";
import { Violation } from "../constants/Violation";

export interface IOperation {
    validate(account: Account): Violation[];
    addViolation(violation: Violation): void;
};