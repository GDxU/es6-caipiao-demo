{
    let s = "bbb_bb_b";
    let a1=/b+/g;
    let a2 = /b+/y;

    console.log("one",a1.exec(s),a2.exec(s));
    console.log("two",a1.exec(s),a2.exec(s));
}

{
    // unicode 字符
    // 作为2个字符
    console.log('u-1',/^\uD83D/.test('\uD83D\uDC2A'));
    // 作为一个字符匹配
    console.log('u-2',/^\uD83D/u.test('\uD83D\uDC2A'));
}