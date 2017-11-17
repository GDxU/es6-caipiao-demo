function test() {
    // 即使 k 是 const 声明，但是因为 k 是对象，对象是引用类型，引用类型其实是内存的一个指针指向的内存，
    // const 是对是内存的一个指针不变，但对象本身可以改变
    const k = {
        a: 1
    };
    k.b = 3;
    console.log(k);
}

test();