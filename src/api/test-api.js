

export const testAPI = {
    sendMessage(data) {
        return fetch(`https://testback123321.herokuapp.com/AddNewMessage`, {
            method: 'POST', headers: {
                'Content-type': 'application/json',
            }, body: JSON.stringify(data)
        }).then(response => response.json())
    },
    getOldMessages(id, oldMessages) {
        return fetch(`https://testback123321.herokuapp.com/LoadMessages/?actionName=MessagesLoad&messageId=${id}&oldMessage=${oldMessages}`, {
            method: 'GET',
        }).then(response => response.json())
    },
    getNewMessages(id, oldMessages) {
        return fetch(`https://testback123321.herokuapp.com/LoadMessages/?actionName=MessagesLoad&messageId=${id}&oldMessage=${oldMessages}`, {
            method: 'GET',
        }).then(response => response.json())
    },
}