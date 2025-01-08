/** Number
    String
    Boolean
    undefined
    null
    Symbol
    Object(Function, Array, object) : 객체 타입
    */

    //Number
    const age = 20;
    const pi = 3.141592;
    console.log(typeof(age));
    console.log(typeof(pi));
    
    //String
    const myTest = "코딩테스트";
    console.log(myTest);
    //Escape Character
    const Najinsu = "나진수 \n \t나진수천재";
    console.log(Najinsu);

    //Template Literal 에서 백틱(`)
    const groupName = "아이브";
    let idolName = "장원영";
    console.log(groupName + " 나진수");
    // 템플릿 리터럴 사용방법 ${변수명}
    console.log(`우리의 주인공은 ${groupName} ${idolName} 입니다.`);
    