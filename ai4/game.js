// 游戏配置
const config = {
    width: 800,
    height: 600,
    playerSize: 20,
    bulletRadius: 5,
    playerSpeed: 5,
    initialBulletSpeed: 3,
    bulletSpeedIncrease: 0.1, // 每10秒增加10%
    bulletSpawnRate: 500, // 每500ms生成一个错误
    startBufferTime: 3000, // 游戏开始的缓冲时间，单位毫秒
    difficulties: {
        easy: {
            bulletSpeedIncrease: 0.05,
            bulletSpawnRate: 800,
            scoreMultiplier: 1
        },
        normal: {
            bulletSpeedIncrease: 0.1,
            bulletSpawnRate: 500,
            scoreMultiplier: 2
        },
        hard: {
            bulletSpeedIncrease: 0.15,
            bulletSpawnRate: 300,
            scoreMultiplier: 3
        }
    },
    bulletTypes: {
        normal: {
            color: '#ff3333',
            radius: 5,
            damage: 1,
            spawnChance: 0.30, // 降低到30%概率
            language: 'javascript',
            errorType: 'SyntaxError'
        },
        large: {
            color: '#9933ff',
            radius: 15,
            damage: 1,
            spawnChance: 0.25, // 降低到25%概率
            language: 'python',
            errorType: 'IndentationError'
        },
        fast: {
            color: '#ffcc00',
            radius: 3,
            damage: 1,
            spawnChance: 0.30, // 降低到30%概率
            language: 'java',
            errorType: 'NullPointerException'
        },
        array: {
            color: '#00aaff',
            radius: 8, // 将原来的4增大一倍到8
            damage: 1,
            spawnChance: 0.15, // 15%概率
            language: 'cpp',
            errorType: 'SegmentationFault',
            isArray: true, // 标记为阵列类型
            arrayCount: 5 // 每次生成5个
        }
    },
    powerUpTypes: {
        shield: {
            color: '#00ff00',
            duration: 5000, // 5秒
            text: '代码审查',
            radius: 15, // 增加道具大小
            effect: '激活代码审查，暂时免疫错误'
        },
        slowTime: {
            color: '#0088ff',
            duration: 3000, // 3秒
            text: '断点调试',
            radius: 15,
            effect: '减慢所有错误的移动速度'
        },
        clearScreen: {
            color: '#ff8800',
            duration: 0, // 立即生效
            text: '全局修复',
            radius: 15,
            effect: '清除所有当前错误'
        },
        debugMode: {
            color: '#ff44ff',
            duration: 5000, // 5秒
            text: '调试模式',
            radius: 15,
            effect: '暂停错误移动，分析错误原因'
        }
    },
    powerUpSpawnRate: 7000 // 每7秒可能生成一个道具，略微延长生成间隔
};

// 编程错误和Bug描述
const errorDescriptions = {
    javascript: {
        SyntaxError: [
            "缺少分号",
            "未闭合的括号",
            "未定义变量",
            "非法赋值",
            "意外的标记",
            "无效的函数声明"
        ],
        TypeError: [
            "不是一个函数",
            "无法读取未定义属性",
            "无法将null作为对象",
            "无效的操作数类型"
        ],
        ReferenceError: [
            "变量未定义",
            "超出作用域",
            "无法访问变量"
        ]
    },
    python: {
        IndentationError: [
            "意外的缩进",
            "缩进不一致",
            "预期缩进块"
        ],
        NameError: [
            "名称未定义",
            "局部变量引用错误"
        ],
        TypeError: [
            "对象不可迭代",
            "参数数量不匹配",
            "不支持的操作类型"
        ]
    },
    java: {
        NullPointerException: [
            "访问空对象",
            "未初始化对象",
            "空引用调用方法"
        ],
        ClassCastException: [
            "类型转换错误",
            "不兼容的类转换"
        ],
        ArrayIndexOutOfBoundsException: [
            "数组索引越界",
            "访问无效索引"
        ]
    },
    cpp: {
        SegmentationFault: [
            "访问无效内存地址",
            "解引用空指针",
            "缓冲区溢出",
            "数组越界访问",
            "使用已释放的内存",
            "栈溢出"
        ]
    }
};

// 修复提示
const fixSuggestions = {
    javascript: {
        SyntaxError: [
            "添加缺失的分号",
            "检查括号匹配",
            "声明变量后使用",
            "修正赋值表达式"
        ],
        TypeError: [
            "确保对象是函数",
            "检查属性是否存在",
            "在访问前检查null"
        ],
        ReferenceError: [
            "先声明变量",
            "检查变量作用域"
        ]
    },
    python: {
        IndentationError: [
            "使用一致的缩进",
            "修复缩进级别",
            "使用空格而非制表符"
        ],
        NameError: [
            "导入缺失的模块",
            "先定义变量再使用"
        ],
        TypeError: [
            "检查对象类型",
            "转换为正确类型",
            "检查参数数量"
        ]
    },
    java: {
        NullPointerException: [
            "初始化对象后使用",
            "添加null检查",
            "使用Optional类型"
        ],
        ClassCastException: [
            "使用instanceof检查",
            "确保类型兼容性"
        ],
        ArrayIndexOutOfBoundsException: [
            "检查数组边界",
            "验证索引范围"
        ]
    },
    cpp: {
        SegmentationFault: [
            "检查指针是否为空",
            "确保内存已分配",
            "验证数组索引范围",
            "使用智能指针",
            "避免使用已释放的内存",
            "增加边界检查"
        ]
    }
};

// 代码片段替换为错误示例
const codeSnippets = {
    javascript: {
        SyntaxError: [
            "function add(a, b) { return a + b",  // 缺少结束括号
            "const value = ;",                    // 非法赋值
            "if (x === 5) {",                     // 未闭合的块
            "let 1stNumber = 5;",                 // 非法变量名
            "console.log('Hello world'",          // 缺少结束括号
            "const obj = { name: 'John' age: 30 }" // 缺少逗号
        ],
        TypeError: [
            "const total = undefined.length;",
            "null.toString();",
            "const func = {}; func();",
            "const num = 42; num.push(10);"
        ],
        ReferenceError: [
            "console.log(undefinedVar);",
            "{ let x = 10; } console.log(x);",
            "getValue();"  // 未定义函数
        ]
    },
    python: {
        IndentationError: [
            "def function():\nprint('No indent')",
            "if True:\n    print('Correct')\n  print('Wrong')",
            "for i in range(10):\nprint(i)"
        ],
        NameError: [
            "print(undefined_variable)",
            "def func():\n    local_var = 10\nprint(local_var)",
            "result = calculate(10)"  // 未定义函数
        ],
        TypeError: [
            "len(5)",
            "for i in 42: print(i)",
            "'string' + 42"
        ]
    },
    java: {
        NullPointerException: [
            "String str = null; int length = str.length();",
            "Object obj = null; obj.toString();",
            "List<String> list = null; list.add('item');"
        ],
        ClassCastException: [
            "Object obj = new Integer(42); String str = (String)obj;",
            "Object[] array = new String[10]; Integer i = (Integer)array[0];",
            "Map map = new HashMap(); List list = (List)map;"
        ],
        ArrayIndexOutOfBoundsException: [
            "int[] array = new int[5]; int value = array[10];",
            "String[] names = {'John', 'Mary'}; System.out.println(names[5]);",
            "char[] chars = 'hello'.toCharArray(); char c = chars[-1];"
        ]
    },
    cpp: {
        SegmentationFault: [
            "int* ptr = nullptr; *ptr = 42;",
            "int arr[5]; arr[10] = 100;",
            "char* str = \"hello\"; str[10] = 'x';",
            "int* ptr = new int[5]; delete[] ptr; ptr[0] = 1;",
            "void recursion() { int arr[1000]; recursion(); }",
            "char* buffer = new char[10]; strcpy(buffer, \"This string is too long\");"
        ]
    }
};

// 语言颜色映射
const languageColors = {
    javascript: '#f7df1e',
    python: '#3572A5',
    java: '#b07219',
    cpp: '#f34b7d',
    sql: '#e38c00'
};

// 弹幕文字内容
const bulletTexts = [
    "这bug改不完了...",
    "又是通宵调试",
    "需求又改了？",
    "离谱，这代码谁写的",
    "我觉得这个可以重构",
    "这段代码没有注释",
    "这接口太慢了",
    "考试要挂科了",
    "实验报告还没写",
    "论文查重率好高",
    "又要补考了",
    "这课真无聊",
    "什么时候才能毕业",
    "死锁了怎么办",
    "内存又溢出了",
    "这个bug复现不了",
    "产品经理又有新想法",
    "这需求不合理",
    "测试环境又挂了",
    "服务器CPU 100%了"
];

// 游戏状态
let canvas, ctx;
let player;
let bullets = []; // 错误/Bug对象数组
let gameStartTime;
let isGameOver = false;
let bulletSpeed;
let lastBulletTime = 0; // 上次生成错误的时间
let gameStarted = false;
let isBuffering = false; // 游戏是否处于开始缓冲状态
let bufferEndTime = 0; // 缓冲结束时间
let currentScore = 0;
let highScore = 0;
let currentDifficulty = 'normal';
let powerUps = [];
let lastPowerUpTime = 0;
let playerEffects = {
    shield: 0,
    slowTime: 0,
    debugMode: 0,
    asyncDefense: 0
};
let debugTarget = null; // 调试目标错误
let skillPoints = 0; // 技能点数
let unlockedSkills = []; // 已解锁技能
let playerClones = []; // 玩家分身
let isPaused = false; // 添加游戏暂停状态变量
let speedBoostPercentage = 0; // 跟踪代码优化的速度加成百分比

// 添加弹窗控制
let introModal;
let introButton;
let startModal;
let startButton;
let skillTreeModal;
let closeSkillTreeButton;
let debugPanel;

// 添加帮助面板控制
let sidebar;
let isHelpVisible = false;
let isSkillTreeVisible = false;

// 添加技能快捷键映射
const SKILL_HOTKEYS = {
    'Digit1': 'asyncDefense',    // 1 - 异步防御
    'Digit2': 'garbageCollector', // 2 - 垃圾回收
    'Digit3': 'debugger',        // 3 - 调试器
    'Digit4': 'codeOptimization', // 4 - 代码优化
    'Digit5': 'multiThreading',   // 5 - 多线程
    'Digit6': 'refactoring'      // 6 - 重构
};

// 修改更新难度显示函数
function updateDifficultyDisplay() {
    const difficultyName = getDifficultyName(currentDifficulty);
    
    // 定义不同难度的颜色
    const difficultyColors = {
        'easy': '#00ff00',     // 绿色
        'normal': '#0088ff',   // 蓝色
        'hard': '#ff3333'      // 红色
    };
    
    // 更新所有显示难度的元素
    const difficultyElements = [
        'currentDifficultyDisplay',    // 帮助面板中的难度显示
        'startDifficultyDisplay',      // 开始界面的难度显示
        'statusDifficulty',            // 状态面板的难度显示
        'gameOverDifficulty'           // 游戏结束界面的难度显示
    ];
    
    difficultyElements.forEach(elementId => {
        const element = document.getElementById(elementId);
        if (element) {
            element.textContent = difficultyName;
            
            // 设置颜色
            element.style.color = difficultyColors[currentDifficulty];
            element.style.textShadow = `0 0 5px ${difficultyColors[currentDifficulty]}`;
            
            // 添加切换动画效果
            element.style.transition = 'all 0.3s';
            element.style.transform = 'scale(1.2)';
            setTimeout(() => {
                element.style.transform = 'scale(1)';
            }, 300);
        }
    });
}

// 初始化游戏
function init() {
    canvas = document.getElementById('gameCanvas');
    ctx = canvas.getContext('2d');
    canvas.width = config.width;
    canvas.height = config.height;

    // 添加canvas点击事件监听器
    canvas.addEventListener('click', handleCanvasClick);

    // 初始化玩家
    player = {
        x: config.width / 2,
        y: config.height / 2,
        size: config.playerSize,
        speed: config.playerSpeed,
        moving: {
            up: false,
            down: false,
            left: false,
            right: false
        }
    };
    
    // 应用已有的速度加成
    if (speedBoostPercentage > 0) {
        player.speed *= (1 + speedBoostPercentage / 100);
    }

    // 重置游戏状态
    bullets = [];
    gameStartTime = null; // 初始化为null，等缓冲结束后再设置
    isGameOver = false;
    bulletSpeed = config.initialBulletSpeed;
    lastBulletTime = 0;
    document.getElementById('gameOver').style.display = 'none';
    gameStarted = true;
    lastScoreMilestone = 0;
    currentScore = 0;
    
    // 设置缓冲状态
    isBuffering = true;
    bufferEndTime = Date.now() + config.startBufferTime;
    
    // 使用选择的难度设置
    config.bulletSpeedIncrease = config.difficulties[currentDifficulty].bulletSpeedIncrease;
    config.bulletSpawnRate = config.difficulties[currentDifficulty].bulletSpawnRate;
    
    powerUps = [];
    lastPowerUpTime = 0;
    playerEffects = {
        shield: 0,
        slowTime: 0,
        debugMode: 0,
        asyncDefense: 0
    };
    playerClones = [];
    debugTarget = null;
    
    // 开始游戏循环
    requestAnimationFrame(gameLoop);
}

