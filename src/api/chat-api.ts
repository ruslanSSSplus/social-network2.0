

let subscribers = [] as subscriberType[]
let ws: WebSocket | null = null

const closeHandler = () => {
    console.log('closed')
    setTimeout(createChannel, 3000)
}

const onMessageHandler = (e: MessageEvent)=> {
    const newMessage = JSON.parse(e.data)
    subscribers.forEach(s => s(newMessage))
};

function createChannel() {
        ws?.removeEventListener('close', closeHandler)
        ws?.close()
    ws = new WebSocket('wss://social-network.samuraijs.com/handlers/ChatHandler.ashx')
    ws.addEventListener('close', closeHandler)
    ws.addEventListener('message', onMessageHandler)
}



export const chatApi = {
    subscribe(callback: subscriberType ) {
        subscribers.push(callback)
        return () => {
            subscribers = subscribers.filter(s => s !== callback)
        }
    },
    // тоже самое, что и ретурнит субскрайб, просто другой вариант
    unSubscribe(callback: subscriberType ) {
        subscribers = subscribers.filter(s => s !== callback)
    },
    sendMessage(message: string) {
       ws?.send(message)
    },
    start() {
        createChannel()
    },
    stop () {
        subscribers = []
        ws?.removeEventListener('close', closeHandler)
        ws?.removeEventListener('message', onMessageHandler)
        ws?.close()

    }
}



export type ChatMessageType = {
    userId: number,
    userName: string,
    message: string,
    photo: string
}

type subscriberType = (messages: ChatMessageType[]) => void
