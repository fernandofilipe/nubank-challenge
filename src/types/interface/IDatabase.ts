import { AccountOperation } from "../concrete/AccountOperation";
import { TransactionOperation } from "../concrete/TransactionOperation";

export interface IDatabase {
    create(operation: AccountOperation): void;
    update(operation: TransactionOperation): void;
}