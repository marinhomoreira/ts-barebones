// we need this to prevent hitting the rate limits from API
export function iterateWithDelay(collection, callback, delay) {
    if (collection?.length > 0) {
        let index = 0;

        // process the first element immediately and the following only after the delay has passed.
        callback(collection[index]);

        // Interval to control frequency of requests
        let interval = setInterval(function() {
            index++;

            if (index >= collection.length) {
                clearInterval(interval);
                console.log("Processed "+ index + " items");
            } else {
                callback(collection[index]);
            }
        }, delay);
    } else {
        console.log("Empty list");
    }
}
