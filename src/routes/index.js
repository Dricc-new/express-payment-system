import { Router } from "express"
import { createSession } from "../controllers/payment.controller.js"
const router = Router()

router.get('/', (req, res) => {
    res.render('partials/index')
})

router.post('/create-checkout-session', createSession)
router.get('/create-checkout-session/success', (req, res) => {
    res.render('partials/success')
})
router.get('/create-checkout-session/cancel', (req, res) => {
    res.render('partials/cancel')
})

export default router
