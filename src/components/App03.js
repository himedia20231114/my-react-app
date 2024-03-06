function App03 () {
    // JavaScript 블락 

    const name = '사과'; 
    // JSX 블락에서는 삼항 연산자, && , || 
    return (
        <div>
            <hr />
            { name === '바나나' ? (<h1> 바나나 입니다. </h1>) : null }

        </div>

    );
}

export default App03; 