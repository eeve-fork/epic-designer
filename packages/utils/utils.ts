import { NodeItem } from "../types/kDesigner";
import { defineAsyncComponent, AsyncComponentLoader, toRaw } from "vue";
import KAsyncLoading from "../components/KAsyncLoading/KAsyncLoading.vue";
/**
 * 生成一个用不重复的ID
 * @param randomLength 随机id长度
 */
export function getUUID(randomLength = 10): string {
  return Number(
    Math.random().toString().substring(3, randomLength) + Date.now()
  ).toString(36);
}

/**
将字符串的首字母大写
@param {string} 待处理字符串
@returns {string} 首字母大写后的字符串
*/
export function capitalizeFirstLetter(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

/**
 * 深拷贝数据
 * @param obj
 * @returns
 */
export function deepClone(
  obj: Record<string, any>,
  cache = new WeakMap()
): any {
  // 如果不是对象或数组，则直接返回
  if (typeof obj !== "object" || obj === null) {
    return obj;
  }

  // 如果已经处理过这个对象，则直接返回缓存中的对象
  if (cache.has(obj)) {
    return cache.get(obj);
  }

  // 处理数组
  if (Array.isArray(obj)) {
    const clonedArray = obj.map((item: any) => deepClone(item, cache));
    cache.set(obj, clonedArray);
    return clonedArray;
  }

  // 处理对象
  const clonedObj = {} as any;
  cache.set(obj, clonedObj);
  Object.keys(obj).forEach((key) => {
    clonedObj[key] = deepClone(obj[key], cache);
  });
  return clonedObj;
}

/**
 * 深度比较两个对象是否相等
 * @param obj1
 * @param obj2
 * @returns
 */
export function deepEqual(
  obj1: Record<string, any>,
  obj2: Record<string, any>,
  visitedObjs = new WeakMap()
): boolean {
  const normalize = (obj: any): any => {
    // 如果是数组类型，则递归调用 normalize 函数对每个元素进行标准化处理
    if (Array.isArray(obj)) {
      return obj.map(normalize);
    }
    // 如果是对象类型，则将所有属性名按照字母顺序排序，并递归调用 normalize 函数对每个属性值进行标准化处理
    else if (typeof obj === "object" && obj !== null) {
      // 在访问过该对象时，直接返回一个占位符
      if (visitedObjs.has(obj)) {
        return "[Circular]";
      }
      visitedObjs.set(obj, true);

      const keys = Object.keys(obj).sort();
      const normalizedObj: Record<string, any> = {};
      keys.forEach((key) => {
        normalizedObj[key] = normalize(obj[key]);
      });

      // 递归调用 normalize 函数时，需要将 visitedObjs 参数传递下去
      visitedObjs.delete(obj);
      return normalizedObj;
    }
    // 其它类型直接返回即可
    else {
      return obj;
    }
  };

  // 对两个对象进行标准化处理后，再进行比较
  return JSON.stringify(normalize(obj1)) === JSON.stringify(normalize(obj2));
}

/**
 * * 异步加载组件
 * @param loader
 * @returns
 */
export const loadAsyncComponent = (loader: AsyncComponentLoader<any>) =>
  defineAsyncComponent({
    loader,
    loadingComponent: KAsyncLoading,
    delay: 80,
  });

/**
 * 通过id查询schema
 * @param schemas
 * @param id
 * @returns
 */
export function findSchemaById(schemas: NodeItem[], id: string) {
  const stack: NodeItem[] = [{ type: "root", children: schemas }];

  while (stack.length > 0) {
    const item = stack.pop();
    const children = item?.children;
    // 没有子节点,跳过该循环
    if (!children) {
      continue;
    }

    for (let i = 0; i < children.length; i++) {
      if (children[i].id === id) {
        return {
          list: item.children as NodeItem[],
          schema: children[i],
          index: i,
        };
      }

      stack.push(...children);
    }
  }

  throw `没有查询到id为${id}的节点`;
}

/**
 * 通过id获取节点路径
 * @param schemas
 * @param id
 */
export function getMatchedById(schemas: NodeItem[], id: string) {
  const matched: NodeItem[] = [];
  let found = false;

  function getNodePath(node: NodeItem) {
    matched.push(node);
    if (node.id === id) {
      found = true;
    }
    if (!found && node.children && node.children.length > 0) {
      for (let i = 0; i < node.children.length; i++) {
        getNodePath(node.children[i]);
        if (found) break;
      }
    }
    if (!found) {
      matched.pop();
    }
  }

  schemas.forEach(getNodePath);

  if (!found) {
    console.error(`没有查询到id为${id}的节点`);
  }

  return matched;
}
