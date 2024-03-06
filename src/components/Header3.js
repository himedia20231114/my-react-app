import { Fragment } from "react";
// export default 로 내보낸 컴포넌트는  { } 블락을 쓰지 않고 import 가가능 
// export 로 내보낸 컴포넌트는 { Fragment } 블락 내부에서 import 

// Frgmenet로 감싸면 내부 태그를 그대로 출력 
function Header() {

    return (
        <Fragment>
            <h1> 세번째 Header 입니다. </h1>
            <h2> Fragment로 감싸서 내보냈습니다. </h2>
        
        </Fragment>
    ); 


}

export default Header; 