'use strict';

import Code from '../modules/code.js';

// url jumper
function baseHandler(request) {
    if (request.action === "openUrl") {
        //init const
        const code = request.number;
        const selectedSite = request.selectedSite;
        const hentai = new Code(selectedSite);
        chrome.tabs.create({ url: hentai.getUrl(code) });
    }
}

chrome.runtime.onMessage.addListener(baseHandler);


