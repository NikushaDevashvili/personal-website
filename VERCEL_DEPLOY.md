# Deploying to Vercel

This guide will help you deploy your Next.js MDX blog to Vercel.

## Prerequisites

1. A GitHub account (or GitLab/Bitbucket)
2. A Vercel account (sign up at https://vercel.com)

## Deployment Steps

### Option 1: Deploy via Vercel Dashboard (Recommended)

1. **Push your code to GitHub**
   ```bash
   git init  # if not already initialized
   git add .
   git commit -m "Initial commit"
   git remote add origin <your-github-repo-url>
   git push -u origin main
   ```

2. **Import to Vercel**
   - Go to https://vercel.com/new
   - Click "Import Git Repository"
   - Select your repository
   - Vercel will auto-detect Next.js settings
   - Click "Deploy"

3. **That's it!** Vercel will:
   - Build your project
   - Deploy it
   - Give you a live URL

### Option 2: Deploy via Vercel CLI

1. **Install Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **Login to Vercel**
   ```bash
   vercel login
   ```

3. **Deploy**
   ```bash
   vercel
   ```
   
   Follow the prompts:
   - Link to existing project? No (first time)
   - Project name? (press enter for default)
   - Directory? (press enter for `./`)
   - Override settings? No

4. **For production deployment**
   ```bash
   vercel --prod
   ```

## Important Notes

- ✅ Your `content/posts/` directory will be included in the build
- ✅ All MDX files will be statically generated at build time
- ✅ No environment variables needed for basic setup
- ✅ Vercel automatically handles Next.js optimizations

## Custom Domain (Optional)

1. Go to your project settings on Vercel
2. Click "Domains"
3. Add your custom domain
4. Follow DNS configuration instructions

## Automatic Deployments

Once connected to GitHub, Vercel will automatically:
- Deploy on every push to `main` branch
- Create preview deployments for pull requests
- Run builds automatically

## Troubleshooting

If you encounter issues:

1. **Build fails**: Check the build logs in Vercel dashboard
2. **Posts not showing**: Ensure `content/posts/` is committed to git
3. **Type errors**: Run `npm run build` locally first to catch errors

## Next Steps

After deployment:
- Customize your domain
- Set up analytics (optional)
- Configure environment variables if needed
- Set up preview deployments for branches

