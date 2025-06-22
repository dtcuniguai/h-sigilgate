
import { Hentai } from './hentai';

export class Wnacg implements Hentai {

    private host = 'https://wnacg.com';

    getUrl(code: string): string {
        code = this.safeCodeGenerate(code);
        if (!code) {
            throw new Error('數字不可為空');
        }
        return `${this.host}/photos-index-aid-${code}.html`;
    }

    safeCodeGenerate(code: string): string {
        return code.replace(/[^0-9]/g, '');
    }
}