export async function registerUser(user) {
    const url = "http://localhost:5071/api/Users/register";
    const response = await fetch(url, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    });
    if (!response.ok) {
        const errorMssg = await response.text();
        throw new Error(errorMssg);
    }
    const data = await response.json();
    return data;
}