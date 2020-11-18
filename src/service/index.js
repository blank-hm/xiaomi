

let _host = "";
if (window && window.location && (window.location.hostname == "localhost" || window.location.hostname == "127.0.0.1")) {
    _host = window && window.location && window.location.hostname ? `https://${window.location.hostname}:5001/api/` : `https://localhost:5001/api/`;
}
else {
    _host = window && window.location && window.location.hostname ? `${window.location.protocol}//${window.location.hostname}:${window.location.port}/api/` : `http://localhost:27000/api/`;
}

export const host = _host;


export const API = {

    postData(uri, data) {
        let body = JSON.stringify(data);

        const opts = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            timeout: 3000,
            body: body
        };

        if (!host) {
            throw (`未设置服务器地址`);
        }
        //${host}
        // console.dir(host);
        return fetch(`${host}${uri}`, opts).then(res => {
            return res.json();
        })
    },
    async getData(uri, data) {
        let body= JSON.stringify(data)=="{}"?1:data;
        const opts = {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            timeout: 3000
        };

        if (!host) {
            throw (`未设置服务器地址`);
        }
        //${host} 
        let result = await fetch(`${host}${uri}${body==1?'':body.id}`, opts);
        return await result.json()
    },
    putData(uri, data) {
        let body = JSON.stringify(data);

        const opts = {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            timeout: 3000,
            body: body
        };

        if (!host) {
            throw (`未设置服务器地址`);
        }
        //${host}
        // console.dir(host);
        return fetch(`${host}${uri}/${data.id}`, opts).then(res => {
            return res.json();
        })
    },
    deleteData(uri, data) {

        const opts = {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
            timeout: 3000
        };

        if (!host) {
            throw (`未设置服务器地址`);
        }
        //${host}
        // console.dir(host);
        return fetch(`${host}${uri}/${data.id}`, opts).then(res => {
            return res.json();
        })
    },
    




}
