# JS的知识库~

# 箭头函数比自己写的要快？

你的两个 `createCounter` 函数在功能上是相同的，但 **第一个版本比第二个版本更快**，主要原因是：

---

### **1. `箭头函数` vs. `传统方法定义`**
#### **第一个版本（更快的版本）**：
```javascript
return {
    increment: () => ++n,
    decrement: () => --n,
    reset: () => (n = init)
};
```
- 使用 **箭头函数（`=>`）**，JavaScript 引擎可以更好地优化它们，因为它们：
  - 没有自己的 `this` 绑定（更快访问外层作用域的 `this`）。
  - 不会在每次调用时创建一个新的 `this` 上下文（更轻量）。

#### **第二个版本（稍慢的版本）**：
```javascript
return {
    increment() { ... },
    decrement() { ... },
    reset() { ... }
};
```
- 使用传统 **方法简写（`method() { ... }`）**，虽然语法更干净，但：
  - 每次调用都会绑定 `this`（即使你在这里没使用 `this`）。
  - 相比箭头函数，引擎优化少一些，可能略微降低性能。

---

### **2. `++x`（前缀） vs. `x++`（后缀）**
尽管在 JS 中 `++x` 和 `x++` 的性能差距可以忽略不计（现代 JS 引擎会优化），但在某些情况下：
- **`++n`**（第一个版本）先递增再返回值，比 **`n++`**（第二个版本先返回再递增）少了一次临时变量分配。
- **`--n`** 同理，比 `n--` 更快。

但这部分影响很小，主要是箭头函数与传统方法的差异。

---

### **3. **更精简的作用域链**
- **第一个版本**使用了 **闭包变量 `n`**，访问速度比 **方法内部变量 `start`** 更快：
  - `n` 是直接访问的，而 `start` 可能涉及 `this` 查找（即使你没用 `this`，JS 可能仍要处理）。
- **箭头函数** 由于没有 `this`，引擎可以更高效地查找变量。

---

### **如何验证？**
#### **Benchmark 测试**
在 Node.js 或浏览器控制台试试：
```javascript
const test1 = () => {
    const counter = createCounter(0);
    for (let i = 0; i < 1000000; i++) {
        counter.increment();
    }
};

const test2 = () => {
    const counter = createCounter2(0);
    for (let i = 0; i < 1000000; i++) {
        counter.increment();
    }
};

console.time("Test 1");
test1();
console.timeEnd("Test 1");

console.time("Test 2");
test2();
console.timeEnd("Test 2");
```
你会发现 **第一个版本（箭头函数）几乎总是更快**（尤其在多次调用时）。

---

### **结论**
| Version        | 语言特性         | 优化程度       | 性能       |
| -------------- | ---------------- | -------------- | ---------- |
| **第一个版本** | `箭头函数 + ++x` | ✅ 引擎优化更好 | ⚡ **更快** |
| **第二个版本** | `传统方法 + x++` | ⚠ 少量额外开销 | 🐢 稍慢     |

**如果你在乎性能，选择第一种写法（箭头函数 + 前缀操作）。**

如果想代码更可读，第二种写法也没问题！🛠





# `forEach`、`for...in` 和 `for...of` 

在 JavaScript 中，`forEach`、`for...in` 和 `for...of` 是三种不同的循环方式，它们各自适用于不同的场景，并且有显著的区别。以下是它们的详细对比：

---

## **1. `forEach`（数组方法）**
### **特点**
- **专为数组设计**，是 `Array.prototype` 的方法。
- **不能用于普通对象**（除非先转换成数组，如 `Object.keys(obj).forEach`）。
- **不能使用 `break` 或 `continue`**，只能通过 `return` 跳过当前迭代（类似 `continue`）。
- **没有返回值**（除非手动收集结果）。

### **语法**
```javascript
array.forEach((item, index, array) => {
  // 操作 item
});
```

### **示例**
```javascript
const arr = [1, 2, 3];
arr.forEach((num, i) => {
  console.log(num, i); // 1 0, 2 1, 3 2
});
```

### **适用场景**
- 遍历数组并对每个元素执行操作。
- 不需要提前终止循环的情况。

