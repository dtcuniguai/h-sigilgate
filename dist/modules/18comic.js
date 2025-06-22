export class Comic18 {
    constructor() {
        this.host = 'https://18comic.org';
    }
    getUrl(code) {
        code = this.safeCodeGenerate(code);
        if (!code) {
            throw new Error('數字不可為空');
        }
        return `${this.host}/album/${code}`;
    }
    safeCodeGenerate(code) {
        return code.replace(/[^0-9]/g, '');
    }
}
