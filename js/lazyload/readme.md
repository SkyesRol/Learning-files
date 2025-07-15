# 图片懒加载

- <img src="">
    - 浏览器的下载线程
    - src http应用层协议
    - https://img.36krcdn.com/hsossms/20250312/v2_1c88dc26ff9341cf8738d670896ce3a8@5284654_oswg847922oswg1440oswg600_img_png?x-oss-process=image/resize,m_mfit,w_960,h_400,limit_0/crop,w_960,h_400,g_center/format,webp
     ip 地址  ping + 地址 测试是否能访问
    - 发送 网路带宽有限 
      并发 同时下载多个css，img 支持的比较好
      tcp/ip
    - 网页（电商）图片太多了
    - 滚动页面 加载
    - 不能一开始 src 直接全部加载，页面会崩溃，打不开
## 懒加载
  - 只加载需要加载的————用户目前看到的
      - 可视区
      - 滚动区域 scroll
  - 不加载
      src 不能直接给，要给 data-original ？
      src？ img的功能函数？ 
  - 占位图 
        - src 应该设置 但不能请求原来图片的地址（因为并发太多，图片太大，导致页面等待）
        - 给个占位的图片 （这类图片一边都比较小）
        我们如果用了同一个地址的资源，即使这个资源被调用了100次，它也只会请求一次（因为有缓存）
    - 等页面加载渲染完成后
        img 太多会严重影响页面的打开速度，第一重要的
        data-original 中
        自定义属性 data- 数据属性
        original 原来
    





