---

## **2. `for...in`（遍历对象的可枚举属性）**
### **特点**
- **用于遍历对象的键（属性名）**，包括原型链上的可枚举属性。
- **不保证顺序**（尤其是数字键，可能按插入顺序或数字升序）。
- **不适合遍历数组**（会遍历所有可枚举属性，包括非数字键）。
- **可以配合 `hasOwnProperty` 过滤原型链属性**。

### **语法**
```javascript
for (const key in object) {
  if (object.hasOwnProperty(key)) { // 过滤原型链属性
    console.log(key, object[key]);
  }
}
```

### **示例**
```javascript
const obj = { a: 1, b: 2 };
for (const key in obj) {
  console.log(key, obj[key]); // 'a' 1, 'b' 2
}

// 数组（不推荐）
const arr = [10, 20];
arr.foo = 'bar'; // 添加非数字属性
for (const key in arr) {
  console.log(key); // '0', '1', 'foo'（包括非数字键）
}
```

### **适用场景**
- 遍历对象的属性（需注意原型链）。
- 调试时检查对象的所有可枚举属性。

### 为什么能用const？

因为每次用for in / for of ，都会创建一个新的 const 常量，每一次的const常量都是两个不同的variant，

拥有各自新的地址和值，然后下一次循环被销毁。

为什么不能用普通for循环？因为每一次i++都是在原来基础上赋值，违反了const的规定。

---

## **3. `for...of`（遍历可迭代对象的值）**
### **特点**
- **用于遍历可迭代对象（如数组、字符串、Map、Set 等）的值**。
- **不能直接遍历普通对象**（除非实现 `[Symbol.iterator]` 方法）。
- **支持 `break` 和 `continue`**。
- **按顺序遍历**（与 `for...in` 不同）。

### **语法**
```javascript
for (const value of iterable) {
  console.log(value);
}
```

### **示例**
```javascript
// 数组
const arr = [1, 2, 3];
for (const num of arr) {
  if (num === 2) break; // 支持 break
  console.log(num); // 1
}

// 字符串
const str = 'hello';
for (const char of str) {
  console.log(char); // 'h', 'e', 'l', 'l', 'o'
}

// Map
const map = new Map([['a', 1], ['b', 2]]);
for (const [key, value] of map) {
  console.log(key, value); // 'a' 1, 'b' 2
}
```

### **适用场景**
- 遍历数组、字符串、Map、Set 等可迭代对象。
- 需要支持 `break` 或 `continue` 的情况。

---

## **对比总结**
| 特性             | `forEach`       | `for...in`       | `for...of`                 |
| ---------------- | --------------- | ---------------- | -------------------------- |
| **适用对象**     | 数组            | 对象             | 可迭代对象（数组、Map 等） |
| **遍历内容**     | 元素值          | 键（属性名）     | 值                         |
| **支持 `break`** | ❌               | ✅                | ✅                          |
| **顺序保证**     | ✅（数组顺序）   | ❌（不保证顺序）  | ✅（按迭代顺序）            |
| **原型链属性**   | 不涉及          | 会遍历（需过滤） | 不涉及                     |
| **普通对象支持** | ❌（需先转数组） | ✅                | ❌（除非实现迭代器）        |

---

## **如何选择？**
1. **遍历数组**：
   - 需要 `break`/`continue` → `for...of`。
   - 简单操作 → `forEach`。
2. **遍历对象属性**：
   - 用 `for...in` + `hasOwnProperty`。
3. **遍历 Map/Set/字符串**：
   - 用 `for...of`。

---

## **经典面试题**
### **问题：以下代码输出什么？**
```javascript
const arr = [1, 2, 3];
arr.foo = 'bar';

for (const key in arr) {
  console.log(key);
}
```
**答案**：`'0', '1', '2', 'foo'`（`for...in` 会遍历所有可枚举属性，包括非数字键）。

### **如何修复？**
```javascript
for (const key in arr) {
  if (arr.hasOwnProperty(key) && !isNaN(parseInt(key, 10))) {
    console.log(key); // '0', '1', '2'
  }
}
```

---

