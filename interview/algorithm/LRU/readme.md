# LRU 
Least Recently Used，最近最少使用算法

经常在内存中使用，当内存满了的时候，会删除最近最少使用的内存

假如内存上限为 n=3
A -> [A]
B -> [A,B]
C -> [A,B,C]
A -> [B,C,A]   // 这里是将A移动了，A不能存在多个，节点是唯一的
D -> [C,A,D]
空间换时间
HashMap
双向队列