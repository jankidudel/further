import { RefundStatusEnum, RequestSourceEnum } from "./shared";
import { DateUtil } from "./utils";
import { ReversalStatus } from "./status";

export class Reversal {
    _status: RefundStatusEnum;

    constructor(
        private name: string,
        private customerLocation: string,
        private signupDate: string,
        private requestSource: string,
        private investmentDate: string,
        private investmentTime: string,
        private refundRequestDate: string,
        private refundRequestTime: string
    ) {
        this._status = (new ReversalStatus(
            RequestSourceEnum[requestSource],
            DateUtil.stringToTimestamp(customerLocation, signupDate),
            DateUtil.stringToTimestamp(customerLocation, investmentDate, investmentTime),
            DateUtil.stringToTimestamp(customerLocation, refundRequestDate, refundRequestTime),
        )).status;
    }

    get status(): RefundStatusEnum {
        return this._status;
    }
}