希望这个对比能帮助你清晰区分这三种循环方式！ 🚀





# Const

在 JavaScript 中，使用 `const` 声明变量和 `Map` 时，它们的“不可变性”表现不同，具体取决于数据类型（基本类型 vs 引用类型）。以下是详细解释：

---

## **1. `const` 的基本规则**
- **`const` 声明的变量不能被重新赋值**（即不能指向新的内存地址）。
- **但对于引用类型（如对象、数组、Map）**，`const` 仅限制变量名绑定，不限制对象内部的变化。

### **示例对比**
| 情况                                      | 是否报错 | 原因                                         |
| ----------------------------------------- | -------- | -------------------------------------------- |
| `const num = 1; num = 2;`                 | ✅ 报错   | 基本类型的值不可变（不能重新赋值）。         |
| `const arr = []; arr = [1];`              | ✅ 报错   | 不能重新赋值（改变变量指向的内存地址）。     |
| `const arr = []; arr.push(1);`            | ❌ 不报错 | 可以修改引用类型内部的内容（内存地址未变）。 |
| `const map = new Map(); map.set('a', 1);` | ❌ 不报错 | 可以修改 `Map` 的内容（内存地址未变）。      |

---

## **2. 为什么 `const` 能用于 `Map`？**
- `Map` 是引用类型，`const` 仅保证变量名 `map` 始终指向同一个 `Map` 实例。
- **允许的操作**：
  ```javascript
  const map = new Map();
  map.set('key', 'value'); // ✅ 修改内部数据
  map.delete('key');       // ✅ 删除键值对
  map.clear();             // ✅ 清空 Map
  ```
- **禁止的操作**：
  ```javascript
  const map = new Map();
  map = new Map(); // ❌ 报错！不能重新赋值
  ```

---

## **3. 类比其他引用类型**
### **（1）对象（Object）**
```javascript
const obj = { a: 1 };
obj.a = 2;      // ✅ 修改属性
obj.b = 3;      // ✅ 添加属性
delete obj.a;   // ✅ 删除属性
obj = {};       // ❌ 报错！不能重新赋值
```

### **（2）数组（Array）**
```javascript
const arr = [1];
arr.push(2);    // ✅ 修改内容
arr[0] = 3;     // ✅ 修改元素
arr = [4];      // ❌ 报错！不能重新赋值
```

---

## **4. 为什么推荐用 `const` 声明 `Map`？**
1. **避免意外重新赋值**：
   - 防止因误操作导致 `Map` 实例被替换（逻辑错误）。
   ```javascript
   let map = new Map();
   map = new Map(); // 可能无意中覆盖原有数据（用 const 可避免）
   ```
2. **代码意图更清晰**：
   - 明确表示该变量指向的 `Map` 实例不会改变（尽管内容可变）。
3. **符合函数式编程实践**：
   - 尽量使用 `const` 减少可变状态，提升代码可维护性。

---

## **5. 如果需要完全不可变的 `Map`**
如果希望 `Map` 内容也不可变，可以使用：
- **冻结对象**（浅层不可变）：
  ```javascript
  const map = new Map();
  Object.freeze(map); // 禁止添加/删除属性（但现有键值仍可修改）
  ```
- **第三方库**（如 Immutable.js）：
  ```javascript
  import { Map } from 'immutable';
  const map = Map({ key: 'value' }); // 完全不可变
  ```

---



### \- const 常量

 \- 简单数据类型  值不可以改变

 \- 对象呢？ 值可以改变，指向的内存地址不能发生改变。

\- 赋值    /  stack.js  /

简单数据类型  值传递

复杂数据类型  地址传递（引用式赋值）

const 类型不同，处理不同

内存栈 连续  空间小 快   一般的数据类型可以存在栈中

内存堆 不连续  空间比较大 慢  复杂数据类型存在堆中

const 对于简单数据，复杂数据类型虽然表现不一致，但内存栈中的值都不会发生改变

简单数据类型的值都是直接存储在Stack中，复杂数据类型在Stack中存储的是地址，地址指向堆中的值。



## **总结**

