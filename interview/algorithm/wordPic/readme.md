# 设计一个支持以下两种操作的数据结构 void addWord(word)

bool search(word) search(word) 可以搜索文字或者正则表达式字符串，字符串中只包含字母。.


# 字符串字典 Dictionary

{} Map 
- 面试常考HashMap 就叫字典
- 索引思维
    - 单词长度作为key
    - 数组作为value
    - includes
    - new RegExp + some