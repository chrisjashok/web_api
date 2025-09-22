const app = require('./App')
const port = 3000

app.listen(port,()=>{
    console.log(`server listening at http://localhost:${port}`)
})