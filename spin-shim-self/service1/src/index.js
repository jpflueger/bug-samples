export async function handleRequest(request) {
    const response = await fetch("/service2");
    const text = await response.text();
    return {
        status: 200,
        headers: { "content-type": "text/plain" },
        body: `Service2: ${text}`,
    }
}
