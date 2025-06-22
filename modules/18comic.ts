
import { Hentai } from './hentai';

export class Comic18 implements Hentai {

    private host = 'https://18comic.org';

    getUrl(code: string): string {
        code = this.safeCodeGenerate(code);
        if (!code) {
            throw new Error('數字不可為空');
        }
        return `${this.host}/album/${code}`;
    }

    safeCodeGenerate(code: string): string {
        return code.replace(/[^0-9]/g, '');
    }
}