// 修改生成错误/Bug的函数
function spawnBullet() {
    // 使用概率选择错误类型
    const bulletTypes = ['normal', 'large', 'fast', 'array'];
    const weights = [
        config.bulletTypes.normal.spawnChance,
        config.bulletTypes.large.spawnChance,
        config.bulletTypes.fast.spawnChance,
        config.bulletTypes.array.spawnChance
    ];
    
    // 计算总权重
    const totalWeight = weights.reduce((sum, weight) => sum + weight, 0);
    
    // 随机选择一个类型
    let random = Math.random() * totalWeight;
    let bulletType = 'normal'; // 默认类型
    
    for (let i = 0; i < bulletTypes.length; i++) {
        if (random < weights[i]) {
            bulletType = bulletTypes[i];
            break;
        }
        random -= weights[i];
    }
    
    const bulletConfig = config.bulletTypes[bulletType];
    
    // 如果是阵列类型错误，使用特殊的生成逻辑
    if (bulletConfig.isArray) {
        spawnArrayBullets(bulletType, bulletConfig);
        return;
    }
    
    let side = Math.floor(Math.random() * 4); // 0: 上, 1: 右, 2: 下, 3: 左
    let x, y, dx, dy;
    
    // 计算初始位置和方向
    switch(side) {
        case 0: // 上
            x = Math.random() * config.width;
            y = -bulletConfig.radius;
            dx = (player.x - x) / Math.hypot(player.x - x, player.y - y);
            dy = (player.y - y) / Math.hypot(player.x - x, player.y - y);
            break;
        case 1: // 右
            x = config.width + bulletConfig.radius;
            y = Math.random() * config.height;
            dx = (player.x - x) / Math.hypot(player.x - x, player.y - y);
            dy = (player.y - y) / Math.hypot(player.x - x, player.y - y);
            break;
        case 2: // 下
            x = Math.random() * config.width;
            y = config.height + bulletConfig.radius;
            dx = (player.x - x) / Math.hypot(player.x - x, player.y - y);
            dy = (player.y - y) / Math.hypot(player.x - x, player.y - y);
            break;
        case 3: // 左
            x = -bulletConfig.radius;
            y = Math.random() * config.height;
            dx = (player.x - x) / Math.hypot(player.x - x, player.y - y);
            dy = (player.y - y) / Math.hypot(player.x - x, player.y - y);
            break;
    }

    // 选择一个错误类型
    const language = bulletConfig.language;
    const errorType = bulletConfig.errorType;
    
    // 随机选择一个错误描述
    const errorDesc = errorDescriptions[language][errorType][
        Math.floor(Math.random() * errorDescriptions[language][errorType].length)
    ];
    
    // 随机选择一个代码片段
    const codeExample = codeSnippets[language][errorType][
        Math.floor(Math.random() * codeSnippets[language][errorType].length)
    ];
    
    // 随机选择一个修复提示
    const fixTip = fixSuggestions[language][errorType][
        Math.floor(Math.random() * fixSuggestions[language][errorType].length)
    ];

    const bullet = {
        x,
        y,
        dx,
        dy,
        type: bulletType,
        radius: bulletConfig.radius,
        color: bulletConfig.color,
        language: language,
        errorType: errorType,
        errorDesc: errorDesc,
        codeExample: codeExample,
        fixTip: fixTip,
        age: 0,
        id: Date.now() + Math.random().toString(16).slice(2), // 生成唯一ID
        isBeingFixed: false, // 是否正在被修复
        fixProgress: 0 // 修复进度(0-100)
    };

    bullets.push(bullet);
}

// 生成阵列错误的函数
function spawnArrayBullets(bulletType, bulletConfig) {
    try {
        // 限制同时存在的阵列错误数量
        const existingArrayGroups = bullets.filter(b => b.isArrayGroup).length;
        if (existingArrayGroups >= 2) {
            // 如果已经有两个阵列错误，不再生成新的
            return;
        }
        
        // 决定是从左侧还是右侧生成
        const fromLeft = Math.random() < 0.5;
        
        // 计算阵列的起始Y坐标（确保不会超出画布）
        const startY = Math.random() * (config.height - (bulletConfig.arrayCount * 5 * bulletConfig.radius)); // 增大间距考虑
        
        // 设置X坐标和移动方向
        const startX = fromLeft ? -bulletConfig.radius : config.width + bulletConfig.radius;
        const dx = fromLeft ? 1 : -1; // 从左到右或从右到左
        const dy = 0; // 水平移动
        
        // 选择一个错误类型
        const language = bulletConfig.language;
        const errorType = bulletConfig.errorType;
        
        // 随机选择一个错误描述
        const errorDesc = errorDescriptions[language][errorType][
            Math.floor(Math.random() * errorDescriptions[language][errorType].length)
        ];
        
        // 随机选择一个代码片段
        const codeExample = codeSnippets[language][errorType][
            Math.floor(Math.random() * codeSnippets[language][errorType].length)
        ];
        
        // 随机选择一个修复提示
        const fixTip = fixSuggestions[language][errorType][
            Math.floor(Math.random() * fixSuggestions[language][errorType].length)
        ];
        
        // 创建一个阵列组对象，作为整体
        const arrayGroupId = Date.now() + Math.random().toString(16).slice(2);
        
        // 创建阵列中的子错误 - 减少数量以提高性能
        const arrayCount = Math.min(bulletConfig.arrayCount, 5); // 限制最大数量为5
        const arrayElements = [];
        for (let i = 0; i < arrayCount; i++) {
            // 计算Y坐标，使错误垂直排列，间距扩大2倍
            const y = startY + (i * 5 * bulletConfig.radius);
            
            // 创建子错误对象，但不添加到bullets数组
            arrayElements.push({
                x: startX,
                y: y,
                radius: bulletConfig.radius,
                index: i
            });
        }
        
        // 创建主阵列错误对象
        const arrayBullet = {
            x: startX,
            y: startY + ((arrayCount - 1) * 2.5 * bulletConfig.radius), // 阵列中心位置
            dx: dx,
            dy: dy,
            type: bulletType,
            radius: bulletConfig.radius,
            color: bulletConfig.color,
            language: language,
            errorType: errorType,
            errorDesc: errorDesc,
            codeExample: codeExample,
            fixTip: fixTip,
            age: 0,
            id: arrayGroupId,
            isBeingFixed: false,
            fixProgress: 0,
            isArrayGroup: true, // 标记为阵列组
            arrayElements: arrayElements, // 存储子错误
            speed: 2.0, // 移动速度
            health: arrayCount, // 阵列生命值，等于子错误数量
            lastUpdateTime: Date.now() // 添加最后更新时间戳
        };
        
        bullets.push(arrayBullet);
    } catch (error) {
        console.error("生成阵列错误时出现异常:", error);
    }
}

// 添加道具生成函数
function spawnPowerUp() {
    // 如果处于缓冲状态或调试模式，不生成道具
    if (isBuffering || playerEffects.debugMode > 0) {
        return;
    }
    
    const currentTime = Date.now();
    if (currentTime - lastPowerUpTime > config.powerUpSpawnRate) {
        if (Math.random() < 0.4) {
            const powerUpWeights = {
                'shield': 0.35,
                'slowTime': 0.35,
                'clearScreen': 0.1,
                'debugMode': 0.2
            };
            
            const totalWeight = Object.values(powerUpWeights).reduce((sum, weight) => sum + weight, 0);
            let random = Math.random() * totalWeight;
            let selectedType = 'shield';
            
            for (const [type, weight] of Object.entries(powerUpWeights)) {
                if (random < weight) {
                    selectedType = type;
                    break;
                }
                random -= weight;
            }
            
            const powerUpConfig = config.powerUpTypes[selectedType];
            
            powerUps.push({
                x: Math.random() * (config.width - 40) + 20,
                y: Math.random() * (config.height - 40) + 20,
                type: selectedType,
                radius: powerUpConfig.radius || 15,
                color: powerUpConfig.color,
                text: powerUpConfig.text,
                createdAt: Date.now(),
                pulseSpeed: 0.1 + Math.random() * 0.1
            });
            
            lastPowerUpTime = currentTime;
        }
    }
}

