import { MultipleViolations as database } from "../database/operations";
import { AccountOperation } from "../types/concrete/AccountOperation";
import { TransactionOperation } from "../types/concrete/TransactionOperation";

export default class OperationServices {
    constructor() { }

    public getOperations(): (AccountOperation | TransactionOperation)[] {
        const mappedItems: (AccountOperation | TransactionOperation)[] = database.map((register: string) => {
            const item: any = JSON.parse(register);
            if (item['account'])
                return new AccountOperation(item['account']['active-card'] as boolean, item['account']['available-limit'] as number, []);

            return new TransactionOperation(item['transaction']['merchant'], item['transaction']['amount'] as number, item['transaction']['time'], []);
        });

        return mappedItems;
    }
}