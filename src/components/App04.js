function App04 () {

    const name = '귤'; 
    // && 연산자를 사용함, 쇼트 서킷을 발생시켜서 3항 연산자를 대신해서 사용

    return (
        <div>

            { name === '귤' && (<h1>귤 입니다. </h1>)}

        </div>
    ); 
}
export default App04; 