// 修改错误/Bug更新逻辑
function update() {
    if (isGameOver) return;

    const currentTime = Date.now();
    
    // 检查缓冲时间是否结束
    if (isBuffering && currentTime >= bufferEndTime) {
        isBuffering = false;
        gameStartTime = Date.now(); // 设置游戏开始时间
        showNotification('游戏开始！', 1500, '#00ff00');
    }

    // 更新玩家位置
    if (player.moving.up) player.y = Math.max(player.size/2, player.y - player.speed);
    if (player.moving.down) player.y = Math.min(config.height - player.size/2, player.y + player.speed);
    if (player.moving.left) player.x = Math.max(player.size/2, player.x - player.speed);
    if (player.moving.right) player.x = Math.min(config.width - player.size/2, player.x + player.speed);

    // 修改错误速度（考虑减速效果）
    const slowEffect = playerEffects.slowTime > 0 ? 0.5 : 1;
    const effectiveBulletSpeed = bulletSpeed * slowEffect;
    
    // 只在非缓冲期间且非调试模式下生成新错误和道具
    if (!isBuffering && playerEffects.debugMode <= 0) {
        // 生成新错误
        if (currentTime - lastBulletTime > config.bulletSpawnRate) {
            try {
                spawnBullet();
                lastBulletTime = currentTime;
            } catch (error) {
                console.error("生成错误时出现异常:", error);
            }
        }
        
        // 生成道具
        try {
            spawnPowerUp();
        } catch (error) {
            console.error("生成道具时出现异常:", error);
        }
    }

    // 计算分数：只在游戏正式开始后计算
    if (!isBuffering && gameStartTime) {
        const timeAlive = (currentTime - gameStartTime) / 1000;
        currentScore = Math.floor(timeAlive * 10 * config.difficulties[currentDifficulty].scoreMultiplier);
        
        // 更新最高分
        if (currentScore > highScore) {
            highScore = currentScore;
            localStorage.setItem('highScore', highScore);
        }
        
        // 检查是否达到新的200分里程碑
        const currentMilestone = Math.floor(currentScore / 200);
        if (currentMilestone > lastScoreMilestone) {
            // 增加5个技能点
            skillPoints += 5;
            lastScoreMilestone = currentMilestone;
            // 保存技能点到本地存储
            localStorage.setItem('skillPoints', skillPoints);
            // 显示获得技能点的提示
            showNotification(`达到${currentMilestone * 200}分！获得5个技能点！`, 1500, '#00ff88');
        }
    }

    // 检查是否处于调试模式，如果是则不更新错误位置
    const isDebugModeActive = playerEffects.debugMode > 0;

    // 更新错误位置和碰撞检测
    try {
        bullets = bullets.filter(bullet => {
            bullet.age++;

            // 错误移动 - 只在非调试模式下移动
            if (!isDebugModeActive) {
                if (bullet.isArrayGroup) {
                    // 性能优化：限制更新频率
                    const shouldUpdate = currentTime - (bullet.lastUpdateTime || 0) > 16; // 约60fps
                    
                    if (shouldUpdate) {
                        bullet.lastUpdateTime = currentTime;
                        
                        // 阵列错误作为一个整体移动
                        const speed = bullet.speed;
                        const dx = bullet.dx * speed;
                        const dy = bullet.dy * speed;
                        
                        // 更新主体位置
                        bullet.x += dx;
                        bullet.y += dy;
                        
                        // 更新所有子错误的位置
                        bullet.arrayElements.forEach(element => {
                            element.x += dx;
                            element.y += dy;
                        });
                    }
                } else {
                    // 普通错误的移动逻辑
                    const speed = bullet.isArrayBullet ? bullet.speed : (bullet.speed || effectiveBulletSpeed);
                    
                    // 检查是否在分身的吸引范围内
                    let attracted = false;
                    playerClones.forEach(clone => {
                        const distToClone = Math.hypot(bullet.x - clone.x, bullet.y - clone.y);
                        if (distToClone < clone.attractRadius) {
                            // 计算吸引方向
                            const dx = clone.x - bullet.x;
                            const dy = clone.y - bullet.y;
                            const dist = Math.hypot(dx, dy);
                            if (dist > 0) {
                                // 向分身移动
                                bullet.x += (dx / dist) * speed * 1.5;
                                bullet.y += (dy / dist) * speed * 1.5;
                                attracted = true;
                            }
                        }
                    });
                    
                    // 如果没有被吸引，则正常移动
                    if (!attracted) {
                        bullet.x += bullet.dx * speed;
                        bullet.y += bullet.dy * speed;
                    }
                }
            }

            // 检查与玩家的碰撞
            if (bullet.isArrayGroup) {
                // 检查阵列中任何子错误与玩家的碰撞
                let hitPlayer = false;
                
                // 性能优化：只检查屏幕上可见的子错误
                const visibleElements = bullet.arrayElements.filter(element => 
                    element.x > -50 && element.x < config.width + 50 &&
                    element.y > -50 && element.y < config.height + 50
                );
                
                // 如果没有可见元素，检查是否所有元素都超出屏幕
                if (visibleElements.length === 0) {
                    const allOutOfBounds = bullet.arrayElements.every(element => 
                        element.x < -50 || element.x > config.width + 50 ||
                        element.y < -50 || element.y > config.height + 50
                    );
                    return !allOutOfBounds;
                }
                
                // 只对可见元素进行碰撞检测
                visibleElements.forEach(element => {
                    const distanceToPlayer = Math.hypot(element.x - player.x, element.y - player.y);
                    if (distanceToPlayer < element.radius + player.size/2) {
                        // 检查是否有防护效果
                        if (playerEffects.shield > 0 || playerEffects.asyncDefense > 0) {
                            skillPoints += 5; // 使用护盾或异步防御成功躲避错误获得额外技能点
                            localStorage.setItem('skillPoints', skillPoints);
                            
                            // 减少阵列生命值
                            bullet.health--;
                            
                            // 移除被击中的子错误
                            bullet.arrayElements = bullet.arrayElements.filter(e => e !== element);
                            
                            // 如果所有子错误都被消除，移除整个阵列
                            if (bullet.health <= 0) {
                                return false;
                            }
                            
                            // 显示击中效果
                            drawParticles(element.x, element.y, bullet.color, 10);
                            showNotification('防御成功！击破了阵列的一部分！', 1000);
                        } else {
                            hitPlayer = true;
                        }
                    }
                });
                
                if (hitPlayer) {
                    gameOver();
                    return false;
                }
                
                // 检查与分身的碰撞
                let hitClone = false;
                playerClones.forEach((clone, cloneIndex) => {
                    visibleElements.forEach((element, elementIndex) => {
                        const distanceToClone = Math.hypot(element.x - clone.x, element.y - clone.y);
                        if (distanceToClone < element.radius + clone.size/2) {
                            hitClone = true;
                            
                            // 移除被击中的子错误
                            const elementIndex = bullet.arrayElements.findIndex(e => e === element);
                            if (elementIndex !== -1) {
                                bullet.arrayElements.splice(elementIndex, 1);
                            }
                            
                            // 减少阵列生命值
                            bullet.health--;
                            
                            // 移除分身
                            playerClones.splice(cloneIndex, 1);
                            
                            // 显示击中效果
                            drawParticles(element.x, element.y, bullet.color, 10);
                            showNotification('分身吸收了阵列的一部分!');
                        }
                    });
                });
                
                // 如果所有子错误都被消除，移除整个阵列
                if (bullet.health <= 0 || bullet.arrayElements.length === 0) {
                    return false;
                }
                
                return true;
            } else {
                // 普通错误的碰撞检测
                const distanceToPlayer = Math.hypot(bullet.x - player.x, bullet.y - player.y);
                if (distanceToPlayer < bullet.radius + player.size/2) {
                    // 检查是否有防护效果
                    if (playerEffects.shield > 0 || playerEffects.asyncDefense > 0) {
                        skillPoints += 5; // 使用护盾或异步防御成功躲避错误获得额外技能点
                        localStorage.setItem('skillPoints', skillPoints);
                        return false;
                    }
                    
                    gameOver();
                    return false;
                }
                
                // 检查与分身的碰撞
                let hitClone = false;
                playerClones = playerClones.filter(clone => {
                    const distanceToClone = Math.hypot(bullet.x - clone.x, bullet.y - clone.y);
                    if (distanceToClone < bullet.radius + clone.size/2) {
                        hitClone = true;
                        showNotification('分身吸收了伤害!');
                        return false;
                    }
                    return true;
                });
                
                if (hitClone) {
                    return false;
                }
                
                // 移除超出屏幕的错误
                return bullet.x > -50 && bullet.x < config.width + 50 &&
                       bullet.y > -50 && bullet.y < config.height + 50;
            }
        });
    } catch (error) {
        console.error("更新错误位置时出现异常:", error);
    }

    // 更新道具位置 - 添加吸引功能
    powerUps.forEach(powerUp => {
        const distToPlayer = Math.hypot(powerUp.x - player.x, powerUp.y - player.y);
        if (distToPlayer < 150) { // 在玩家150像素范围内开始吸引
            // 计算吸引力，距离越近吸引越强
            const attractionForce = 0.05 + (1 - distToPlayer / 150) * 0.2;
            // 向玩家方向移动
            const dx = player.x - powerUp.x;
            const dy = player.y - powerUp.y;
            const dist = Math.hypot(dx, dy);
            if (dist > 0) { // 避免除以零
                powerUp.x += dx / dist * attractionForce * player.speed;
                powerUp.y += dy / dist * attractionForce * player.speed;
            }
        }
    });
    
    // 检查道具碰撞
    checkPowerUpCollision();
    
    // 更新道具效果时间
    if (playerEffects.shield > 0 && currentTime > playerEffects.shield) {
        playerEffects.shield = 0;
    }
    if (playerEffects.slowTime > 0 && currentTime > playerEffects.slowTime) {
        playerEffects.slowTime = 0;
    }
    if (playerEffects.debugMode > 0 && currentTime > playerEffects.debugMode) {
        playerEffects.debugMode = 0;
        debugTarget = null;
        debugPanel.style.display = 'none';
        isBuffering = false;
        bullets.forEach(bullet => {
            bullet.isBeingFixed = false;
            bullet.fixProgress = 0;
        });
        showNotification('调试模式结束', 1500);
    }
    if (playerEffects.asyncDefense > 0 && currentTime > playerEffects.asyncDefense) {
        playerEffects.asyncDefense = 0;
    }
    
    // 更新状态面板
    updateStatusPanel();
    
    // 如果游戏暂停，显示暂停提示
    if (isPaused) {
        ctx.fillStyle = 'rgba(0, 0, 0, 0.5)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        ctx.fillStyle = '#ffffff';
        ctx.font = 'bold 36px Arial';
        ctx.textAlign = 'center';
        ctx.fillText('游戏已暂停', canvas.width / 2, canvas.height / 2);
        
        ctx.font = '18px Arial';
        ctx.fillText('正在查看技能树', canvas.width / 2, canvas.height / 2 + 40);
    }
}

// 修改显示通知的函数，添加颜色参数
function showNotification(message, duration = 2000, color = null) {
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    
    if (color) {
        notification.style.background = `linear-gradient(to right, ${color}, ${lightenColor(color, 20)})`;
    }
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.classList.add('show');
        setTimeout(() => {
            notification.classList.remove('show');
            setTimeout(() => {
                document.body.removeChild(notification);
            }, 500);
        }, duration);
    }, 10);
}

