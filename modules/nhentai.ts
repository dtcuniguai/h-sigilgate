
import { Hentai } from './hentai';

export class NHentai implements Hentai {

    private host = 'https://nhentai.net';

    getUrl(code: string): string {
        code = this.safeCodeGenerate(code);
        if (!code) {
            throw new Error('數字不可為空');
        }
        return `${this.host}/g/${code}`;
    }

    safeCodeGenerate(code: string): string {
        return code.replace(/[^0-9]/g, '');
    }
}