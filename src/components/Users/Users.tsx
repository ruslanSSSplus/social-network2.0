import React from "react";
import EachUser from "./EachUser";
import Paginator from "../Paginator/Paginator";
import {UserType} from "../../Types/Types";


type PropsType = {
    totalItemsCount: number
    pageSize: number
    currentPage: number
    onPageChanged: (pageNumber: number) => void
    users: Array<UserType>
    unfollowThunk: (userId: number) => void
    followThunk: (id: number, photo: string | null, name: string) => void
}

let Users: React.FC<PropsType> = (props)  => {

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