// 修改错误渲染逻辑
function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // 绘制背景网格
    drawGrid();

    // 绘制玩家分身
    playerClones.forEach(clone => {
        // 绘制分身
        ctx.fillStyle = 'rgba(0, 255, 0, 0.5)';
        ctx.beginPath();
        ctx.moveTo(clone.x, clone.y - clone.size/2);
        ctx.lineTo(clone.x - clone.size/2, clone.y + clone.size/2);
        ctx.lineTo(clone.x + clone.size/2, clone.y + clone.size/2);
        ctx.closePath();
        ctx.fill();
        
        // 添加分身发光效果
        ctx.strokeStyle = 'rgba(0, 255, 0, 0.2)';
        ctx.lineWidth = 2;
        ctx.stroke();
        
        // 添加分身粒子效果
        drawParticles(clone.x, clone.y, 'rgba(0, 255, 0, 0.3)', 3);
    });

    // 绘制玩家
    ctx.fillStyle = '#00ff00';
    // 绘制尾焰
    ctx.beginPath();
    const flameSize = player.size * 0.7 * (1 + speedBoostPercentage / 100); // 根据速度加成调整尾焰大小
    
    // 更复杂的尾焰效果
    const flameOpacity = 0.5 + Math.random() * 0.5 + (speedBoostPercentage / 100); // 根据速度加成增加亮度
    const flameGradient = ctx.createLinearGradient(
        player.x, player.y + player.size/2,
        player.x, player.y + player.size/2 + flameSize
    );
    flameGradient.addColorStop(0, `rgba(255, 200, 0, ${flameOpacity})`);
    flameGradient.addColorStop(1, `rgba(255, 50, 0, 0)`);
    
    ctx.fillStyle = flameGradient;
    ctx.moveTo(player.x - player.size/4, player.y + player.size/2);
    ctx.lineTo(player.x, player.y + player.size/2 + flameSize);
    ctx.lineTo(player.x + player.size/4, player.y + player.size/2);
    ctx.closePath();
    ctx.fill();
    
    // 绘制飞船
    const shipGradient = ctx.createLinearGradient(
        player.x, player.y - player.size/2,
        player.x, player.y + player.size/2
    );
    shipGradient.addColorStop(0, '#00ff88');
    shipGradient.addColorStop(1, '#00aa44');
    
    ctx.fillStyle = shipGradient;
    ctx.beginPath();
    ctx.moveTo(player.x, player.y - player.size/2);
    ctx.lineTo(player.x - player.size/2, player.y + player.size/2);
    ctx.lineTo(player.x + player.size/2, player.y + player.size/2);
    ctx.closePath();
    ctx.fill();

    // 添加飞船发光效果
    ctx.strokeStyle = 'rgba(0, 255, 0, 0.5)';
    ctx.lineWidth = 2;
    ctx.stroke();
    
    // 如果玩家正在移动，添加粒子效果
    if(player.moving.up || player.moving.down || player.moving.left || player.moving.right) {
        // 粒子数量随速度加成增加
        const particleCount = 5 + Math.floor(speedBoostPercentage / 5);
        drawParticles(player.x, player.y + player.size/2, 'rgba(0, 255, 150, 0.7)', particleCount);
    }

    // 在缓冲期间显示倒计时
    if (isBuffering) {
        const remainingTime = Math.ceil((bufferEndTime - Date.now()) / 1000);
        ctx.fillStyle = 'rgba(0, 0, 0, 0.5)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        ctx.font = 'bold 48px Arial';
        ctx.fillStyle = '#00ff00';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(`准备开始：${remainingTime}`, canvas.width / 2, canvas.height / 2);
        
        ctx.font = '24px Arial';
        ctx.fillText('使用方向键或WASD移动', canvas.width / 2, canvas.height / 2 + 50);
    }

    // 绘制错误/Bug
    bullets.forEach(bullet => {
        // 判断是否为阵列错误组
        if (bullet.isArrayGroup) {
            try {
                // 性能优化：只绘制在屏幕上可见的子元素
                const visibleElements = bullet.arrayElements.filter(element => 
                    element.x > -50 && element.x < config.width + 50 &&
                    element.y > -50 && element.y < config.height + 50
                );
                
                // 绘制阵列错误的子元素
                visibleElements.forEach((element, index, visibleArray) => {
                    // 绘制子错误
                    const baseColor = bullet.color;
                    
                    // 绘制子错误主体（简化绘制过程）
                    ctx.fillStyle = baseColor;
                    ctx.beginPath();
                    ctx.arc(element.x, element.y, element.radius, 0, Math.PI * 2);
                    ctx.fill();
                    
                    // 为子错误添加简化的电流效果
                    ctx.strokeStyle = 'rgba(0, 170, 255, 0.6)';
                    ctx.lineWidth = 2;
                    ctx.beginPath();
                    ctx.arc(element.x, element.y, element.radius * 1.2, 0, Math.PI * 2);
                    ctx.stroke();
                    
                    // 绘制连接线到下一个子错误（简化版本）
                    if (index < visibleArray.length - 1) {
                        const nextElement = visibleArray[index + 1];
                        
                        // 简化的电流连接线
                        ctx.beginPath();
                        ctx.strokeStyle = `rgba(0, 170, 255, 0.6)`;
                        ctx.lineWidth = 2;
                        
                        // 减少锯齿点的数量，使用固定段数而不是基于距离计算
                        const maxSegments = 5; // 限制最大段数
                        
                        ctx.moveTo(element.x, element.y);
                        
                        // 使用固定数量的段，而不是基于距离的计算
                        for (let i = 1; i < maxSegments; i++) {
                            const t = i / maxSegments;
                            const midX = element.x + (nextElement.x - element.x) * t;
                            const midY = element.y + (nextElement.y - element.y) * t;
                            
                            // 简化的锯齿效果，使用固定偏移
                            const offset = (i % 2 === 0) ? 3 : -3;
                            ctx.lineTo(midX + offset, midY + offset);
                        }
                        
                        ctx.lineTo(nextElement.x, nextElement.y);
                        ctx.stroke();
                    }
                });
                
                // 如果阵列错误正在被修复，显示修复进度
                if (bullet.isBeingFixed) {
                    // 找到阵列中心位置
                    const centerElement = visibleElements[Math.floor(visibleElements.length / 2)];
                    if (centerElement) {
                        const progressRadius = bullet.radius * 1.5;
                        const startAngle = -Math.PI / 2;
                        const endAngle = startAngle + (Math.PI * 2 * (bullet.fixProgress / 100));
                        
                        ctx.beginPath();
                        ctx.arc(centerElement.x, centerElement.y, progressRadius, startAngle, endAngle);
                        ctx.lineTo(centerElement.x, centerElement.y);
                        ctx.closePath();
                        ctx.fillStyle = 'rgba(0, 255, 0, 0.3)';
                        ctx.fill();
                    }
                }
                
                // 只为第一个可见元素显示错误信息
                if (visibleElements.length > 0) {
                    const firstElement = visibleElements[0];
                    
                    // 添加边缘高光
                    ctx.strokeStyle = lightenColor(bullet.color, 50);
                    ctx.lineWidth = 1;
                    ctx.beginPath();
                    ctx.arc(firstElement.x, firstElement.y, bullet.radius, 0, Math.PI * 2);
                    ctx.stroke();

                    // 绘制错误类型和描述
                    // 根据错误类型调整字体大小
                    let fontSize = 10;
                    if (bullet.type === 'large') {
                        fontSize = 12;
                    } else if (bullet.type === 'fast') {
                        fontSize = 8;
                    }
                    
                    // 添加文字背景以提高可读性
                    const textBg = `rgba(0, 0, 0, 0.6)`;
                    ctx.font = `bold ${fontSize}px Consolas, monospace`;
                    const textWidth = ctx.measureText(`${bullet.errorType}: ${bullet.errorDesc}`).width;
                    const codeWidth = ctx.measureText(bullet.codeExample).width;
                    const maxWidth = Math.max(textWidth, codeWidth);
                    
                    // 错误类型背景
                    ctx.fillStyle = textBg;
                    ctx.fillRect(firstElement.x - maxWidth/2 - 5, firstElement.y - bullet.radius - 30, maxWidth + 10, 40);
                    
                    // 绘制错误类型和描述
                    ctx.fillStyle = 'white';
                    ctx.textAlign = 'center';
                    ctx.fillText(`${bullet.errorType}: ${bullet.errorDesc}`, firstElement.x, firstElement.y - bullet.radius - 10);
                    
                    // 绘制错误代码示例
                    ctx.font = `${fontSize}px Consolas, monospace`;
                    ctx.fillText(bullet.codeExample, firstElement.x, firstElement.y - bullet.radius - 25);
                }
                
                // 如果是调试目标，绘制调试信息和修复进度
                if (debugTarget && bullet.id === debugTarget.id && visibleElements.length > 0) {
                    const firstElement = visibleElements[0];
                    
                    // 绘制调试框
                    ctx.strokeStyle = '#ff44ff';
                    ctx.lineWidth = 2;
                    ctx.beginPath();
                    ctx.arc(firstElement.x, firstElement.y, bullet.radius * 3, 0, Math.PI * 2);
                    ctx.stroke();
                    
                    // 添加调试框动画效果
                    ctx.strokeStyle = `rgba(255, 68, 255, ${0.3 + 0.2 * Math.sin(Date.now() * 0.005)})`;
                    ctx.lineWidth = 1;
                    ctx.beginPath();
                    ctx.arc(firstElement.x, firstElement.y, bullet.radius * 3.5, 0, Math.PI * 2);
                    ctx.stroke();
                    
                    // 绘制调试信息背景
                    ctx.fillStyle = 'rgba(40, 10, 40, 0.8)';
                    ctx.fillRect(firstElement.x + bullet.radius * 3, firstElement.y - 50, 200, 80);
                    
                    // 绘制调试信息
                    ctx.fillStyle = '#ff44ff';
                    ctx.font = '12px Consolas, monospace';
                    ctx.textAlign = 'left';
                    ctx.fillText(`错误类型: ${bullet.errorType}`, firstElement.x + bullet.radius * 3 + 5, firstElement.y - 36);
                    ctx.fillText(`语言: ${bullet.language}`, firstElement.x + bullet.radius * 3 + 5, firstElement.y - 24);
                    ctx.fillText(`描述: ${bullet.errorDesc}`, firstElement.x + bullet.radius * 3 + 5, firstElement.y - 12);
                    ctx.fillText(`修复: ${bullet.fixTip}`, firstElement.x + bullet.radius * 3 + 5, firstElement.y);
                    ctx.fillText(`位置: (${firstElement.x.toFixed(0)}, ${firstElement.y.toFixed(0)})`, firstElement.x + bullet.radius * 3 + 5, firstElement.y + 12);
                    
                    // 如果正在修复，绘制修复进度条
                    if (bullet.isBeingFixed) {
                        const progressWidth = 100;
                        const progressHeight = 8;
                        
                        // 绘制进度条背景
                        ctx.fillStyle = 'rgba(0, 0, 0, 0.5)';
                        ctx.fillRect(firstElement.x - progressWidth/2, firstElement.y - bullet.radius - 45, progressWidth, progressHeight);
                        
                        // 绘制进度条填充
                        const progressGradient = ctx.createLinearGradient(
                            firstElement.x - progressWidth/2, 0,
                            firstElement.x - progressWidth/2 + progressWidth, 0
                        );
                        progressGradient.addColorStop(0, '#00ff00');
                        progressGradient.addColorStop(1, '#88ff88');
                        
                        ctx.fillStyle = progressGradient;
                        ctx.fillRect(firstElement.x - progressWidth/2, firstElement.y - bullet.radius - 45, 
                                    progressWidth * (bullet.fixProgress / 100), progressHeight);
                        
                        // 绘制进度条边框
                        ctx.strokeStyle = 'rgba(255, 255, 255, 0.5)';
                        ctx.lineWidth = 1;
                        ctx.strokeRect(firstElement.x - progressWidth/2, firstElement.y - bullet.radius - 45, progressWidth, progressHeight);
                        
                        // 绘制"修复中"文本
                        ctx.fillStyle = '#00ff00';
                        ctx.font = '12px Arial';
                        ctx.textAlign = 'center';
                        ctx.fillText('修复中...', firstElement.x, firstElement.y - bullet.radius - 55);
                    }
                }
            } catch (error) {
                console.error("阵列错误绘制异常:", error);
            }
        } else {
            // 普通错误的绘制逻辑
            // 判断是否为阵列错误，为阵列错误添加特殊效果
            if (bullet.isArrayBullet) {
                // 为阵列错误添加连接线效果
                if (bullets.some(b => b.isArrayBullet && b !== bullet && 
                    Math.abs(b.y - bullet.y) < bullet.radius * 6 && 
                    Math.abs(b.x - bullet.x) < bullet.radius * 10)) {
                    
                    bullets.filter(b => b.isArrayBullet).forEach(otherBullet => {
                        if (otherBullet !== bullet && 
                            Math.abs(otherBullet.y - bullet.y) < bullet.radius * 6 && 
                            Math.abs(otherBullet.x - bullet.x) < bullet.radius * 10) {
                            
                            // 绘制连接线
                            ctx.beginPath();
                            ctx.strokeStyle = `rgba(0, 170, 255, 0.4)`;
                            ctx.lineWidth = 2;
                            ctx.moveTo(bullet.x, bullet.y);
                            ctx.lineTo(otherBullet.x, otherBullet.y);
                            ctx.stroke();
                        }
                    });
                }
                
                // 为阵列错误添加电流效果
                const electricEffect = ctx.createRadialGradient(
                    bullet.x, bullet.y, 0,
                    bullet.x, bullet.y, bullet.radius * 1.5
                );
                electricEffect.addColorStop(0, `rgba(0, 170, 255, 0.8)`);
                electricEffect.addColorStop(1, `rgba(0, 170, 255, 0)`);
                
                ctx.fillStyle = electricEffect;
                ctx.beginPath();
                ctx.arc(bullet.x, bullet.y, bullet.radius * 1.5, 0, Math.PI * 2);
                ctx.fill();
            }
            
            // 绘制发光效果
            const gradient = ctx.createRadialGradient(
                bullet.x, bullet.y, 0,
                bullet.x, bullet.y, bullet.radius * 2
            );
            
            // 使用语言对应的颜色
            const baseColor = bullet.color;
            
            switch(bullet.type) {
                case 'normal':
                    gradient.addColorStop(0, `rgba(${hexToRgb(baseColor)}, 0.7)`);
                    gradient.addColorStop(1, `rgba(${hexToRgb(baseColor)}, 0)`);
                    break;
                case 'large':
                    gradient.addColorStop(0, `rgba(${hexToRgb(baseColor)}, 0.7)`);
                    gradient.addColorStop(1, `rgba(${hexToRgb(baseColor)}, 0)`);
                    break;
                case 'fast':
                    gradient.addColorStop(0, `rgba(${hexToRgb(baseColor)}, 0.7)`);
                    gradient.addColorStop(1, `rgba(${hexToRgb(baseColor)}, 0)`);
                    // 添加速度轨迹
                    ctx.beginPath();
                    ctx.strokeStyle = `rgba(${hexToRgb(baseColor)}, 0.3)`;
                    ctx.lineWidth = 2;
                    ctx.setLineDash([5, 3]);
                    ctx.moveTo(bullet.x - bullet.dx * 15, bullet.y - bullet.dy * 15);
                    ctx.lineTo(bullet.x, bullet.y);
                    ctx.stroke();
                    ctx.setLineDash([]);
                    break;
                case 'array':
                    gradient.addColorStop(0, `rgba(${hexToRgb(baseColor)}, 0.7)`);
                    gradient.addColorStop(1, `rgba(${hexToRgb(baseColor)}, 0)`);
                    break;
            }

            // 绘制错误/Bug发光效果
            ctx.fillStyle = gradient;
            ctx.beginPath();
            ctx.arc(bullet.x, bullet.y, bullet.radius * 2, 0, Math.PI * 2);
            ctx.fill();

            // 绘制错误/Bug主体
            const innerGradient = ctx.createRadialGradient(
                bullet.x - bullet.radius * 0.3, bullet.y - bullet.radius * 0.3, 0,
                bullet.x, bullet.y, bullet.radius
            );
            innerGradient.addColorStop(0, lightenColor(baseColor, 30));
            innerGradient.addColorStop(1, baseColor);
            
            ctx.fillStyle = innerGradient;
            ctx.beginPath();
            ctx.arc(bullet.x, bullet.y, bullet.radius, 0, Math.PI * 2);
            ctx.fill();
            
            // 如果错误正在被修复，显示修复进度
            if (bullet.isBeingFixed) {
                const progressRadius = bullet.radius * 1.5;
                const startAngle = -Math.PI / 2;
                const endAngle = startAngle + (Math.PI * 2 * (bullet.fixProgress / 100));
                
                ctx.beginPath();
                ctx.arc(bullet.x, bullet.y, progressRadius, startAngle, endAngle);
                ctx.lineTo(bullet.x, bullet.y);
                ctx.closePath();
                ctx.fillStyle = 'rgba(0, 255, 0, 0.3)';
                ctx.fill();
            }
            
            // 添加边缘高光
            ctx.strokeStyle = lightenColor(baseColor, 50);
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.arc(bullet.x, bullet.y, bullet.radius, 0, Math.PI * 2);
            ctx.stroke();

            // 绘制错误类型和描述
            // 根据错误类型调整字体大小
            let fontSize = 10;
            if (bullet.type === 'large') {
                fontSize = 12;
            } else if (bullet.type === 'fast') {
                fontSize = 8;
            }
            
            // 添加文字背景以提高可读性
            const textBg = `rgba(0, 0, 0, 0.6)`;
            const textWidth = ctx.measureText(`${bullet.errorType}: ${bullet.errorDesc}`).width;
            const codeWidth = ctx.measureText(bullet.codeExample).width;
            const maxWidth = Math.max(textWidth, codeWidth);
            
            // 错误类型背景
            ctx.fillStyle = textBg;
            ctx.fillRect(bullet.x - maxWidth/2 - 5, bullet.y - bullet.radius - 30, maxWidth + 10, 40);
            
            // 绘制错误类型和描述
            ctx.fillStyle = 'white';
            ctx.font = `bold ${fontSize}px Consolas, monospace`;
            ctx.textAlign = 'center';
            ctx.fillText(`${bullet.errorType}: ${bullet.errorDesc}`, bullet.x, bullet.y - bullet.radius - 10);
            
            // 绘制错误代码示例
            ctx.font = `${fontSize}px Consolas, monospace`;
            ctx.fillText(bullet.codeExample, bullet.x, bullet.y - bullet.radius - 25);
            
            // 如果是调试目标，绘制调试信息和修复进度
            if (debugTarget && bullet.id === debugTarget.id) {
                // 绘制调试框
                ctx.strokeStyle = '#ff44ff';
                ctx.lineWidth = 2;
                ctx.beginPath();
                ctx.arc(bullet.x, bullet.y, bullet.radius * 3, 0, Math.PI * 2);
                ctx.stroke();
                
                // 添加调试框动画效果
                ctx.strokeStyle = `rgba(255, 68, 255, ${0.3 + 0.2 * Math.sin(Date.now() * 0.005)})`;
                ctx.lineWidth = 1;
                ctx.beginPath();
                ctx.arc(bullet.x, bullet.y, bullet.radius * 3.5, 0, Math.PI * 2);
                ctx.stroke();
                
                // 绘制调试信息背景
                ctx.fillStyle = 'rgba(40, 10, 40, 0.8)';
                ctx.fillRect(bullet.x + bullet.radius * 3, bullet.y - 50, 200, 80);
                
                // 绘制调试信息
                ctx.fillStyle = '#ff44ff';
                ctx.font = '12px Consolas, monospace';
                ctx.textAlign = 'left';
                ctx.fillText(`错误类型: ${bullet.errorType}`, bullet.x + bullet.radius * 3 + 5, bullet.y - 36);
                ctx.fillText(`语言: ${bullet.language}`, bullet.x + bullet.radius * 3 + 5, bullet.y - 24);
                ctx.fillText(`描述: ${bullet.errorDesc}`, bullet.x + bullet.radius * 3 + 5, bullet.y - 12);
                ctx.fillText(`修复: ${bullet.fixTip}`, bullet.x + bullet.radius * 3 + 5, bullet.y);
                ctx.fillText(`位置: (${bullet.x.toFixed(0)}, ${bullet.y.toFixed(0)})`, bullet.x + bullet.radius * 3 + 5, bullet.y + 12);
                
                // 如果正在修复，绘制修复进度条
                if (bullet.isBeingFixed) {
                    const progressWidth = 100;
                    const progressHeight = 8;
                    
                    // 绘制进度条背景
                    ctx.fillStyle = 'rgba(0, 0, 0, 0.5)';
                    ctx.fillRect(bullet.x - progressWidth/2, bullet.y - bullet.radius - 45, progressWidth, progressHeight);
                    
                    // 绘制进度条填充
                    const progressGradient = ctx.createLinearGradient(
                        bullet.x - progressWidth/2, 0,
                        bullet.x - progressWidth/2 + progressWidth, 0
                    );
                    progressGradient.addColorStop(0, '#00ff00');
                    progressGradient.addColorStop(1, '#88ff88');
                    
                    ctx.fillStyle = progressGradient;
                    ctx.fillRect(bullet.x - progressWidth/2, bullet.y - bullet.radius - 45, 
                                progressWidth * (bullet.fixProgress / 100), progressHeight);
                    
                    // 绘制进度条边框
                    ctx.strokeStyle = 'rgba(255, 255, 255, 0.5)';
                    ctx.lineWidth = 1;
                    ctx.strokeRect(bullet.x - progressWidth/2, bullet.y - bullet.radius - 45, progressWidth, progressHeight);
                    
                    // 绘制"修复中"文本
                    ctx.fillStyle = '#00ff00';
                    ctx.font = '12px Arial';
                    ctx.textAlign = 'center';
                    ctx.fillText('修复中...', bullet.x, bullet.y - bullet.radius - 55);
                    
                    // 添加修复粒子效果
                    if (Math.random() > 0.7) {
                        drawParticles(bullet.x, bullet.y, '#00ff00', 2);
                    }
                }
            }
        }
    });

    // 绘制道具
    powerUps.forEach(powerUp => {
        const age = Date.now() - powerUp.createdAt;
        const pulseSize = 1 + 0.2 * Math.sin(age * powerUp.pulseSpeed * 0.01); // 脉冲效果
        const actualRadius = powerUp.radius * pulseSize;
        
        // 绘制道具光环
        const gradient = ctx.createRadialGradient(
            powerUp.x, powerUp.y, 0,
            powerUp.x, powerUp.y, actualRadius * 2
        );
        gradient.addColorStop(0, powerUp.color);
        gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
        
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(powerUp.x, powerUp.y, actualRadius * 2, 0, Math.PI * 2);
        ctx.fill();

        // 绘制道具主体
        const innerGradient = ctx.createRadialGradient(
            powerUp.x - actualRadius * 0.3, powerUp.y - actualRadius * 0.3, 0,
            powerUp.x, powerUp.y, actualRadius
        );
        innerGradient.addColorStop(0, lightenColor(powerUp.color, 50));
        innerGradient.addColorStop(1, powerUp.color);
        
        ctx.fillStyle = innerGradient;
        ctx.beginPath();
        ctx.arc(powerUp.x, powerUp.y, actualRadius, 0, Math.PI * 2);
        ctx.fill();
        
        // 添加闪光效果
        ctx.strokeStyle = 'rgba(255, 255, 255, ' + (0.5 + 0.5 * Math.sin(age * 0.01)) + ')';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.arc(powerUp.x, powerUp.y, actualRadius * 1.2, 0, Math.PI * 2);
        ctx.stroke();

        // 绘制道具文字背景
        const textWidth = ctx.measureText(powerUp.text).width;
        ctx.fillStyle = 'rgba(0, 0, 0, 0.6)';
        ctx.fillRect(powerUp.x - textWidth/2 - 5, powerUp.y - actualRadius - 20, textWidth + 10, 20);
        
        // 绘制道具文字
        ctx.fillStyle = 'white';
        ctx.font = 'bold 14px Arial';
        ctx.textAlign = 'center';
        ctx.fillText(powerUp.text, powerUp.x, powerUp.y - actualRadius - 5);
        
        // 绘制吸引线，连接到玩家
        const distToPlayer = Math.hypot(powerUp.x - player.x, powerUp.y - player.y);
        if (distToPlayer < 200) { // 只在玩家靠近时显示吸引线
            const opacity = 0.5 * (1 - distToPlayer / 200);
            ctx.strokeStyle = `rgba(255, 255, 255, ${opacity})`;
            ctx.lineWidth = 1;
            ctx.setLineDash([5, 5]); // 虚线效果
            ctx.beginPath();
            ctx.moveTo(powerUp.x, powerUp.y);
            ctx.lineTo(player.x, player.y);
            ctx.stroke();
            ctx.setLineDash([]); // 重置虚线
            
            // 添加吸引粒子
            if (distToPlayer < 100 && Math.random() > 0.8) {
                const particleX = powerUp.x + (player.x - powerUp.x) * Math.random();
                const particleY = powerUp.y + (player.y - powerUp.y) * Math.random();
                drawParticles(particleX, particleY, powerUp.color, 1);
            }
        }
    });

    // 绘制玩家效果
    if (playerEffects.shield > 0) {
        const shieldOpacity = ((playerEffects.shield - Date.now()) / config.powerUpTypes.shield.duration);
        ctx.strokeStyle = `rgba(0, 255, 0, ${shieldOpacity})`;
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.arc(player.x, player.y, player.size * 1.2, 0, Math.PI * 2);
        ctx.stroke();
        
        // 添加盾牌动画效果
        ctx.strokeStyle = `rgba(0, 255, 0, ${shieldOpacity * 0.5})`;
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.arc(player.x, player.y, player.size * 1.2 + 5 * Math.sin(Date.now() * 0.005), 0, Math.PI * 2);
        ctx.stroke();
    }

    if (playerEffects.slowTime > 0) {
        const slowOpacity = ((playerEffects.slowTime - Date.now()) / config.powerUpTypes.slowTime.duration);
        
        // 创建径向渐变背景
        const slowGradient = ctx.createRadialGradient(
            player.x, player.y, 0,
            player.x, player.y, config.width
        );
        slowGradient.addColorStop(0, `rgba(0, 136, 255, ${slowOpacity * 0.1})`);
        slowGradient.addColorStop(1, `rgba(0, 136, 255, 0)`);
        
        ctx.fillStyle = slowGradient;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        // 添加时间减缓文字
        ctx.fillStyle = `rgba(0, 136, 255, ${slowOpacity})`;
        ctx.font = 'bold 16px Arial';
        ctx.textAlign = 'center';
        ctx.fillText('时间减缓', player.x, player.y - player.size * 2);
        
        // 绘制时钟图标
        ctx.beginPath();
        ctx.arc(player.x, player.y - player.size * 2 - 20, 10, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(0, 136, 255, ${slowOpacity})`;
        ctx.lineWidth = 2;
        ctx.stroke();
        
        // 时钟指针
        const time = Date.now() * 0.001;
        ctx.beginPath();
        ctx.moveTo(player.x, player.y - player.size * 2 - 20);
        ctx.lineTo(
            player.x + 8 * Math.cos(time * 0.5),
            player.y - player.size * 2 - 20 + 8 * Math.sin(time * 0.5)
        );
        ctx.stroke();
    }
    
    if (playerEffects.debugMode > 0) {
        const debugOpacity = ((playerEffects.debugMode - Date.now()) / config.powerUpTypes.debugMode.duration);
        
        // 创建网格背景效果
        ctx.fillStyle = `rgba(255, 68, 255, ${debugOpacity * 0.05})`;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        // 添加调试模式边框
        ctx.strokeStyle = `rgba(255, 68, 255, ${debugOpacity * 0.3})`;
        ctx.lineWidth = 3;
        ctx.strokeRect(10, 10, canvas.width - 20, canvas.height - 20);
        
        // 显示调试模式文本
        ctx.fillStyle = `rgba(255, 68, 255, ${debugOpacity})`;
        ctx.font = 'bold 16px Arial';
        ctx.textAlign = 'center';
        ctx.fillText('调试模式已启动', config.width / 2, 30);
        
        if (debugTarget) {
            if (debugTarget.isBeingFixed) {
                ctx.fillText(`正在修复 ${debugTarget.errorType} 错误...`, config.width / 2, 50);
            } else {
                ctx.fillText('点击错误开始修复', config.width / 2, 50);
            }
        } else {
            ctx.fillText('点击一个错误进行分析和修复', config.width / 2, 50);
        }
        
        // 显示剩余时间
        const timeLeft = Math.ceil((playerEffects.debugMode - Date.now()) / 1000);
        ctx.fillText(`调试模式剩余时间: ${timeLeft}秒`, config.width / 2, 70);
        
        // 添加扫描线效果
        const scanLineY = (Date.now() % 2000) / 2000 * canvas.height;
        ctx.fillStyle = `rgba(255, 68, 255, ${debugOpacity * 0.2})`;
        ctx.fillRect(0, scanLineY, canvas.width, 2);
    }
    
    if (playerEffects.asyncDefense > 0) {
        const asyncOpacity = ((playerEffects.asyncDefense - Date.now()) / 3000); // 3秒异步防御
        ctx.strokeStyle = `rgba(247, 223, 30, ${asyncOpacity})`; // JavaScript黄色
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.arc(player.x, player.y, player.size * 1.2, 0, Math.PI * 2);
        ctx.stroke();
        
        // 添加旋转效果
        const rotationSpeed = Date.now() * 0.003;
        for (let i = 0; i < 3; i++) {
            const angle = rotationSpeed + i * (Math.PI * 2 / 3);
            const orbitRadius = player.size * 1.8;
            const orbitX = player.x + orbitRadius * Math.cos(angle);
            const orbitY = player.y + orbitRadius * Math.sin(angle);
            
            ctx.fillStyle = `rgba(247, 223, 30, ${asyncOpacity})`;
            ctx.beginPath();
            ctx.arc(orbitX, orbitY, 5, 0, Math.PI * 2);
            ctx.fill();
        }
        
        // 添加异步防御的文字
        ctx.fillStyle = '#f7df1e';
        ctx.font = 'bold 14px Arial';
        ctx.textAlign = 'center';
        ctx.fillText('async/await', player.x, player.y - player.size * 1.5);
    }

    // 更新状态面板
    updateStatusPanel();
    
    // 如果游戏暂停，显示暂停提示
    if (isPaused) {
        ctx.fillStyle = 'rgba(0, 0, 0, 0.5)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        ctx.fillStyle = '#ffffff';
        ctx.font = 'bold 36px Arial';
        ctx.textAlign = 'center';
        ctx.fillText('游戏已暂停', canvas.width / 2, canvas.height / 2);
        
        ctx.font = '18px Arial';
        ctx.fillText('正在查看技能树', canvas.width / 2, canvas.height / 2 + 40);
    }
}

// 添加更新状态面板的函数
function updateStatusPanel() {
    // 更新存活时间
    const survivalTime = gameStartTime ? ((Date.now() - gameStartTime) / 1000).toFixed(1) : "0.0";
    document.getElementById('statusSurvivalTime').textContent = `${survivalTime}秒`;
    
    // 更新分数
    document.getElementById('statusCurrentScore').textContent = currentScore;
    document.getElementById('statusHighScore').textContent = highScore;
    
    // 更新难度
    const difficultyMap = {
        'easy': '简单',
        'normal': '普通',
        'hard': '困难'
    };
    document.getElementById('statusDifficulty').textContent = difficultyMap[currentDifficulty];
    
    // 更新技能点
    document.getElementById('statusSkillPoints').textContent = skillPoints;
    
    // 更新移动速度显示
    const baseSpeed = config.playerSpeed;
    const currentSpeed = player.speed;
    const speedPercentage = Math.round((currentSpeed / baseSpeed - 1) * 100);
    
    // 检查是否存在移动速度显示元素，如果不存在则创建
    let speedElement = document.getElementById('statusSpeedBoost');
    if (!speedElement) {
        // 找到状态面板的第一个section
        const statusSection = document.querySelector('.status-panel .status-section');
        
        // 创建新的速度显示项
        const speedItem = document.createElement('div');
        speedItem.className = 'status-item';
        speedItem.innerHTML = `
            <span class="status-label">移动速度</span>
            <span class="status-value" id="statusSpeedBoost">+0%</span>
        `;
        
        // 将新元素添加到状态section中
        statusSection.appendChild(speedItem);
        
        speedElement = document.getElementById('statusSpeedBoost');
    }
    
    // 更新速度显示
    if (speedPercentage > 0) {
        speedElement.textContent = `+${speedPercentage}%`;
        speedElement.style.color = '#00ff88';
        
        // 如果达到最大值，添加特殊样式
        if (speedPercentage >= 20) {
            speedElement.className = 'status-value maxed';
        } else {
            speedElement.className = 'status-value boosted';
        }
    } else {
        speedElement.textContent = '+0%';
        speedElement.className = 'status-value';
    }
    
    // 更新已解锁技能列表
    const skillsList = document.getElementById('statusUnlockedSkills');
    skillsList.innerHTML = ''; // 清空现有内容
    
    // 按快捷键顺序显示技能
    const orderedSkills = Object.entries(SKILL_HOTKEYS).map(([key, skillId]) => {
        // 获取技能卡片的消耗点数
        const skillCard = document.querySelector(`.skill-card[data-skill="${skillId}"]`);
        const skillCost = skillCard ? parseInt(skillCard.dataset.cost) : 0;
        
        return {
            key: key.replace('Digit', ''),
            skillId,
            name: getSkillName(skillId),
            unlocked: unlockedSkills.includes(skillId),
            canUse: skillPoints >= skillCost,
            cost: skillCost
        };
    });

    if (orderedSkills.some(skill => skill.unlocked) || skillPoints > 0) {
        orderedSkills.forEach(skill => {
            const skillItem = document.createElement('div');
            skillItem.className = 'skill-item';
            
            // 创建技能内容容器
            const skillItemProgress = document.createElement('div');
            skillItemProgress.className = 'skill-item-progress';
            
            // 创建技能信息行（包含快捷键和名称）
            const skillItemInfo = document.createElement('div');
            skillItemInfo.className = 'skill-item-info';
            
            // 创建快捷键显示
            const keyDisplay = document.createElement('span');
            keyDisplay.className = 'skill-key';
            keyDisplay.textContent = skill.key;
            
            // 创建技能名称显示
            const nameDisplay = document.createElement('span');
            nameDisplay.className = 'skill-name';
            
            // 移除所有状态类
            skillItem.classList.remove('unlocked', 'locked', 'available', 'cooldown');
            
            if (skill.unlocked) {
                skillItem.classList.add('unlocked');
                
                if (skill.canUse) {
                    // 技能已解锁且有足够的技能点使用
                    skillItem.classList.add('available');
                    nameDisplay.textContent = `${skill.name} (可用)`;
                    nameDisplay.style.color = '#00ff88';
                    
                    // 如果是代码优化技能且已达到极限，添加特殊标记
                    if (skill.skillId === 'codeOptimization' && speedBoostPercentage >= 20) {
                        nameDisplay.textContent = `${skill.name} (已达极限)`;
                        nameDisplay.style.color = '#ffcc00';
                    }
                } else {
                    // 技能已解锁但没有足够的技能点使用
                    skillItem.classList.add('cooldown');
                    nameDisplay.textContent = `${skill.name} (${skillPoints}/${skill.cost})`;
                    nameDisplay.style.color = '#ffcc00';
                }
            } else {
                if (skill.canUse) {
                    // 技能未解锁但有足够的技能点解锁
                    skillItem.classList.add('available');
                    nameDisplay.textContent = `${skill.name} (可解锁)`;
                    nameDisplay.style.color = '#00ff88';
                } else {
                    // 技能未解锁且没有足够的技能点解锁
                    skillItem.classList.add('locked');
                    nameDisplay.textContent = `${skill.name} (${skillPoints}/${skill.cost})`;
                    nameDisplay.style.color = '#aaaaaa';
                }
            }
            
            // 添加技能信息到信息行
            skillItemInfo.appendChild(keyDisplay);
            skillItemInfo.appendChild(nameDisplay);
            
            // 创建进度条容器
            const progressContainer = document.createElement('div');
            progressContainer.className = 'skill-item-progress-container';
            
            // 创建进度条
            const progressBar = document.createElement('div');
            progressBar.className = 'skill-item-progress-bar';
            
            // 设置进度条宽度
            if (skill.canUse) {
                progressBar.style.width = '100%';
            } else {
                const progress = Math.min(skillPoints / skill.cost * 100, 100);
                progressBar.style.width = `${progress}%`;
            }
            
            // 组装进度条
            progressContainer.appendChild(progressBar);
            
            // 将信息行和进度条添加到技能容器
            skillItemProgress.appendChild(skillItemInfo);
            skillItemProgress.appendChild(progressContainer);
            
            // 将技能容器添加到技能项
            skillItem.appendChild(skillItemProgress);
            
            // 添加到技能列表
            skillsList.appendChild(skillItem);
        });
    } else {
        const noSkillsMsg = document.createElement('div');
        noSkillsMsg.className = 'skill-item no-skills';
        noSkillsMsg.textContent = '尚未解锁技能';
        skillsList.appendChild(noSkillsMsg);
    }
}

// 添加粒子效果函数
function drawParticles(x, y, color, count) {
    for (let i = 0; i < count; i++) {
        const size = 1 + Math.random() * 2;
        const angle = Math.random() * Math.PI * 2;
        const distance = Math.random() * 5;
        
        const particleX = x + Math.cos(angle) * distance;
        const particleY = y + Math.sin(angle) * distance;
        
        ctx.fillStyle = color;
        ctx.beginPath();
        ctx.arc(particleX, particleY, size, 0, Math.PI * 2);
        ctx.fill();
    }
}

// 绘制背景网格
function drawGrid() {
    const gridSize = 30;
    const gridOpacity = 0.2;
    
    ctx.strokeStyle = `rgba(50, 50, 70, ${gridOpacity})`;
    ctx.lineWidth = 1;
    
    // 绘制垂直线
    for (let x = 0; x <= canvas.width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
    }
    
    // 绘制水平线
    for (let y = 0; y <= canvas.height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
    }
}

// 颜色处理函数 - 变亮
function lightenColor(hex, percent) {
    // 移除#号
    hex = hex.replace('#', '');
    
    // 解析RGB值
    let r = parseInt(hex.substring(0, 2), 16);
    let g = parseInt(hex.substring(2, 4), 16);
    let b = parseInt(hex.substring(4, 6), 16);
    
    // 增加亮度
    r = Math.min(255, Math.floor(r + (255 - r) * (percent / 100)));
    g = Math.min(255, Math.floor(g + (255 - g) * (percent / 100)));
    b = Math.min(255, Math.floor(b + (255 - b) * (percent / 100)));
    
    // 转换回十六进制
    const rHex = r.toString(16).padStart(2, '0');
    const gHex = g.toString(16).padStart(2, '0');
    const bHex = b.toString(16).padStart(2, '0');
    
    return `#${rHex}${gHex}${bHex}`;
}

// 将十六进制颜色转换为RGB格式
function hexToRgb(hex) {
    // 移除#号
    hex = hex.replace('#', '');
    
    // 解析RGB值
    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);
    
    return `${r}, ${g}, ${b}`;
}

