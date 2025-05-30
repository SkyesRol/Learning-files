/*
* @desc 页面背景切换
* @author Skye
* @date 2025-05-10

*/



// 监听 DOM 内容加载完成事件，确保在 DOM 元素都加载完成后再执行代码
document.addEventListener('DOMContentLoaded', function() {
    // 通过元素的 ID 获取“改变背景颜色”按钮元素
    const changeColorButton = document.getElementById('changeColorButton');
    // 为“改变背景颜色”按钮添加点击事件监听器
    changeColorButton.addEventListener('click', function() {
        // 检查 chrome.scripting API 是否可用
        if (!chrome.scripting) {
            // 如果不可用，在控制台输出错误信息
            console.error('chrome.scripting 不可用，请检查 Chrome 版本或 manifest.json 配置。');
            // 终止当前函数执行
            return;
        }
        // 查询当前活动窗口中的活动标签页
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
            // 检查是否找到了活动标签页
            if (tabs.length === 0) {
                // 如果未找到，在控制台输出错误信息
                console.error('未找到活动标签页。');
                // 终止当前函数执行
                return;
            }
            // 在找到的活动标签页中执行脚本
            chrome.scripting.executeScript({
                // 指定要执行脚本的标签页 ID
                target: {tabId: tabs[0].id},
                // 定义要在标签页中执行的函数
                function: function() {
                    // 将当前页面的 body 元素的背景颜色设置为绿色
                    document.body.style.backgroundColor = 'green';
                }
            }, function(results) {
                // 检查执行脚本过程中是否有错误
                if (chrome.runtime.lastError) {
                    // 如果有错误，在控制台输出错误信息
                    console.error('执行脚本时出错: ', chrome.runtime.lastError);
                } else {
                    // 如果没有错误，在控制台输出成功信息
                    console.log('背景颜色已成功更改。');
                }
            });
        });
    });

    // 添加新按钮事件处理
    // 通过元素的 ID 获取“去除颜色”按钮元素
    const removeColorButton = document.getElementById('removeColorButton');
    // 为“去除颜色”按钮添加点击事件监听器
    removeColorButton.addEventListener('click', function() {
        // 检查 chrome.scripting API 是否可用
        if (!chrome.scripting) {
            // 如果不可用，在控制台输出错误信息
            console.error('chrome.scripting 不可用，请检查 Chrome 版本或 manifest.json 配置。');
            // 终止当前函数执行
            return;
        }
        // 查询当前活动窗口中的活动标签页
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
            // 检查是否找到了活动标签页
            if (tabs.length === 0) {
                // 如果未找到，在控制台输出错误信息
                console.error('未找到活动标签页。');
                // 终止当前函数执行
                return;
            }
            // 在找到的活动标签页中执行脚本
            chrome.scripting.executeScript({
                // 指定要执行脚本的标签页 ID
                target: {tabId: tabs[0].id},
                // 定义要在标签页中执行的函数
                function: function() {
                    // 将当前页面的 body 元素的背景颜色设置为空，恢复默认
                    document.body.style.backgroundColor = '';
                }
            }, function(results) {
                // 检查执行脚本过程中是否有错误
                if (chrome.runtime.lastError) {
                    // 如果有错误，在控制台输出错误信息
                    console.error('执行脚本时出错: ', chrome.runtime.lastError);
                } else {
                    // 如果没有错误，在控制台输出成功信息
                    console.log('背景颜色已成功去除。');
                }
            });
        });
    });
});