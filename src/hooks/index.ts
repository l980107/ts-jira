import { useEffect, useState } from 'react';
import { SearchProps } from '../pages/project-list/search';
/**
 * 因为0也是有效值，所以将value等于0给为false
 */
const isValue = (value: any) => (value === 0 ? false : !value);

/**
 * 将json中为空值的字段删除
 */
export const cleanObject = (obj: Object) => {
    //复制obj
    const res = { ...obj };
    //遍历res
    Object.keys(res).forEach(index => {
        //如果值为空就删除字段
        //@ts-ignore
        const value = res[index];
        if (isValue(value)) {
            //@ts-ignore
            delete res[index];
        }
    });
    return res;
};

/**
 * didMount
 * @param {Method} callback
 */
export const useMount = (callback: () => void) => {
    useEffect(() => {
        callback();
    }, []);
};

/**
 * debounce
 */
export const useDebounce = (value: SearchProps['param'], delay?: number) => {
    //内部状态截流后的值
    const [debouncevalue, setDebouncevalue] = useState(value);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setDebouncevalue(value);
        }, delay);
        return () => clearTimeout(timeout);
    }, [value, delay]);

    return debouncevalue;
};
