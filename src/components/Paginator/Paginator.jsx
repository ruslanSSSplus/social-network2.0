import React, {useState} from "react";
import classes from "./Paginator.module.css";
import cn from 'classnames'




let Paginator = ({currentPage, totalItemsCount, pageSize, onPageChanged, portionSize}) => {
    let pagesCount = Math.ceil(totalItemsCount / pageSize)
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    let portionCount = Math.ceil(pagesCount / portionSize)
    let [portionNumber, setPortionNumber] = useState(1)
    let leftPortionPageNumber = (portionNumber -1) * portionSize + 1
    let rightPortionPageNumber = portionNumber * portionSize


    return <div className={classes.paginator}>
        {portionNumber >1 &&
        <button onClick={()=> { setPortionNumber(portionNumber-1)}}> back </button>}
            {pages
                .filter(p => p >= leftPortionPageNumber && p<=rightPortionPageNumber)
                .map((p) => {
                return <span className={cn ({
                    [classes.selectedPage]: currentPage === p
                }, classes.pageNumber)}
                             key={p}
                             onClick={(e) => {
                                 onPageChanged(p)
                }}> {p} </span>
            })}
        {portionCount> portionNumber &&
        <button onClick={()=> {setPortionNumber(portionNumber + 1)}}> next </button>}
        <button onClick={()=> {setPortionNumber(portionNumber=portionCount)}}> last </button>
    </div>
}

export default Paginator