
function app() {
    return {
        name: "Vikas Ukani",
        data: {},
        async init() {
            this.data = await this.getData()
        },
        async getData() {
            const req = await fetch(`https://profile-bupa.onrender.com/profile`);
            return await req.json();
        },

    };

}

// setTimeout(() => {

// }, 1000);