// 游戏主循环
function gameLoop() {
    if (!isPaused) {
        update();
        draw();
    }
    if (!isGameOver) {
        requestAnimationFrame(gameLoop);
    }
}

// 游戏结束处理
function gameOver() {
    isGameOver = true;
    const survivalTime = ((Date.now() - gameStartTime) / 1000).toFixed(1);
    document.getElementById('survivalTime').textContent = survivalTime;
    const gameOverModal = document.getElementById('gameOver');
    
    // 使用添加show类的方式显示窗口，而不是直接修改display属性
    gameOverModal.style.display = 'block';
    setTimeout(() => {
        gameOverModal.classList.add('show');
    }, 10); // 短暂延迟确保DOM更新
    
    // 保存最高分到本地存储
    if (currentScore > highScore) {
        localStorage.setItem('highScore', currentScore);
    }
    
    // 隐藏调试面板
    debugPanel.style.display = 'none';
    
    // 移除canvas点击事件监听器
    canvas.removeEventListener('click', handleCanvasClick);

    // 添加当前难度显示
    document.getElementById('gameOverDifficulty').textContent = getDifficultyName(currentDifficulty);
}

// 修改难度切换函数
function cycleDifficulty() {
    const difficulties = ['easy', 'normal', 'hard'];
    const currentIndex = difficulties.indexOf(currentDifficulty);
    currentDifficulty = difficulties[(currentIndex + 1) % difficulties.length];
    
    // 更新所有难度显示
    updateDifficultyDisplay();
    
    // 更新游戏配置
    config.bulletSpeedIncrease = config.difficulties[currentDifficulty].bulletSpeedIncrease;
    config.bulletSpawnRate = config.difficulties[currentDifficulty].bulletSpawnRate;
    
    // 显示难度切换提示，添加不同难度的颜色
    const difficultyColors = {
        'easy': '#00ff00',     // 绿色
        'normal': '#0088ff',   // 蓝色
        'hard': '#ff3333'      // 红色
    };
    
    const notification = `已切换到${getDifficultyName(currentDifficulty)}模式`;
    showNotification(notification, 2000, difficultyColors[currentDifficulty]);
}

