

import { Account } from "../types/concrete/Account";
import { AccountOperation } from "../types/concrete/AccountOperation";
import { Response } from "../types/concrete/Response";
import { TransactionOperation } from "../types/concrete/TransactionOperation";
import { Violation } from "../types/constants/Violation";
import { IDatabase } from "../types/interface/IDatabase";

export class Database implements IDatabase {
    private account: Account | null = null; //se houvessem mais contas criaria um Map
    private responseService: Response = new Response();

    constructor() { }

    public create(operation: AccountOperation): string {
        let violations: Violation[] = this.account ? operation.validate(this.account) : [];

        if (violations.length > 0)
            return this.responseService.output(this.account, violations);

        this.account = new Account(operation.getActiveCard(), operation.getAvailableLimit());
        return this.responseService.output(this.account, violations);
    }

    public update(operation: TransactionOperation): string {
        let violations: Violation[] = this.account ? operation.validate(this.account) : [];

        if (violations.length > 0)
            return this.responseService.output(this.account, violations);

        this.account?.updateAvailableLimit(operation.getAmount());
        this.account?.addTransaction(operation);
        return this.responseService.output(this.account, violations);
    }
}