{
    console.log('a',`\u0061`);
}

{
    console.log('1'.padStart(2,'0'));
}

{
    let user = {
        name:'list',
        info:'hello world'
    };
    abc`i am ${user.name},${user.info}`;
    function abc(s,v1,v2) {
        console.log(s,v1,v2);
    }
}