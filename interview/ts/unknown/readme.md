- any
    万能类型，但不安全 any 就像给变量关闭了类型检查，你可以对他做任何操作，回归JS

- unknown
    未知类型，但不同于any，不能直接使用它，
    必须先做类型检查，他是类型安全的万能类型。

- never  永远不会出现的类型
    函数的返回结果抛出错误的时候
    类型穷举检查


- ts中内置的高级类型 Pick Omit
    Pick<T, K> 从T中提取出K的类型
    Omit<T, K> 从T中排除出K的类型
    后端返回的接口数据比较多，前端只需要使用其中一部分数据，这时候可以使用Pick 来提取接口中的部分属性

    type User = {
  id: number;
  name: string;
  email: string;
  age: number;
  password: string; // 敏感信息
  createdAt: Date;
};

type SimpleUser = Pick<User, 'id' | 'name' | 'email'>;

type SafeUser = Omit<User, 'password'>;
















