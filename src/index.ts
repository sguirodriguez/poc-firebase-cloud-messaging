import firebaseAdmin from "./services/firebase"


async function sendPush(token) {
    const message = {
        token,
        notification: {
            title: 'OI BEBE 👋',
            body: 'TUDO BEM?',
        },
        data: {
            action: 'OPEN_APP',
        },
    }

    const response = await firebaseAdmin.messaging().send(message)
    console.log('Message sent:', response)
}


const start = async () => {
    await sendPush("fMd7V6U8UZKUt6N9L9prOX:APA91bE7h_O9NVccsRmONoLPk_9uRHoIvimQz-XMVQnJ8jTxcz5gfqUHJp8F3MXVsouufOvR7OgOHz-O7lWGXIXo_SIDQmf-rh3XCpVPy8niKlYGDpyNauQ")
}

start()