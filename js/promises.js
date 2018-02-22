const wait = (timer) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Your promise resolved after " + timer + "miliseceonds");
        }, timer);
    });
};

wait(1000).then(() => console.log('You\'ll see this after 1 second'));
wait(3000).then(() => console.log('You\'ll see this after 3 seconds'));



function getDateOfLastCommit (username) {
    let dates = [];
    fetch
}ff