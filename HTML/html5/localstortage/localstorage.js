const addItems = document.querySelector('.add-items');
const itemsList = document.querySelector('.plates');

addItems.addEventListener('submit',addItem);

function addItem(e){
    e.preventDefault();
    // 发现双击页面会放大，在meta中写user-scalable=no
    // 如何在手机上跑页面？先链接手机热点
}