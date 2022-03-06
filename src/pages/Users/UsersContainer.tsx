import React from "react";
import {useSelector} from "react-redux";
import Preloader from "../../components/common/Preloder/Preloader";
import {getisFetching} from "../../redux/friendsSelectors";
import {Users} from "./Users";


type UsersPagePropsType = {
}

export const UsersPage: React.FC<UsersPagePropsType> = (props) => {

    const isFetching = useSelector(getisFetching)

    return <>

        {isFetching ? <Preloader/> : null}
        <Users />


    </>
}






