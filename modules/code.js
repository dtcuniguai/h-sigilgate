import { NHENTAI_HOST, NHENTAI_TYPE, WNACG_HOST, WNACG_TYPE } from "./const.js";

export default class Code {

    constructor(codeType) {
        this.codeType = codeType
    }

    getUrl(code) {
        if (this.codeType === NHENTAI_TYPE) {
            return `${NHENTAI_HOST}/g/${code}`;
        } else if (this.codeType === WNACG_TYPE) {
            return `${WNACG_HOST}/photos-index-aid-${code}.html`;
        } else {
            throw new Error('Unknown code type');
        }
    }
}
