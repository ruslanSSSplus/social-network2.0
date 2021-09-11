import React, {useEffect} from "react";
import EachUser from "./EachUser";
import Paginator from "../Paginator/Paginator";


import {FilterType, followThunk, getUsersThunkCreater, unfollowThunk} from "../../redux/friendsReducer";
import {useDispatch, useSelector} from "react-redux";
import {
    getAPageSize,
    getCurrentPage,
    getTotalCount,
    getUsers,
    getUsersFilter
} from "../../redux/friendsSelectors";
import {useHistory} from "react-router";
import * as queryString from "querystring";
import {UsersSearchForm} from "./UsersSearchForm";

type PropsType = {}
type QueryType = {term?: string, page?: string, friend?: string}

export const Users: React.FC<PropsType> = (props) => {


    const totalItemsCount = useSelector(getTotalCount)
    const users = useSelector(getUsers)
    const filter = useSelector(getUsersFilter)
    const pageSize = useSelector(getAPageSize)
    const currentPage = useSelector(getCurrentPage)

    const dispatch = useDispatch()
    const history = useHistory()



    useEffect(() => {
        const parsed = queryString.parse(history.location.search.substr(1)) as QueryType
        debugger
        let actualPage = currentPage
        let actualFilter = filter

        if(!!parsed.page) actualPage = Number(parsed.page)
        if(!!parsed.term) actualFilter = {...actualFilter, term: parsed.term as string}

        switch (parsed.friend) {
            case "null":
                actualFilter = {...actualFilter, friend: null }
                break;
            case "true":
                actualFilter = {...actualFilter, friend: true }
                break;
            case 'false':
                actualFilter = {...actualFilter, friend: false }
                break;
        }

        dispatch(getUsersThunkCreater(actualPage, pageSize, actualFilter))
    }, [])

    useEffect( () => {
        const query: QueryType = {}

       if (!!filter.term) query.term = filter.term
        if (filter.friend !== null) query.friend = String(filter.friend)
        if (currentPage !== 1) query.page = String(currentPage)

        history.push({
            pathname: '/users',
            search: queryString.stringify(query)

        })
    }, [filter, currentPage])

    const onPageChanged = (pageNumber: number) => {
        dispatch(getUsersThunkCreater(pageNumber, pageSize, filter))
    }
    const onFilterChanged = (filter: FilterType) => {
        dispatch(getUsersThunkCreater(1, pageSize, filter))
    }
    const unfollowThunk1 = (userId: number) => {
        dispatch(unfollowThunk(userId))
    }
    const followThunk1 = (id: number, photo: string | null, name: string) => {
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
                                     followThunk={followThunk1}/>)
        }</div>

    </div>
}


