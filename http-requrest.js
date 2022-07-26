
const server = http.createSever((req, res) => {
    res.end('Server is running!')
})

server.listen(8080, () => {
    const {address, port} = server.address()
    console.log(`SErver is listening on: http://${address}:${port}`)
})