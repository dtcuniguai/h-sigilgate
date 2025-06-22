'use strict';

import {getHentaiInstance} from '../dist/modules/hentaiFactory.js'

// 神秘數字開啟分頁
function baseHandler(request) {
    if (request.action === "openUrl") {
        //init const
        const code = request.magicCode;
        const selectedSite = request.selectedSite;
        const website = getHentaiInstance(selectedSite);
        chrome.tabs.create({ url: website.getUrl(code) });
    }
}

// 右鍵選單建立
chrome.runtime.onInstalled.addListener(() => {
    // 創建主選單
    chrome.contextMenus.create({
        id: "mainMenu",
        title: "發現神的數字",
        contexts: ["all"] // 在所有情境下顯示
    });

    // sub menu1
    chrome.contextMenus.create({
        id: "nhentaiMenu",
        parentId: "mainMenu", // 指定父級選單
        title: "前往 nhentai(nhentai.net)",
        contexts: ["all"]
    });

    // sub menu2
    chrome.contextMenus.create({
        id: "wnacgMenu",
        parentId: "mainMenu", // 指定父級選單
        title: "前往紳士漫畫(wnacg.com)",
        contexts: ["all"]
    });
});

// 右鍵選單點擊事件
chrome.contextMenus.onClicked.addListener((info) => {

    var selectedSite;
    var code = info.selectionText;
    // 根據選單 ID 執行不同的邏輯
    if (info.menuItemId === "nhentaiMenu") {
        selectedSite = "nhentai";
    } else if (info.menuItemId === "wnacgMenu") {
        selectedSite = "wnacg";
    }

    // 發送消息給背景腳本
    baseHandler({
        action: "openUrl",
        magicCode: code,
        selectedSite: selectedSite
    });
});

chrome.runtime.onMessage.addListener(baseHandler);


