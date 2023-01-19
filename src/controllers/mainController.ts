
import { Database } from "../services/DatabaseServices";
import OperationServices from "../services/OperationServices";
import { AccountOperation } from "../types/concrete/AccountOperation";
import { TransactionOperation } from "../types/concrete/TransactionOperation";

export default class MainController {
    private operations: (AccountOperation | TransactionOperation)[] = [];
    constructor() { }

    public run() {
        console.log("Running");
        this.operations = this.load();
        this.authorize();
    }

    private load(): (AccountOperation | TransactionOperation)[] {
        const operationServices = new OperationServices();
        return operationServices.getOperations();
    }

    private authorize(): boolean {
        const database = new Database();

        this.operations.map((operation) => {
            if ('activeCard' in operation)
                console.log(database.create(operation as AccountOperation));

            if ('merchant' in operation)
                console.log(database.update(operation as TransactionOperation));
        });

        return true;
    }
}
