export async function LoginUser(loginInfo) {
    const url = "http://localhost:5223/api/Users/login";
    const response = await fetch(url, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(loginInfo)
    });
    if (!response.ok) {
        const errorMssg = await response.text();
        throw new Error(errorMssg);
    }
    const data = await response.json();
    return data;
}

export async function RegisterUser(RegisterInfo) {
    const url = "http://localhost:5223/api/Users/register";
    const response = await fetch(url, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(RegisterInfo)
    });
    if (!response.ok) {
        throw new Error("ERROR: Please try again later")
    }
    const data = await response.json();
    return data;
}