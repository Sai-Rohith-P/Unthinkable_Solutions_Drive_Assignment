// client/src/utils/api.js
const SERVER_URL = process.env.REACT_APP_SERVER_URL;
// || "http://localhost:5000"

export async function uploadFile(file) {
    const formData = new FormData();
    formData.append("file", file);

    const res = await fetch(`${SERVER_URL}/upload`, {
        method: "POST",
        body: formData,
    });

    // handle JSON or error
    if (!res.ok) {
        const err = await res.json().catch(() => ({}));
        return { error: err.error || "Server error" };
    }
    const data = await res.json();
    return data;
}
