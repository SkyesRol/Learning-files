# flex 考题
- 综合属性
- flex看着简单
- **两列**式  三列式布局很到位
- 行内元素， 安安分分 文字等内容的容器
- 不换行的行内特性，盒子？不适合  宽高都不能设置
- 要在一行上完成 多**列**式划分 学习布局
- 用块级元素 用它盒子的能力，里面放一堆东西
- 和兄弟盒子安分的放一起
- float inline-block flex inline-flex
- display 设置或切换元素的显示模式
- flex 格式化上下文
- 子元素在一起
- 很复杂


## shrink 收缩计算


按权重来计算

(flex-shrink * flex-basis) 为权重

Why？不仅要考虑元素的收缩意愿，也要考虑其本来期望的大小。

溢出空间 = 所有子元素宽度之和 - 容器宽度

子元素权重/所有子元素权重相加 = 子元素的收缩意愿

溢出空间 * 子元素收缩意愿 = 子元素收缩空间

子元素理想宽度 - 子元素收缩空间 = 子元素实际宽度

想象一群人（子项）挤电梯（容器）：

- flex-basis：每个人的“理想站立面积”（胖子 500px，瘦子 100px）。
- flex-shrink：愿意缩小的程度（胖子愿意缩 2 倍，瘦子 1 倍）。
- 实际收缩：胖子虽然愿意多缩，但瘦子本来占的空间少，按权重计算后，胖子缩得更多，瘦子不会被挤扁。

## grow 成长计算

由于 基本的期望大小已经被满足，所以在计算剩余空间时，会忽略 flex-basis 的影响,直接通过flex-grow的比例来分配剩余空间的大小。