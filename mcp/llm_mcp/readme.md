# mcp
高德地图mcp

## 开发中使用哪些mcp 提高效率
- cherry studio

npm i -g mcp-server-firecrawl

Firecrawl?  FireCrawl是一款网络爬虫工具，可快速抓取和解析网页数据，支持动态内容加载和结构化导出。


{
  "mcpServers": {
    "HbaZQONizltR6NxE8yLFp": {
      "command": "node",
      "args": [
        "C:\Users\17718\AppData\Roaming\npm\node_modules\mcp-server-firecrawl\dist\src\index.js"
      ],
      "env": {
        "FIRE_CRAWL_API_KEY": "fc-123e00622b67438ba14734bb4f763a00"
      },
      "name": "mcp-server-firecrawl",
      "baseUrl": "",
      "isActive": true
    },
    "UOLsbf2YcPpSnb8KFPy5C": {
      "name": "context7",
      "type": "stdio",
      "description": "",
      "isActive": true,
      "registryUrl": "",
      "command": "npx",
      "args": [
        "-y",
        "@upstash/context7-mcp@latest"
      ]
    }
  }
}