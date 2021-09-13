

const subscribers = {
    'messages-received': [] as MessagesReceivedSubscriberType[],
    'status-changed': [] as StatusChangedSubscriberType[]
}

let ws: WebSocket | null = null

type EventsNamesType = 'messages-received' | 'status-changed'

const closeHandler = () => {
    notifySubsAboutStatus('pending')
    setTimeout(createChannel, 3000)
}

const onMessageHandler = (e: MessageEvent)=> {
    const newMessage = JSON.parse(e.data)
    subscribers['messages-received'].forEach(s => s(newMessage))
};
const openHandler = ()=> {
    notifySubsAboutStatus('ready')
};
const errorHandler = ()=> {
    notifySubsAboutStatus('error')
    console.error('REFRESH PAGE')
};

const cleanUp = () => {
    ws?.removeEventListener('close', closeHandler)
    ws?.removeEventListener('message', onMessageHandler)
    ws?.removeEventListener('open', openHandler)
    ws?.removeEventListener('error', errorHandler)
}

const notifySubsAboutStatus = (status: StatusType) => {
    subscribers["status-changed"].forEach(s => s(status))
}

function createChannel() {
    cleanUp()
        ws?.close()
    ws = new WebSocket('wss://social-network.samuraijs.com/handlers/ChatHandler.ashx')
    notifySubsAboutStatus('pending')
    ws.addEventListener('close', closeHandler)
    ws.addEventListener('message', onMessageHandler)
    ws.addEventListener('open', openHandler)
    ws.addEventListener('error', errorHandler)
}



export const chatApi = {
    subscribe(eventName: EventsNamesType, callback: MessagesReceivedSubscriberType |  StatusChangedSubscriberType) {
        //@ts-ignore
        subscribers[eventName].push(callback)
        return () => {
            //@ts-ignore
            subscribers[eventName] = subscribers[eventName].filter(s => s !== callback)
        }
    },
    // тоже самое, что и ретурнит субскрайб, просто другой вариант
    unSubscribe(eventName: EventsNamesType, callback: MessagesReceivedSubscriberType | StatusChangedSubscriberType) {
        //@ts-ignore
        subscribers[eventName] = subscribers[eventName].filter(s => s !== callback)
    },
    sendMessage(message: string) {
       ws?.send(message)
    },
    start() {
        createChannel()
    },
    stop () {
        subscribers['messages-received'] = []
        subscribers['status-changed'] = []
        cleanUp()
        ws?.close()

    }
}



export type ChatMessageAPIType = {
    userId: number,
    userName: string,
    message: string,
    photo: string
}

export type StatusType = 'pending' | 'ready' | 'error'
type MessagesReceivedSubscriberType = (messages: ChatMessageAPIType[]) => void
type StatusChangedSubscriberType = (status: StatusType) => void