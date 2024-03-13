import express from 'express'
import rootRouter from './routes/todoRoutes' 
const app = express()

app.use(express.json())
app.use('/newuser', rootRouter)

app.listen(3000, () => {
    console.log('running on port 3000!')
})