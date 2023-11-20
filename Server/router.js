const express = require("express")

// Routes importeres her

//User
const userRegisterRoute = require('./routes/userRoutes/createUserRoute')
// const userLoginRoute = require('./routes/user/authUser')
// const userIsAuth = require('./routes/user/isAuth') //to authenticate, that user is logged in, when trying to go to page
// const updateUser = require('./routes/user/updateUser')
const readUserIDRoute = require('./routes/userRoutes/readUserByIDRoute')
const readUserRoute = require('./routes/userRoutes/readUsersRoute')
const deleteUserRoute = require("./routes/userRoutes/deleteUserRoute")


//Tickets
const createTicketRoute = require('./routes/ticketRoutes/createTicketRoute')
const readTicketsRoute = require('./routes/ticketRoutes/readTicketsRoute')
const readTicketByIDRoute = require('./routes/ticketRoutes/readTicketByIDRoute')
const deleteTicketsRoute = require('./routes/ticketRoutes/deleteTicketByIDRoute')
const updateTicketRoute = require('./routes/ticketRoutes/updateTicketRoute')

// Businesses
const createBusinessRoute = require('./routes/businessRoutes/createBusinessRoute')
const readBusinessRoute = require('./routes/businessRoutes/readBusinessRoute')
const readBusinessByIDRoute = require('./routes/businessRoutes/readBusinessByIDRoute')
const deleteBusinessesRoute = require('./routes/businessRoutes/deleteBusinessRoute')
const updateBusinessRoute = require('./routes/businessRoutes/updateBusinessRoute')

const router = express.Router()

// Routes defineres her

// const tokenAuth = require('./middleware/tokenAuth')

//User routes
router.post('/register', userRegisterRoute)
// router.post('/login', userLoginRoute)
// router.put('/updateUser/:id', updateUser)
router.get('/user/:id', readUserIDRoute)
router.get('/users', readUserRoute)
router.delete('/user/:id', deleteUserRoute)


//Ticket routes
// router.post('/todos/get', tokenAuth, readTodosRoute)
router.post('/tickets/create', createTicketRoute)
router.get('/tickets', readTicketsRoute)
router.get('/tickets/:id', readTicketByIDRoute)
router.put('/tickets/:id', updateTicketRoute)
router.delete('/tickets/:id', deleteTicketsRoute)

//Business Routes
router.post('/business/create', createBusinessRoute)
router.get('/business', readBusinessRoute)
router.get('/business/:id', readBusinessByIDRoute)
router.put('/business/:id', updateBusinessRoute)
router.delete('/business/:id', deleteBusinessesRoute)




module.exports = router