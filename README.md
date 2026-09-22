# Red Fox Steam Clean - Marketing Website

Professional steam cleaning services website for Red Fox Steam Clean, serving the Greater Toronto Area.

## Live Site

**[https://redfoxsteamclean.com](https://redfoxsteamclean.com)**

## Services Offered

- Carpet Cleaning
- Rug Cleaning
- Upholstery Cleaning
- Tile & Grout Cleaning

## Contact Information

- **Phone:** (416) 460-5911
- **Email:** info@redfoxsteamclean.com

## Setup

### Environment Variables

The quote form uses [Web3Forms](https://web3forms.com/) (free tier) to send quote requests to email. To enable the form:

1. Go to [web3forms.com](https://web3forms.com/) and create a free account
2. Get your Access Key from the dashboard
3. Add the following environment variable to your Render service (or `.env.local` for local development):

```
NEXT_PUBLIC_WEB3FORMS_KEY=your_access_key_here
```

**Note:** Web3Forms will send quote submissions to `info@redfoxsteamclean.com` as configured in the form.

### Render Deployment

This project includes a `render.yaml` for deploying on [Render](https://render.com).

To add the environment variable on Render:
1. Go to your service dashboard
2. Navigate to **Environment** tab
3. Add `NEXT_PUBLIC_WEB3FORMS_KEY` with your Web3Forms access key
4. Save and redeploy

### Local Development

```bash
# Install dependencies
npm install

# Create .env.local file with your Web3Forms key
echo "NEXT_PUBLIC_WEB3FORMS_KEY=your_key_here" > .env.local

# Run development server
npm run dev
```

## Tech Stack

- Next.js 14
- React 18
- Tailwind CSS
- Radix UI Components
- Web3Forms (contact form)
