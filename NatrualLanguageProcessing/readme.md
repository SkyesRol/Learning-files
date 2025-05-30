# 机器学习


- notebookllm
  你不知道的JS深入学习
  AI 博客


- ModelScope
   阿里开源大模型社区
- python notebook
  ipynb 后缀
  非常适合做 nlp   机器学习 （机器学习文档格式）
  


- python
  nlp 第一语言
  js 也不错

- 引入了pipeline模块
model 中国第一大模型社区
modelscope 阿里
from modelscope.pipelines import pipeline;     // 派出任务
from modelscope.utils.constant import Tasks    // 任务类型

semantic_cls = pipeline(Tasks.text_classification, 'damo/nlp_structbert_sentiment-classification_chinese-base')

result = semantic_cls(input='遥遥领先,遥遥领先,遥遥领先！！！')
print(result)

{'scores': [0.9465827941894531, 0.05341720953583717], 'labels': ['正面', '负面']}












