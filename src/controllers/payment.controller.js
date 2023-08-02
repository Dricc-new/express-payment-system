import Stripe from 'stripe'
import { STRIPE_PRIVATE_KEY } from '../config.js'

const stripe = new Stripe(STRIPE_PRIVATE_KEY)
export const createSession = async (req, res) => {
    const session = await stripe.checkout.sessions.create({
        line_items: [
            {
                price_data: {
                    product_data: {
                        name: 'Product1',
                        description: 'Lapices, cartabones, libretas y mas...'
                    },
                    currency: 'usd',
                    unit_amount: '3052'
                },
                quantity: 1
            }, {
                price_data: {
                    product_data: {
                        name: 'Product2',
                        description: 'Lapices, Chinchetas, Presillas y Gomas con forma de piña'
                    },
                    currency: 'usd',
                    unit_amount: '4530'
                },
                quantity: 1
            }, {
                price_data: {
                    product_data: {
                        name: 'Product3',
                        description: 'Lapices y libretas'
                    },
                    currency: 'usd',
                    unit_amount: '3835'
                },
                quantity: 1
            },
        ],
        mode: 'payment',
        success_url: 'http://localhost:4000/create-checkout-session/success',
        cancel_url: 'http://localhost:4000/create-checkout-session/cancel',
    })
    return res.send('<!DOCTYPE html><html><head><meta http-equiv="refresh" content="0; url='+session.url+'" /></head><body><p>You will be redirected to stripe.com soon!</p></body></html>')
    // return res.json(session)
}