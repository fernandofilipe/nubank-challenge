import { Violation } from "../constants/Violation";
import { Account } from "./Account";

export class Response {
    constructor() { }

    public output(account: Account | null, violations: Violation[]): string {
        const formatedViolations = this.formatViolations(violations);

        return violations.includes("account-not-initialized") ?
            `{"account": {}, "violations": ["account-not-initialized"]}` :
            `{"account": {"active-card": ${account?.getActiveCard()}, "available-limit": ${account?.getAvailableLimit()}}, "violations": ${formatedViolations}}}`;
    }

    private formatViolations(violations: Violation[]): string {
        return violations.length === 0 ? "[]" : `["${violations.join('","')}"]`;
    }
}