export function fetchList() {

    return fetch('http://localhost:3000/lists')
        .then(response => response.json())

    /*
            return fetch('http://localhost:3000/lists',{
                method: 'POST',
                body: JSON.stringify({id: '1', title: 'item9'}),
                headers: {
                    'content-type': 'application/json',
                    'authentication': 'xxxxxrerere'
                }
        
            })
                .then(response => response.json())   */

}


export function fetchPromise() {

    return new Promise(async (resolve, reject) => {

        try {
            let items = await fetch('http://localhost:3000/lists');
            let data = items.json();
            resolve(data);
        } catch (error) {
            reject(error);

        }
    })

}