- `const` 限制的是变量名绑定，而非引用类型的内容。
- **`const + Map` 表示**：
  - 变量 `map` 永远指向同一个 `Map` 实例。
  - 但可以自由修改该 `Map` 的键值对（增删改查）。
- **最佳实践**：默认用 `const`，除非需要重新赋值再改用 `let`。



# Map

`Map` 是 JavaScript 中一种非常实用的数据结构，它类似于对象（`Object`），但提供了更强大的键值对存储和操作能力。`Map` 的键可以是任意类型（包括对象、函数等），而不仅仅是字符串或 `Symbol`。以下是 `Map` 的各种用法详解：



JS的哈希实现：

Object

Map

Set

---

## **1. 创建 Map**
```javascript
// 创建一个空的 Map
const map = new Map();

// 通过二维数组初始化 Map
const mapWithData = new Map([
  ['key1', 'value1'],
  ['key2', 'value2'],
  [1, 'number key'],
  [{}, 'object key'],
]);
```

---

## **2. 基本操作**
### **（1）添加键值对 `set(key, value)`**
```javascript
const map = new Map();
map.set('name', 'Alice');  // 字符串键
map.set(1, 'One');         // 数字键
map.set({ id: 1 }, 'User'); // 对象键
```

### **（2）获取值 `get(key)`**
```javascript
console.log(map.get('name')); // 'Alice'
console.log(map.get(1));      // 'One'
console.log(map.get({ id: 1 })); // undefined（因为对象引用不同）
```

### **（3）检查键是否存在 `has(key)`**
```javascript
console.log(map.has('name')); // true
console.log(map.has('age'));  // false
```

### **（4）删除键值对 `delete(key)`**
```javascript
map.delete('name'); // 删除 'name' 键
console.log(map.has('name')); // false
```

### **（5）清空 Map `clear()`**
```javascript
map.clear();
console.log(map.size); // 0
```

### **（6）获取 Map 大小 `size`**
```javascript
console.log(map.size); // 返回键值对的数量
```

---

## **3. 遍历 Map**
`Map` 提供了多种遍历方式：

### **（1）`keys()`：获取所有键**
```javascript
for (const key of map.keys()) {
  console.log(key);
}
```

### **（2）`values()`：获取所有值**
```javascript
for (const value of map.values()) {
  console.log(value);
}
```

### **（3）`entries()`：获取所有键值对**
```javascript
for (const [key, value] of map.entries()) {
  console.log(key, value);
}
// 等同于：
for (const [key, value] of map) {
  console.log(key, value);
}
```

### **（4）`forEach()` 遍历**
```javascript
map.forEach((value, key) => {
  console.log(key, value);
});
```

---

## **4. Map 与 Object 的区别**
| 特性         | Map                       | Object                                   |
| ------------ | ------------------------- | ---------------------------------------- |
| **键的类型** | 任意类型（对象、函数等）  | 仅限字符串或 `Symbol`                    |
| **顺序**     | 按插入顺序遍历            | 不保证顺序（ES6 后部分有序）             |
| **大小**     | 通过 `size` 获取          | 手动计算（如 `Object.keys(obj).length`） |
| **性能**     | 频繁增删时更快            | 频繁增删时较慢（需优化）                 |
| **默认键**   | 无默认键（如 `toString`） | 可能有原型链上的键                       |

---

## **5. 高级用法**
### **（1）使用对象作为键**
```javascript
const user1 = { id: 1 };
const user2 = { id: 2 };

const userMap = new Map();
userMap.set(user1, 'Alice');
userMap.set(user2, 'Bob');

console.log(userMap.get(user1)); // 'Alice'
```

### **（2）Map 转换为数组**
```javascript
const map = new Map([
  ['a', 1],
  ['b', 2],
]);

// 转换为键数组
const keys = [...map.keys()]; // ['a', 'b']

// 转换为值数组
const values = [...map.values()]; // [1, 2]

// 转换为键值对数组
const entries = [...map.entries()]; // [['a', 1], ['b', 2]]
```

### **（3）数组/对象转换为 Map**
```javascript
// 二维数组 → Map
const arr = [['a', 1], ['b', 2]];
const mapFromArr = new Map(arr);

// 对象 → Map
const obj = { a: 1, b: 2 };
const mapFromObj = new Map(Object.entries(obj));
```

