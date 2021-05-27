import { useMount, useArray } from './hooks';
export const Demo = () => {
    const persons: { name: string; age: number }[] = [
        { name: 'jack', age: 25 },
        { name: 'ma', age: 27 },
    ];
    const { value, clear, removeIndex, add } = useArray(persons);
    useMount(() => {
        // console.log(add({ name: 'value' }));
        // console.log(value.noExit());
        // console.log(removeIndex('1234'));
    });
    return (
        <div>
            {/* 点击后增加john */}
            <button onClick={() => add({ name: 'john', age: 22 })}>add john</button>
            {/* 点击删除第一项 */}
            <button onClick={() => removeIndex(0)}>remove 0</button>
            {/* 点击清空列表 */}
            <button style={{ marginBottom: '50px' }} onClick={() => clear()}>
                clear
            </button>
            {value.map((person: { name: string; age: number }, index: number) => (
                <div style={{ marginBottom: '30px' }} key={index}>
                    <span style={{ color: 'red' }}>{index}</span>
                    <span>{person.name}</span>
                    <span>{person.age}</span>
                </div>
            ))}
        </div>
    );
};
