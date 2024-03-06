function App05() {

    //undefined 자체를 리턴 하면 리엑트 오류가 발생됨 
    // undefined : 변수에 어떤 자료형을 넣을 지 알수 없는 경우 
    const name = undefined; 

    return name || "값이 undefinded 입니다. "; 
}
export default App05; 