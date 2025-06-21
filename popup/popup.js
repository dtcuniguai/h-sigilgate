let selectedSite = "nhentai";

// 頁面加載時設置預設選項
document.addEventListener("DOMContentLoaded", () => {
    const defaultButton = document.querySelector('.option-button[data-site="nhentai"]');
    if (defaultButton) {
        defaultButton.classList.add("selected"); // 添加選中樣式
    }
});

// 監聽所有 .option-button 的點擊事件
document.querySelectorAll(".option-button").forEach(button => {
    button.addEventListener("click", () => {
        // 移除其他按鈕的選中狀態
        document.querySelectorAll(".option-button").forEach(btn => btn.classList.remove("selected"));

        // 為當前按鈕添加選中狀態
        button.classList.add("selected");

        // 更新選中的網站類型
        selectedSite = button.getAttribute("data-site");
    });
});

// 尻尻去
document.getElementById("openUrlButton").addEventListener("click", () => {
    
    const number = document.getElementById("numberInput").value;
    if (!number) {
        alert("請輸入編號");
        return;
    }

    // 發送消息給背景腳本
    chrome.runtime.sendMessage({ action: "openUrl", number, selectedSite });
});