### **（4）Map 合并**
```javascript
const map1 = new Map([['a', 1]]);
const map2 = new Map([['b', 2]]);

const mergedMap = new Map([...map1, ...map2]);
console.log([...mergedMap]); // [['a', 1], ['b', 2]]
```

---

## **6. 实际应用场景**
### **（1）缓存数据**
```javascript
const cache = new Map();

function getData(key) {
  if (cache.has(key)) {
    return cache.get(key);
  }
  const data = fetchDataFromServer(key); // 假设是耗时操作
  cache.set(key, data);
  return data;
}
```

### **（2）统计词频**
```javascript
function countWords(text) {
  const words = text.split(' ');
  const freqMap = new Map();

  for (const word of words) {
    freqMap.set(word, (freqMap.get(word) || 0) + 1);
  }

  return freqMap;
}
```

### **（3）实现 LRU 缓存（最近最少使用）**
```javascript
class LRUCache {
  constructor(capacity) {
    this.capacity = capacity;
    this.cache = new Map();
  }

  get(key) {
    if (!this.cache.has(key)) return -1;
    const value = this.cache.get(key);
    this.cache.delete(key);
    this.cache.set(key, value); // 更新访问顺序
    return value;
  }

  put(key, value) {
    if (this.cache.has(key)) {
      this.cache.delete(key);
    } else if (this.cache.size >= this.capacity) {
      // 删除最久未使用的键
      const oldestKey = this.cache.keys().next().value;
      this.cache.delete(oldestKey);
    }
    this.cache.set(key, value);
  }
}
```

---

## **7. 总结**
- **`Map` 适用于需要键值对存储且键类型多样的场景**。
- **比 `Object` 更灵活**，支持任意键类型、保持插入顺序、提供便捷的遍历方法。
- **常用方法**：`set()`、`get()`、`has()`、`delete()`、`clear()`、`size`。
- **遍历方式**：`keys()`、`values()`、`entries()`、`forEach()`。
- **适用场景**：缓存、词频统计、LRU 缓存等。

希望这份指南能帮助你全面掌握 `Map` 的用法！ 🚀



看起来你想了解的是 `NaN`（Not a Number），而不是 "Nancy"（这是一个英文名字）。  

# **关于 `NaN`（Not a Number）**  
`NaN` 是 JavaScript 中的一个特殊值，表示 **"不是一个有效的数字"**。它通常出现在数学运算失败或结果无法表示为有效数字的情况下。  

#### **关键特性：**
1. **`NaN` 的类型是 `number`**  
   ```js
   console.log(typeof NaN); // "number"
   ```
   虽然它表示 "不是一个数字"，但它在 JavaScript 中被归类为 `number` 类型。

2. **`NaN` 不等于任何值，包括它自己**  
   ```js
   console.log(NaN === NaN); // false
   console.log(NaN == NaN);  // false
   ```
   这是 JavaScript 中唯一一个 **不等于自身** 的值。

3. **如何检测 `NaN`？**  
   由于 `NaN` 不等于自身，不能直接用 `===` 判断，而是要用：
   ```js
   console.log(isNaN(NaN));      // true
   console.log(Number.isNaN(NaN)); // true
   ```
   - `isNaN()`：会先尝试把值转换成数字，再判断是否是 `NaN`（可能误判字符串等）。
   - `Number.isNaN()`：严格检查，只有 `NaN` 才返回 `true`（推荐使用）。

4. **`NaN` 的产生场景**  
   - 数学运算失败：
     ```js
     console.log(0 / 0);        // NaN
     console.log(Math.sqrt(-1)); // NaN
     ```
   - 字符串解析失败：
     ```js
     console.log(parseInt("abc")); // NaN
     ```
   - 与 `NaN` 进行运算：
     ```js
     console.log(NaN + 5); // NaN
     ```

---

### **你的代码示例分析**
```js
function add(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        throw new TypeError('参数类型错误');
    }
    return a + b;
}

console.log(add(NaN, 2)); // 输出: NaN
```
- `NaN` 是 `number` 类型，所以不会触发 `TypeError`。  
- 但 `NaN + 2` 仍然是 `NaN`，因为 `NaN` 会污染所有数学运算。