// 添加获取难度名称的函数
function getDifficultyName(difficulty) {
    const difficultyMap = {
        'easy': '简单',
        'normal': '普通',
        'hard': '困难'
    };
    return difficultyMap[difficulty];
}

// 修改 DOMContentLoaded 事件处理
document.addEventListener('DOMContentLoaded', () => {
    // 获取DOM元素
    canvas = document.getElementById('gameCanvas');
    ctx = canvas.getContext('2d');
    introModal = document.getElementById('introModal');
    introButton = document.getElementById('introButton');
    startModal = document.getElementById('startModal');
    startButton = document.getElementById('startButton');
    skillTreeModal = document.getElementById('skillTree');
    closeSkillTreeButton = document.getElementById('closeSkillTree');
    sidebar = document.getElementById('sidebar');
    debugPanel = document.getElementById('debugPanel');
    
    // 设置画布大小
    canvas.width = config.width;
    canvas.height = config.height;
    
    // 从本地存储加载数据
    const savedSkillPoints = localStorage.getItem('skillPoints');
    const savedUnlockedSkills = localStorage.getItem('unlockedSkills');
    const savedHighScore = localStorage.getItem('highScore');
    const savedSpeedBoost = localStorage.getItem('speedBoostPercentage');
    
    if (savedSkillPoints) {
        skillPoints = parseInt(savedSkillPoints);
    }
    
    if (savedUnlockedSkills) {
        try {
            unlockedSkills = JSON.parse(savedUnlockedSkills);
        } catch (e) {
            console.error('Error parsing unlocked skills:', e);
            unlockedSkills = [];
        }
    }
    
    if (savedHighScore) {
        highScore = parseInt(savedHighScore);
    }
    
    if (savedSpeedBoost) {
        speedBoostPercentage = parseInt(savedSpeedBoost);
    }
    
    // 初始化lastSkillPoints
    lastSkillPoints = skillPoints;
    
    // 先显示介绍窗口
    introModal.style.display = 'block';
    startModal.style.display = 'none';
    
    // 初始应用难度颜色
    updateDifficultyDisplay();
    
    // 绑定介绍窗口的继续按钮事件
    introButton.addEventListener('click', () => {
        introModal.style.display = 'none';
        startModal.style.display = 'block';
    });
    
    // 绑定开始按钮事件
    startButton.addEventListener('click', () => {
        startModal.style.display = 'none';
        init();
    });
    
    // 绑定关闭技能树按钮事件
    closeSkillTreeButton.addEventListener('click', () => {
        skillTreeModal.style.display = 'none';
        isSkillTreeVisible = false;
        isPaused = false;
        showNotification('游戏已恢复');
    });
    
    // 绑定技能卡片点击事件
    document.querySelectorAll('.skill-card').forEach(card => {
        card.addEventListener('click', () => {
            const skillId = card.dataset.skill;
            const skillCost = parseInt(card.dataset.cost);
            
            if (unlockedSkills.includes(skillId)) {
                // 已解锁的技能，激活它
                activateSkill(skillId);
            } else if (skillPoints >= skillCost) {
                // 解锁新技能前保存当前技能点数
                const oldSkillPoints = skillPoints;
                
                // 消耗技能点数
                skillPoints -= skillCost;
                unlockedSkills.push(skillId);
                
                // 保存到本地存储
                localStorage.setItem('skillPoints', skillPoints);
                localStorage.setItem('unlockedSkills', JSON.stringify(unlockedSkills));
                
                // 显示技能点数消耗的效果
                const skillPointsDisplay = document.getElementById('skillPointsDisplay');
                if (skillPointsDisplay) {
                    skillPointsDisplay.innerHTML = `${skillPoints} <span class="skill-cost-effect">(-${skillCost})</span>`;
                    
                    // 添加消耗动画
                    const costEffect = skillPointsDisplay.querySelector('.skill-cost-effect');
                    if (costEffect) {
                        costEffect.style.color = '#ff5555';
                        costEffect.style.animation = 'fadeOut 1.5s forwards';
                        setTimeout(() => {
                            skillPointsDisplay.textContent = skillPoints;
                        }, 1500);
                    }
                }
                
                // 更新状态面板
                updateStatusPanel();
                
                // 更新技能树显示
                updateSkillTreeDisplay();
                
                showNotification(`解锁技能: ${getSkillName(skillId)}`);
                
                // 如果是被动技能，立即应用
                applyPassiveSkill(skillId);
            } else {
                showNotification('技能点不足!');
            }
        });
    });

    // 阻止空格键滚动
    window.addEventListener('keydown', function(e) {
        if(e.code === 'Space' && e.target === document.body) {
            e.preventDefault();
        }
    });
});

