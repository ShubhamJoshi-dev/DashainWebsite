# 🚀 Deployment Guide - Vercel Browser Deployment

This guide will help you deploy your Dashain Festival website to Vercel using the browser interface (no CLI required).

## 📋 Prerequisites

- A GitHub, GitLab, or Bitbucket account
- Your code pushed to a Git repository
- A [Vercel account](https://vercel.com) (free)

## 🌐 Step-by-Step Deployment

### 1. Prepare Your Repository

1. **Push your code to GitHub** (recommended):
   ```bash
   git add .
   git commit -m "Ready for deployment"
   git push origin main
   ```

2. **Make sure your repository is public** or you have the Vercel GitHub app installed

### 2. Deploy via Vercel Dashboard

1. **Go to Vercel**
   - Visit [vercel.com](https://vercel.com)
   - Sign in with your Git provider (GitHub, GitLab, or Bitbucket)

2. **Create New Project**
   - Click "New Project" or "Add New Project"
   - Click "Import" next to your repository

3. **Configure Project**
   - **Project Name**: `dashain-festival-website` (or your preferred name)
   - **Framework Preset**: Vercel will auto-detect "Next.js"
   - **Root Directory**: Leave as `./` (default)
   - **Build and Output Settings**: Leave as default
     - Build Command: `npm run build`
     - Output Directory: `.next`
     - Install Command: `npm install`

4. **Environment Variables** (if needed)
   - Add any environment variables in the "Environment Variables" section
   - For this project, no environment variables are required by default

5. **Deploy**
   - Click "Deploy"
   - Wait for the deployment to complete (usually 1-2 minutes)

### 3. Deployment Success! 🎉

Once deployed, you'll get:
- **Production URL**: `https://your-project-name.vercel.app`
- **Preview URLs**: For every push to branches
- **Automatic deployments**: Every push to main branch triggers a new deployment

## 🔧 Post-Deployment Configuration

### Custom Domain (Optional)

1. In your Vercel dashboard, go to your project
2. Navigate to "Settings" → "Domains"
3. Add your custom domain
4. Follow the DNS configuration instructions

### Performance Monitoring

Vercel provides built-in analytics:
- Go to your project dashboard
- Check the "Analytics" tab for performance metrics
- Monitor Core Web Vitals

## 🚀 Continuous Deployment

Your website now has automatic deployments:

- **Production Deployments**: Every push to `main` branch
- **Preview Deployments**: Every push to feature branches
- **Instant Rollbacks**: Easy rollback to previous versions

## 📱 Testing Your Deployment

1. **Visit your live site**: Click the production URL
2. **Test on mobile**: Use responsive design tools
3. **Check performance**: Use Chrome DevTools Lighthouse
4. **Verify SEO**: Check meta tags and structured data

## 🛠️ Troubleshooting

### Common Issues:

1. **Build Failures**
   - Check the build logs in Vercel dashboard
   - Ensure all dependencies are in `package.json`
   - Verify TypeScript types are correct

2. **Import Errors**
   - Check that all import paths are correct
   - Ensure path mapping in `tsconfig.json` is set up properly

3. **Performance Issues**
   - Optimize images in the `public/images/` folder
   - Check bundle analyzer: `npm run analyze`

### Getting Help:

- **Vercel Documentation**: [vercel.com/docs](https://vercel.com/docs)
- **Next.js Documentation**: [nextjs.org/docs](https://nextjs.org/docs)
- **Deployment Logs**: Check in your Vercel project dashboard

## 🎯 Production Checklist

Before deploying, ensure:

- ✅ All pages load without errors
- ✅ Images are optimized and load quickly
- ✅ SEO meta tags are properly set
- ✅ Mobile responsiveness is tested
- ✅ No console errors in browser
- ✅ TypeScript compilation succeeds
- ✅ Lighthouse scores are good (>90)

## 🌟 Next Steps

After deployment:

1. **Share your website**: Get feedback from family and friends
2. **Monitor performance**: Check Vercel analytics regularly
3. **Add features**: Consider adding a contact form or guest book
4. **SEO optimization**: Submit to search engines
5. **Social sharing**: Create social media posts about your site

---

**Congratulations! Your Dashain Festival website is now live! 🪔**

*शुभ दशैं! May your website bring joy to people celebrating Dashain worldwide!*
