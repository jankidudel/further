import moment from "moment";
import { LocationEnum } from "./shared";

export class DateUtil {
    public static stringToTimestamp(location: string, dateStr: string, timeStr?: string): number {
        let dateFormat;
        switch(location) {
            case LocationEnum.Europe:
                dateFormat = 'D/M/YYYY HH:mm';
                break;
            default:
                dateFormat = 'M/D/YYYY HH:mm';;
                break;
        }

        const m = moment(dateStr + ' ' + timeStr, dateFormat);
        return m.unix();
    }
}