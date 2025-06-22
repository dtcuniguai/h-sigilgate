export class Wnacg {
    constructor() {
        this.host = 'https://wnacg.com';
    }
    getUrl(code) {
        code = this.safeCodeGenerate(code);
        if (!code) {
            throw new Error('數字不可為空');
        }
        return `${this.host}/photos-index-aid-${code}.html`;
    }
    safeCodeGenerate(code) {
        return code.replace(/[^0-9]/g, '');
    }
}
