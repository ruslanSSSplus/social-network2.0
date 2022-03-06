import React, {ChangeEvent, useEffect, useState} from 'react';


type PropsType = {
    status: string
    updateStatusThunk: (status: string) => void
}



type all = PropsType


const ProfileStatusWithHooks : React.FC<all> =(props)=>{


    let [editMode1, setEditMode1] = useState(false)
    let [status, setStatus] = useState(props.status)

    useEffect( ()=>{
        setStatus(props.status)
    }, [props.status])


    const activateEditMode = ()=>{
        setEditMode1(true)
    }

    const deactivateEditMode = ()=>{
            setEditMode1(false)
       props.updateStatusThunk(status)

    }

   const onStatusChange = (e: ChangeEvent<HTMLInputElement>) =>
    {
        setStatus(e.currentTarget.value)
    }

        return (
            <div>
                { !editMode1 &&
                <div>
                    <span onDoubleClick={activateEditMode}>{props.status || 'no status'}</span>
                </div>
                }
                {editMode1 &&
                <div>
                    <input onChange={onStatusChange} onBlur={deactivateEditMode} autoFocus={true} value={status}/>
                </div>
                }
            </div>

        )

}
export default ProfileStatusWithHooks;