// 更新技能树显示
function updateSkillTreeDisplay() {
    document.getElementById('skillPointsDisplay').textContent = skillPoints;
    
    document.querySelectorAll('.skill-card').forEach(card => {
        const skillId = card.dataset.skill;
        const skillCost = parseInt(card.dataset.cost);
        const hotkeyNumber = Object.entries(SKILL_HOTKEYS).find(([_, skill]) => skill === skillId)?.[0]?.replace('Digit', '') || '';
        const isUnlocked = unlockedSkills.includes(skillId);
        const canUse = skillPoints >= skillCost;
        
        // 更新技能卡片的快捷键显示
        const hotkeyDisplay = card.querySelector('.skill-hotkey') || document.createElement('div');
        hotkeyDisplay.className = 'skill-hotkey';
        hotkeyDisplay.textContent = `快捷键: ${hotkeyNumber}`;
        if (!card.querySelector('.skill-hotkey')) {
            card.insertBefore(hotkeyDisplay, card.querySelector('.skill-cost'));
        }
        
        // 添加或更新技能缓冲条
        let progressContainer = card.querySelector('.skill-progress-container');
        if (!progressContainer) {
            progressContainer = document.createElement('div');
            progressContainer.className = 'skill-progress-container';
            
            const progressBar = document.createElement('div');
            progressBar.className = 'skill-progress-bar';
            progressContainer.appendChild(progressBar);
            
            card.appendChild(progressContainer);
        }
        
        // 更新技能缓冲条进度
        const progressBar = progressContainer.querySelector('.skill-progress-bar');
        
        // 移除所有状态类
        card.classList.remove('locked', 'unlocked', 'available', 'cooldown');
        
        // 检查代码优化技能是否已达到极限
        if (skillId === 'codeOptimization' && speedBoostPercentage >= 20) {
            card.classList.add('maxed');
            const descElement = card.querySelector('.skill-desc');
            if (descElement) {
                descElement.textContent = '移动速度已提升至极限(20%)';
            }
        } else {
            card.classList.remove('maxed');
        }
        
        // 更新技能卡片状态和进度条
        if (isUnlocked) {
            card.classList.add('unlocked');
            
            // 检查是否有足够的技能点使用技能
            if (canUse) {
                card.classList.add('available');
                progressBar.style.width = '100%';
                
                // 更新技能消耗显示
                const costElement = card.querySelector('.skill-cost');
                if (costElement) {
                    costElement.textContent = `消耗: ${skillCost}点 (可用)`;
                    costElement.style.color = '#00ff88';
                }
            } else {
                card.classList.add('cooldown');
                const progress = Math.min(skillPoints / skillCost * 100, 100);
                progressBar.style.width = `${progress}%`;
                
                // 更新技能消耗显示
                const costElement = card.querySelector('.skill-cost');
                if (costElement) {
                    costElement.textContent = `消耗: ${skillCost}点 (${skillPoints}/${skillCost})`;
                    costElement.style.color = '#ffcc00';
                }
            }
        } else {
            // 未解锁的技能
            if (canUse) {
                card.classList.add('available');
                progressBar.style.width = '100%';
                
                // 更新技能消耗显示
                const costElement = card.querySelector('.skill-cost');
                if (costElement) {
                    costElement.textContent = `消耗: ${skillCost}点 (可解锁)`;
                    costElement.style.color = '#00ff88';
                }
            } else {
                card.classList.add('locked');
                const progress = Math.min(skillPoints / skillCost * 100, 100);
                progressBar.style.width = `${progress}%`;
                
                // 更新技能消耗显示
                const costElement = card.querySelector('.skill-cost');
                if (costElement) {
                    costElement.textContent = `消耗: ${skillCost}点 (${skillPoints}/${skillCost})`;
                    costElement.style.color = '#aaaaaa';
                }
            }
        }
    });
}

// 激活技能
function activateSkill(skillId) {
    const currentTime = Date.now();
    
    // 获取技能消耗点数
    const skillCard = document.querySelector(`.skill-card[data-skill="${skillId}"]`);
    if (!skillCard) return;
    
    const skillCost = parseInt(skillCard.dataset.cost);
    
    // 检查是否有足够的技能点数
    if (skillPoints < skillCost) {
        showNotification(`技能点数不足！需要 ${skillCost} 点`, 1500, '#ff3333');
        return;
    }
    
    // 消耗技能点数
    skillPoints -= skillCost;
    localStorage.setItem('skillPoints', skillPoints);
    
    // 显示技能点数消耗的效果
    const skillPointsDisplay = document.getElementById('skillPointsDisplay');
    if (skillPointsDisplay) {
        skillPointsDisplay.innerHTML = `${skillPoints} <span class="skill-cost-effect">(-${skillCost})</span>`;
        
        // 添加消耗动画
        const costEffect = skillPointsDisplay.querySelector('.skill-cost-effect');
        if (costEffect) {
            costEffect.style.color = '#ff5555';
            costEffect.style.animation = 'fadeOut 1.5s forwards';
            setTimeout(() => {
                skillPointsDisplay.textContent = skillPoints;
            }, 1500);
        }
    }
    
    // 更新状态面板
    updateStatusPanel();
    
    // 更新技能树显示
    updateSkillTreeDisplay();
    
    switch(skillId) {
        case 'asyncDefense':
            playerEffects.asyncDefense = currentTime + 3000; // 3秒无敌
            showNotification('异步防御已激活!');
            break;
        case 'garbageCollector':
            bullets = [];
            showNotification('垃圾回收已执行，所有错误已清除!');
            break;
        case 'debugger':
            playerEffects.debugMode = currentTime + 7000; // 7秒调试模式
            debugPanel.style.display = 'block';
            
            // 选择最近的错误作为调试目标
            if (bullets.length > 0) {
                let closestBullet = bullets[0];
                let minDistance = Math.hypot(closestBullet.x - player.x, closestBullet.y - player.y);
                
                bullets.forEach(bullet => {
                    const distance = Math.hypot(bullet.x - player.x, bullet.y - player.y);
                    if (distance < minDistance) {
                        minDistance = distance;
                        closestBullet = bullet;
                    }
                });
                
                debugTarget = closestBullet;
                debugTarget.isBeingFixed = false;
                debugTarget.fixProgress = 0;
                updateDebugPanel();
            }
            
            showNotification('调试器已激活! 所有错误已暂停，点击错误开始修复', 2500, '#00aaff');
            break;
        case 'codeOptimization':
            // 代码优化是被动技能，直接调用applyPassiveSkill
            applyPassiveSkill('codeOptimization');
            break;
        case 'refactoring':
            // 改变所有错误的移动方向
            bullets.forEach(bullet => {
                // 反转方向
                bullet.dx = -bullet.dx;
                bullet.dy = -bullet.dy;
            });
            showNotification('代码重构完成，所有错误方向已改变!');
            break;
        case 'multiThreading':
            // 创建分身
            if (playerClones.length < 2) { // 最多2个分身
                const offset = 30;
                const positions = [
                    { x: player.x - offset, y: player.y },
                    { x: player.x + offset, y: player.y }
                ];
                
                const availablePosition = positions.find(pos => {
                    return !playerClones.some(clone => 
                        Math.hypot(clone.x - pos.x, clone.y - pos.y) < player.size
                    );
                })
                
                if (availablePosition) {
                    // 创建分身
                    playerClones.push({
                        x: availablePosition.x,
                        y: availablePosition.y,
                        size: player.size * 0.8,
                        attractRadius: 100 // 吸引范围
                    });
                    
                    // 设置0.5秒无敌时间
                    playerEffects.shield = Date.now() + 500;
                    showNotification('多线程分身已创建! 获得0.5秒无敌时间!');
                    
                    // 添加无敌状态视觉效果
                    createInvincibilityEffect();
                } else {
                    showNotification('无法创建更多分身!');
                }
            } else {
                showNotification('已达到最大分身数量!');
            }
            break;
    }
}

// 应用被动技能
function applyPassiveSkill(skillId) {
    switch(skillId) {
        case 'codeOptimization':
            // 检查是否已达到最大速度加成
            if (speedBoostPercentage >= 20) {
                showNotification('代码优化已达到极限(20%)!', 2000, '#ffcc00');
                return;
            }
            
            // 记录优化前的速度
            const oldSpeed = player.speed;
            
            // 永久提升移动速度
            player.speed *= 1.1;
            speedBoostPercentage += 10;
            
            // 创建速度提升的视觉效果
            createSpeedBoostEffect();
            
            // 添加速度提升动画
            const speedElement = document.getElementById('statusSpeedBoost');
            if (speedElement) {
                speedElement.style.transform = 'scale(1.5)';
                speedElement.style.color = '#00ff88';
                setTimeout(() => {
                    speedElement.style.transform = '';
                }, 500);
            }
            
            if (speedBoostPercentage >= 20) {
                showNotification('代码优化完成，移动速度提升10%! 已达到极限(20%)', 2000, '#00ff88');
                
                // 更新技能卡片显示
                document.querySelectorAll('.skill-card').forEach(card => {
                    if (card.dataset.skill === 'codeOptimization') {
                        card.classList.add('maxed');
                        const descElement = card.querySelector('.skill-desc');
                        if (descElement) {
                            descElement.textContent = '移动速度已提升至极限(20%)';
                        }
                    }
                });
            } else {
                showNotification(`代码优化完成，移动速度提升10%! (总计 ${speedBoostPercentage}%)`, 2000, '#00ff88');
            }
            break;
    }
}

// 添加速度提升的视觉效果
function createSpeedBoostEffect() {
    // 创建一个速度提升的动画效果
    const speedLines = [];
    const lineCount = 20;
    
    for (let i = 0; i < lineCount; i++) {
        const angle = Math.random() * Math.PI * 2;
        const distance = 50 + Math.random() * 100;
        
        speedLines.push({
            x: player.x,
            y: player.y,
            dx: Math.cos(angle) * 10,
            dy: Math.sin(angle) * 10,
            length: 10 + Math.random() * 20,
            life: 30 + Math.random() * 20,
            maxLife: 30 + Math.random() * 20,
            color: '#00ff88'
        });
    }
    
    // 在几帧内渲染这些速度线
    const renderSpeedLines = () => {
        // 更新和绘制速度线
        speedLines.forEach(line => {
            line.x += line.dx;
            line.y += line.dy;
            line.life--;
            
            const alpha = line.life / line.maxLife;
            
            ctx.strokeStyle = `rgba(0, 255, 136, ${alpha})`;
            ctx.lineWidth = 2;
            ctx.beginPath();
            ctx.moveTo(line.x, line.y);
            ctx.lineTo(line.x - line.dx * line.length, line.y - line.dy * line.length);
            ctx.stroke();
        });
        
        // 移除生命值为0的线
        const remainingLines = speedLines.filter(line => line.life > 0);
        
        // 如果还有线存在，继续动画
        if (remainingLines.length > 0) {
            speedLines.length = 0;
            speedLines.push(...remainingLines);
            requestAnimationFrame(renderSpeedLines);
        }
    };
    
    // 开始渲染速度线
    renderSpeedLines();
    
    // 添加闪光效果
    const flash = document.createElement('div');
    flash.style.position = 'absolute';
    flash.style.top = '0';
    flash.style.left = '0';
    flash.style.width = '100%';
    flash.style.height = '100%';
    flash.style.backgroundColor = 'rgba(0, 255, 136, 0.2)';
    flash.style.pointerEvents = 'none';
    flash.style.zIndex = '1000';
    flash.style.transition = 'opacity 0.5s';
    
    document.body.appendChild(flash);
    
    // 闪光效果淡出
    setTimeout(() => {
        flash.style.opacity = '0';
        setTimeout(() => {
            document.body.removeChild(flash);
        }, 500);
    }, 100);
}

// 修改更新调试面板的函数
function updateDebugPanel() {
    if (!debugTarget) {
        document.getElementById('debugInfo').innerHTML = `
            <div class="debug-help">点击游戏中的错误进行分析和修复</div>
        `;
        return;
    }
    
    const bullet = debugTarget;
    let fixButtonHtml = '';
    
    if (bullet.isBeingFixed) {
        fixButtonHtml = `
            <div class="fix-progress">
                <div class="progress-bar">
                    <div class="progress-fill" style="width: ${bullet.fixProgress}%"></div>
                </div>
                <div>修复进度: ${Math.floor(bullet.fixProgress)}%</div>
            </div>
        `;
    } else {
        // 不再提供修复按钮，玩家需要直接点击游戏中的错误
        fixButtonHtml = '';
    }
    
    // 为阵列错误添加特殊信息
    let arrayInfo = '';
    if (bullet.isArrayGroup) {
        arrayInfo = `
            <div class="debug-section">
                <div class="debug-label">阵列错误</div>
                <div class="debug-value">剩余元素: ${bullet.arrayElements.length}/${bullet.health}</div>
            </div>
        `;
    }
    
    let html = `
        <div class="debug-section">
            <div class="debug-label">错误ID</div>
            <div class="debug-value">${bullet.id.substring(0, 8)}...</div>
        </div>
        
        ${arrayInfo}
        
        <div class="debug-section">
            <div class="debug-label">错误类型</div>
            <div class="debug-value">${bullet.errorType}</div>
        </div>
        
        <div class="debug-section">
            <div class="debug-label">编程语言</div>
            <div class="debug-value">${bullet.language}</div>
        </div>
        
        <div class="debug-section">
            <div class="debug-label">错误描述</div>
            <div class="debug-value">${bullet.errorDesc}</div>
        </div>
        
        <div class="code-example">
            <pre>${bullet.codeExample}</pre>
        </div>
        
        <div class="fix-tip">
            <span class="tip">${bullet.fixTip}</span>
        </div>
        
        ${fixButtonHtml}
    `;
    
    document.getElementById('debugInfo').innerHTML = html;
}

