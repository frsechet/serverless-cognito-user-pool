A simple to user serverless project to manage your cognito user pools with the serverless framework and https://www.npmjs.com/package/cognito-user-pool.

Requires tested with serverless v1.4+, but should work with versions starting at 1.0.

# Instructions

```
git clone https://github.com/frsechet/serverless-cognito-user-pool.git
cd serverless-cognito-user-pool
npm install
```

Setup your environment variables using the `.env.example.yml` template and save it under `.env-STAGE.yml`, then deploy with:

```
sls deploy -s STAGE -r REGION
```