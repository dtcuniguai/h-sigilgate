import { Hentai } from './hentai';
import { NHentai } from './nhentai';
import { Wnacg } from './wnacg';

/**
 * 根據 selectedSite 返回對應的 Hentai 類實例
 * @param selectedSite - 網站類型 (nhentai 或 wnacg)
 * @returns Hentai 類型的實例
 */
function getHentaiInstance(selectedSite: string): Hentai {
    switch (selectedSite) {
        case 'nhentai':
            return new NHentai();
        case 'wnacg':
            return new Wnacg();
        default:
            throw new Error(`未知的網站類型: ${selectedSite}`);
    }
}


export { getHentaiInstance };