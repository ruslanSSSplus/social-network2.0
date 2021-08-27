import React from "react";
import EachUser from "./EachUser";
import Paginator from "../Paginator/Paginator";




let Users = (props) => {

    return <div>
        <Paginator currentPage={props.currentPage}
                    totalItemsCount={props.totalItemsCount}
                    pageSize={props.pageSize}
                    onPageChanged={props.onPageChanged}
                   portionSize={10}/>
       <div>{
            props.users.map(u => <EachUser user={u}
                                           key={u.id}
                                           unfollowThunk={props.unfollowThunk}
                                           followThunk={props.followThunk} />)
        }</div>

    </div>
}

export default Users