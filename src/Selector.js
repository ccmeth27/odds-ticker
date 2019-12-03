import React from 'react'

function Selector (props){

        return(
            <div className="dropdown">
                <button className="dropbtn" >Change Sport</button>
                    <div className="dropdown-content" onClick={(e) => {props.handleClick(e)}}>
                        <a value="ALL" >ALL</a>
                        <a value="NFL">NFL</a>
                        <a value="NCAAF">NCAAF</a>
                        <a value="NCAAB">NCAAB</a>
                        <a value="NHL">NHL</a>
                        <a value="NBA">NBA</a>
                    </div>
            </div>
    )
}
export default Selector;