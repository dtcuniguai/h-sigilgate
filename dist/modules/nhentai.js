export class NHentai {
    constructor() {
        this.host = 'https://nhentai.net';
    }
    getUrl(code) {
        code = this.safeCodeGenerate(code);
        if (!code) {
            throw new Error('數字不可為空');
        }
        return `${this.host}/g/${code}`;
    }
    safeCodeGenerate(code) {
        return code.replace(/[^0-9]/g, '');
    }
}