// 获取技能名称
function getSkillName(skillId) {
    const skillNames = {
        'asyncDefense': '异步防御',
        'garbageCollector': '垃圾回收',
        'debugger': '调试器',
        'codeOptimization': '代码优化',
        'multiThreading': '多线程',
        'refactoring': '重构'
    };
    return skillNames[skillId] || skillId;
}

// 修改键盘事件处理
document.addEventListener('keydown', (e) => {
    // 处理帮助面板显示/隐藏
    if (e.code === 'KeyH') {
        isHelpVisible = !isHelpVisible;
        sidebar.classList.toggle('show');
        return;
    }
    
    // 处理技能树显示/隐藏
    if (e.code === 'KeyT' && gameStarted) {
        isSkillTreeVisible = !isSkillTreeVisible;
        skillTreeModal.style.display = isSkillTreeVisible ? 'block' : 'none';
        
        // 显示技能树时暂停游戏，隐藏时恢复游戏
        isPaused = isSkillTreeVisible;
        
        // 显示相应的提示
        if (isSkillTreeVisible) {
            showNotification('游戏已暂停，正在查看技能树');
        } else {
            showNotification('游戏已恢复');
        }
        
        updateSkillTreeDisplay();
        return;
    }

    // 在游戏结束时处理难度切换
    if (e.code === 'KeyR' && isGameOver) {
        cycleDifficulty();
        return;
    }

    // 只在游戏结束时响应空格键重新开始
    if (e.code === 'Space' && isGameOver) {
        const gameOverModal = document.getElementById('gameOver');
        gameOverModal.classList.remove('show');
        setTimeout(() => {
            gameOverModal.style.display = 'none';
            init();
        }, 300); // 等待动画结束
        return;
    }
    
    // 在开始界面选择难度
    if (startModal.style.display === 'block') {
        let difficultyChanged = true;
        switch(e.code) {
            case 'Digit1':
                currentDifficulty = 'easy';
                break;
            case 'Digit2':
                currentDifficulty = 'normal';
                break;
            case 'Digit3':
                currentDifficulty = 'hard';
                break;
            default:
                difficultyChanged = false;
        }
        if (difficultyChanged) {
            updateDifficultyDisplay();
        }
        return;
    }

    // 游戏进行中的技能激活
    if (gameStarted && !isGameOver && SKILL_HOTKEYS[e.code]) {
        const skillId = SKILL_HOTKEYS[e.code];
        if (unlockedSkills.includes(skillId)) {
            activateSkill(skillId);
        } else {
            showNotification('该技能尚未解锁！', 1500, '#ff3333');
        }
        return;
    }

    // 移动控制
    switch(e.code) {
        case 'ArrowUp':
        case 'KeyW':
            player.moving.up = true;
            break;
        case 'ArrowDown':
        case 'KeyS':
            player.moving.down = true;
            break;
        case 'ArrowLeft':
        case 'KeyA':
            player.moving.left = true;
            break;
        case 'ArrowRight':
        case 'KeyD':
            player.moving.right = true;
            break;
    }
});

document.addEventListener('keyup', (e) => {
    switch(e.code) {
        case 'ArrowUp':
        case 'KeyW':
            player.moving.up = false;
            break;
        case 'ArrowDown':
        case 'KeyS':
            player.moving.down = false;
            break;
        case 'ArrowLeft':
        case 'KeyA':
            player.moving.left = false;
            break;
        case 'ArrowRight':
        case 'KeyD':
            player.moving.right = false;
            break;
    }
});

// 分离鼠标点击处理函数，确保可以被正确添加和移除
function handleCanvasClick(e) {
    // 只在调试模式下响应点击
    if (playerEffects.debugMode <= 0) return;
    
    // 获取点击位置
    const rect = canvas.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const clickY = e.clientY - rect.top;
    
    // 检查是否点击了错误
    let clickedAnyBullet = false;
    let clickedBulletIndex = -1;
    
    // 遍历所有错误，检查是否被点击
    bullets.forEach((bullet, index) => {
        // 检查是否点击了阵列错误组的任何子元素
        if (bullet.isArrayGroup) {
            // 检查是否点击了阵列错误的任何子元素
            let clickedArrayElement = false;
            bullet.arrayElements.forEach(element => {
                const distance = Math.hypot(element.x - clickX, element.y - clickY);
                if (distance <= element.radius * 2) { // 增大点击范围
                    clickedArrayElement = true;
                }
            });
            
            if (clickedArrayElement) {
                clickedAnyBullet = true;
                clickedBulletIndex = index;
                
                // 如果点击了当前调试目标，开始修复
                if (debugTarget && bullet.id === debugTarget.id) {
                    startFixingBug(debugTarget);
                } else {
                    // 否则，选择这个阵列错误作为新的调试目标
                    if (debugTarget) {
                        // 如果之前有选中的错误，重置其状态
                        debugTarget.isBeingFixed = false;
                        debugTarget.fixProgress = 0;
                    }
                    
                    debugTarget = bullet;
                    debugTarget.isBeingFixed = false;
                    debugTarget.fixProgress = 0;
                    updateDebugPanel();
                    showNotification("已选择阵列错误进行分析", 1000);
                }
            }
        } else {
            // 普通错误的点击检测
            const distance = Math.hypot(bullet.x - clickX, bullet.y - clickY);
            if (distance <= bullet.radius * 2) { // 增大点击范围
                clickedAnyBullet = true;
                clickedBulletIndex = index;
                
                // 如果点击了当前调试目标，开始修复
                if (debugTarget && bullet.id === debugTarget.id) {
                    startFixingBug(debugTarget);
                } else {
                    // 否则，选择这个错误作为新的调试目标
                    if (debugTarget) {
                        // 如果之前有选中的错误，重置其状态
                        debugTarget.isBeingFixed = false;
                        debugTarget.fixProgress = 0;
                    }
                    
                    debugTarget = bullet;
                    debugTarget.isBeingFixed = false;
                    debugTarget.fixProgress = 0;
                    updateDebugPanel();
                    showNotification("已选择新的错误进行分析", 1000);
                }
            }
        }
    });
}

// 添加开始修复错误的函数
function startFixingBug(bullet) {
    if (!bullet.isBeingFixed) {
        bullet.isBeingFixed = true;
        bullet.fixProgress = 0;
        updateDebugPanel();
        
        // 阵列错误显示特殊通知
        if (bullet.isArrayGroup) {
            showNotification("开始修复阵列错误...", 1000, '#00aaff');
        } else {
            showNotification("开始修复错误...", 1000);
        }
        
        // 计算每次更新需要增加的进度，确保1秒内完成
        const updateInterval = 50; // 毫秒
        const totalTime = 1000; // 1秒
        const totalUpdates = totalTime / updateInterval;
        const progressPerUpdate = 100 / totalUpdates;
        
        // 开始修复进度更新
        const fixInterval = setInterval(() => {
            if (!bullet.isBeingFixed || isGameOver || isPaused) {
                clearInterval(fixInterval);
                return;
            }
            
            // 增加修复进度
            bullet.fixProgress += progressPerUpdate;
            
            // 更新调试面板
            updateDebugPanel();
            
            // 修复完成
            if (bullet.fixProgress >= 100) {
                bullet.isBeingFixed = false;
                
                // 从bullets数组中移除修复完成的错误
                bullets = bullets.filter(b => b.id !== bullet.id);
                
                // 增加技能点
                if (bullet.isArrayGroup) {
                    // 阵列错误修复获得固定10点技能点
                    skillPoints += 10;
                    localStorage.setItem('skillPoints', skillPoints);
                    showNotification(`修复完成！阵列错误已解决，获得10技能点！`, 2000, '#00aaff');
                } else {
                    // 普通错误修复
                    skillPoints += 10;
                    localStorage.setItem('skillPoints', skillPoints);
                    showNotification("修复完成！错误已解决，获得10技能点！", 2000);
                }
                
                // 重置调试目标
                debugTarget = null;
                updateDebugPanel();
                
                // 清除定时器
                clearInterval(fixInterval);
            }
        }, updateInterval);
    }
}

// 将startFixingBug函数添加到全局作用域
window.startFixingBug = startFixingBug;

// 移除了修复按钮的全局处理函数

// 添加道具碰撞检测函数
function checkPowerUpCollision() {
    const currentTime = Date.now();
    powerUps = powerUps.filter(powerUp => {
        const distance = Math.hypot(powerUp.x - player.x, powerUp.y - player.y);
        if (distance < powerUp.radius + player.size/2) {
            switch(powerUp.type) {
                case 'shield':
                    playerEffects.shield = currentTime + config.powerUpTypes.shield.duration;
                    showNotification('代码审查已激活，暂时免疫错误!');
                    break;
                case 'slowTime':
                    playerEffects.slowTime = currentTime + config.powerUpTypes.slowTime.duration;
                    showNotification('断点调试已激活，错误移动减慢!');
                    break;
                case 'clearScreen':
                    bullets = [];
                    showNotification('全局修复已执行，所有错误已清除!');
                    break;
                case 'debugMode':
                    playerEffects.debugMode = currentTime + config.powerUpTypes.debugMode.duration;
                    debugPanel.style.display = 'block';
                    
                    if (bullets.length > 0) {
                        let closestBullet = bullets[0];
                        let minDistance = Math.hypot(closestBullet.x - player.x, closestBullet.y - player.y);
                        
                        bullets.forEach(bullet => {
                            const distance = Math.hypot(bullet.x - player.x, bullet.y - player.y);
                            if (distance < minDistance) {
                                minDistance = distance;
                                closestBullet = bullet;
                            }
                        });
                        
                        debugTarget = closestBullet;
                        debugTarget.isBeingFixed = false;
                        debugTarget.fixProgress = 0;
                        updateDebugPanel();
                    }
                    showNotification('调试模式已激活! 所有错误已暂停，点击错误开始修复', 2500, '#00aaff');
                    break;
            }
            return false;
        }
        return true;
    });
}

// 在文件末尾添加无敌状态效果函数
function createInvincibilityEffect() {
    // 创建闪烁效果的函数
    const flashPlayer = () => {
        // 检查是否仍处于无敌状态
        if (Date.now() < playerEffects.shield) {
            // 计算无敌状态剩余时间的百分比
            const remainingTime = (playerEffects.shield - Date.now()) / 500;
            // 根据剩余时间创建脉冲效果
            const pulseSize = 1 + 0.2 * Math.sin(Date.now() / 50);
            
            // 绘制玩家周围的光环
            ctx.save();
            ctx.globalAlpha = 0.7 * remainingTime;
            ctx.strokeStyle = '#4488ff';
            ctx.lineWidth = 3;
            ctx.beginPath();
            ctx.arc(player.x, player.y, player.size * pulseSize, 0, Math.PI * 2);
            ctx.stroke();
            
            // 添加内部光晕
            ctx.globalAlpha = 0.3 * remainingTime;
            ctx.fillStyle = '#4488ff';
            ctx.fill();
            ctx.restore();
            
            // 继续动画
            requestAnimationFrame(flashPlayer);
        }
    };
    
    // 开始闪烁动画
    flashPlayer();
    
    // 创建短暂的能量波纹效果
    const createEnergyRipple = () => {
        const ripples = [];
        const rippleCount = 2;
        
        for (let i = 0; i < rippleCount; i++) {
            ripples.push({
                x: player.x,
                y: player.y,
                radius: player.size,
                maxRadius: player.size * 3,
                alpha: 0.8,
                color: '#4488ff'
            });
        }
        
        const animateRipples = () => {
            ripples.forEach(ripple => {
                ripple.radius += 3;
                ripple.alpha -= 0.02;
                
                if (ripple.alpha > 0) {
                    ctx.save();
                    ctx.globalAlpha = ripple.alpha;
                    ctx.strokeStyle = ripple.color;
                    ctx.lineWidth = 2;
                    ctx.beginPath();
                    ctx.arc(ripple.x, ripple.y, ripple.radius, 0, Math.PI * 2);
                    ctx.stroke();
                    ctx.restore();
                }
            });
            
            // 过滤掉已消失的波纹
            const activeRipples = ripples.filter(r => r.alpha > 0 && r.radius < r.maxRadius);
            
            if (activeRipples.length > 0) {
                ripples.length = 0;
                ripples.push(...activeRipples);
                requestAnimationFrame(animateRipples);
            }
        };
        
        animateRipples();
    };
    
    // 启动能量波纹效果
    createEnergyRipple();
}