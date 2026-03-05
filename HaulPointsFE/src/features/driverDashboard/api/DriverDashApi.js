export async function GetDriverBalance(userId) {
    const url = `http://localhost:5223/api/Points/driver/${userId}/balance`;
    const response = await fetch(url, {
        method: "GET",
        headers: {
            'Content-Type': 'application/json'
        }
    });
    if (!response.ok) {
        const errorMssg = await response.text();
        throw new Error(errorMssg);
    }
    const data = await response.json();
    return data;
}