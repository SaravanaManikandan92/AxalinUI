This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
```

## ENV Configuration

This project uses two system environment variables (via `process.env.<ENV_VARS>`) such as,

1.  `CMS_API_KEY` which is used to get blog and related resources from `mw-cms-api.hefanex.com`. Blogs can be written from [here](https://mw-cms.hefanex.com).
2.  `CRM_API_KEY` which is used to submit contact forms to `mw-crm-api.hefanex.com`. Contact submission can be seen from [here](https://mw-crm.hefanex.com).

(IMPORTANT: These are not an application variables)
