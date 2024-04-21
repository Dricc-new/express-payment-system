# Express Payment System

Welcome to my project, this is an example of how to accept Express payments with [Stripe](https://stripe.com). It's a super small project, it's just to understand how easy it is to implement Stripe on your backend.

## Notes

If you want to run it locally, follow the steps below.

1. Once the repository is cloned, run the command inside the directory
```console
npm run install
```

2. Make a copy of the ***.example.env*** file and rename it to ***.env***.

2. Change the contents of `STRIPE_PRIVATE_KEY` to the private key provided to you in your Stripe account. 
```
STRIPE_PRIVATE_KEY = 'la7s3d1lkj...'
```
4. Run the following command in your console

```console
npm run dev
```

5. Copy and paste the url into your browser and that's it.