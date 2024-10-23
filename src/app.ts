import express, { Application } from 'express'
import cors from 'cors'
import globalErrorHandler from './app/middleware/globalErrorHandler'
import notFound from './app/middleware/notFoundRoute'
import { routes } from './app/routes'
const app: Application = express()

// middleware
app.use(
  cors({
    origin: [
      'http://localhost:5173',
      'https://sahabuddin-ahmed-protfolio.vercel.app',
      'https://sahabuddin-ahmed-protfolio-ten.vercel.app',
    ],
    credentials: true,
  }),
)
app.use(express.json())

// application routes
app.use('/api/v1', routes)

app.get('/', (req, res) => {
  res.send('Server is running')
})

// customize error
app.use(globalErrorHandler)
app.use(notFound)

export default app
