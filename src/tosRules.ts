import { TosRulesEnum, RequestSourceEnum } from "./shared";

export class TosRules {  // Can be different TOS version(end date) for different geographical areas, that's why we probably need an interface here as well
    constructor(private signupTimestamp: number) {
    }
    getTosVersion(): TosRulesEnum {
        if (this.signupTimestamp > TosRulesEnum.New) {
            return TosRulesEnum.New;
        }
        // more logic if we have another TOS version
        return TosRulesEnum.Old;
    }
}

interface DeviceRulesInterface {
    getApprovalLimitSeconds(tosRulesVersion: TosRulesEnum): number;
}

export class PhoneRules implements DeviceRulesInterface {
    getApprovalLimitSeconds(tosRulesVersion: TosRulesEnum): number {
        switch (tosRulesVersion) {
            case TosRulesEnum.New:
                return 8 * 3600;
            default:
                return 4 * 3600;
        }
    }
}

export class WebRules implements DeviceRulesInterface {
    getApprovalLimitSeconds(tosRulesVersion: TosRulesEnum): number {
        switch (tosRulesVersion) {
            case TosRulesEnum.New:
                return 16 * 3600;
            default:
                return 8 * 3600;
        }
    }
}

export class DeviceRulesFacotry {
        static create(requestSource: RequestSourceEnum): DeviceRulesInterface {
            switch (requestSource) {
                case RequestSourceEnum.Phone:
                    return new PhoneRules();
                default:
                    return new WebRules();
            }
        } 
    }