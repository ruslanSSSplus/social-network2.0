import React, {useEffect} from "react";
import EachUser from "./EachUser";
import Paginator from "../Paginator/Paginator";
import {UserType} from "../../Types/Types";
import UsersSearchForm from "./UsersSearchForm";
import {FilterType, followThunk, getUsersThunkCreater, unfollowThunk} from "../../redux/friendsReducer";
import {useDispatch, useSelector} from "react-redux";
import {
    getAPageSize,
    getCurrentPage,
    getTotalCount,
    getUsers,
    getUsersFilter
} from "../../redux/friendsSelectors";

type PropsType = {

}

export const Users: React.FC<PropsType> = (props)  => {


    const totalItemsCount = useSelector(getTotalCount)
    const users = useSelector(getUsers)
    const  filter = useSelector(getUsersFilter)
    const pageSize = useSelector(getAPageSize)
    const currentPage = useSelector(getCurrentPage)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getUsersThunkCreater(currentPage, pageSize, filter))
    }, [])

   const onPageChanged = (pageNumber: number) => {
     dispatch(getUsersThunkCreater(pageNumber, pageSize, filter))
    }
   const onFilterChanged = (filter: FilterType) => {
       dispatch(getUsersThunkCreater(1, pageSize, filter))
    }
    const unfollowThunk1 = (userId: number) => {
        dispatch(unfollowThunk(userId))
    }
    const followThunk1 =(id: number, photo: string | null, name: string) => {
        dispatch(followThunk(id, photo, name))
    }

    return <div>
        <UsersSearchForm onFilterChanged={onFilterChanged}/>

        <Paginator currentPage={currentPage}
                    totalItemsCount={totalItemsCount}
                    pageSize={pageSize}
                    onPageChanged={onPageChanged}
                   portionSize={10}/>
       <div>{
           users.map(u => <EachUser user={u}
                                           key={u.id}
                                           unfollowThunk={unfollowThunk1}
                                           followThunk={followThunk1} />)
        }</div>

    </div>
}


