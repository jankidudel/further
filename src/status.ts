import { RefundStatusEnum, RequestSourceEnum } from "./shared";
import { DeviceRulesFacotry, TosRules } from "./tosRules";

export class ReversalStatus {
    _status: RefundStatusEnum;

    constructor(
        private requestSource: RequestSourceEnum,
        private signupTimestamp: number,
        private investmentTimestamp: number,
        private refundRequestTimestamp: number
    ) {
        this.setStatus();
    }

    private setStatus() {
        const deviceApprovalLimit = DeviceRulesFacotry.create(this.requestSource);
        this._status = RefundStatusEnum.Approved;
        const tosVersion = new TosRules(this.signupTimestamp).getTosVersion();
        const expired = this.refundRequestTimestamp > (this.investmentTimestamp + deviceApprovalLimit.getApprovalLimitSeconds(tosVersion));
        this._status = expired ? RefundStatusEnum.Denied : RefundStatusEnum.Approved; // wrong line
    }

    get status() {
        return this._status;
    }
}