#### **如何修复？**
如果你想在参数是 `NaN` 时也抛出错误，可以增加检查：
```js
function add(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number' || isNaN(a) || isNaN(b)) {
        throw new TypeError('参数必须是有效的数字');
    }
    return a + b;
}

console.log(add(NaN, 2)); // 抛出错误: "参数必须是有效的数字"
```

---

### **总结**
- `NaN` 表示无效的数字，但类型是 `number`。  
- 用 `Number.isNaN()` 检测 `NaN` 最可靠。  
- 在严格的数值计算中，应该额外检查 `NaN`，避免意外行为。  

希望这能帮你理清 `NaN` 的概念！如果有其他问题，欢迎继续提问。 😊





# IEEE 754 双精度浮点数与安全整数范围 `Number.MAX_SAFE_INTEGER = 2^53 - 1 = 9007199254740991` 的解释

#### 1. **IEEE 754 双精度浮点数格式**
IEEE 754 双精度浮点数（64位）由三部分组成：
- **符号位（1位）**：表示正负
- **指数部分（11位）**：表示 2 的幂次（采用偏移码表示，偏移量 1023）
- **尾数部分（52位）**：表示小数部分（隐含前导 1，实际精度 53 位）

存储格式：
```
[符号位 S][指数部分 E][尾数部分 M]
```

#### 2. **整数如何用浮点数表示**
双精度浮点数可以精确表示的整数范围由尾数的有效位数决定：
- **有效位数**：53 位（52 位显式存储 + 1 位隐含的 `1.`）
- **最大精确整数**：所有 53 位都为 `1` 时，表示的整数是 `2^53 - 1 = 9007199254740991`

#### 3. **为什么 `2^53 - 1` 是安全上限？**
- **`2^53` 的表示问题**：
  - `2^53` 的二进制是 `1` 后跟 53 个 `0`，需要 54 位存储。
  - 但尾数只有 53 位有效位，因此 `2^53` 可以精确表示（因为它是 2 的幂次，指数部分可以调整）。
  - 但 `2^53 + 1` 无法精确表示，因为需要 54 位，而浮点数无法区分 `2^53` 和 `2^53 + 1`。

- **验证**：
  ```javascript
  console.log(2 ** 53 === (2 ** 53 + 1)); // 输出 true（无法区分）
  ```

#### 4. **安全整数的定义**
- **安全整数**：可以精确表示且能正确比较的整数（即 `x === x + 1` 为 `false`）。
- **范围**：`-2^53 + 1` 到 `2^53 - 1`（即 `-9007199254740991` 到 `9007199254740991`）。
- `Number.MAX_SAFE_INTEGER` 是 `2^53 - 1`，`Number.MIN_SAFE_INTEGER` 是 `-2^53 + 1`。

#### 5. **超出安全范围的后果**
- **精度丢失**：超过 `2^53` 后，相邻整数无法区分。
  ```javascript
  console.log(9007199254740992 === 9007199254740993); // true
  ```
- **运算错误**：
  ```javascript
  console.log(9007199254740992 + 1); // 9007199254740992（结果不正确）
  ```

#### 6. **为什么不是 `2^52` 或 `2^64`？**
- `2^52` 太小，浪费了浮点数的精度潜力。
- `2^64` 超出浮点数的有效位数（双精度浮点数无法直接表示 64 位整数）。

#### 7. **实际应用中的注意事项**
- **大整数运算**：若需要处理更大的整数，需使用 `BigInt`（ES2020 引入）：
  ```javascript
  const bigNum = 9007199254740993n; // BigInt 字面量
  console.log(bigNum + 1n); // 正确输出 9007199254740994n
  ```
- **JSON 的限制**：JSON 不支持 `BigInt`，大整数需转为字符串传输。

#### 总结
`Number.MAX_SAFE_INTEGER = 2^53 - 1` 是由 IEEE 754 双精度浮点数的 53 位有效精度决定的，超过此范围的整数可能会丢失精度或导致运算错误。