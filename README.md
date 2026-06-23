# Clinical Data Science Personal Website

Professional personal website for a University of Toronto undergraduate student targeting clinical data science, biostatistics, clinical development, pharmaceutical, biotechnology, and clinical research roles.

## Tech Stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- Lucide React icons
- SEO metadata via Next.js `metadata`
- Vercel-ready deployment

## Pages

- Home: hero section, professional positioning, resume download, LinkedIn, GitHub
- About: education, academic interests, career goals, skills overview
- Experience: clinical data science internship, data analysis, biomedical training
- Projects: project cards for survival analysis, Kaplan-Meier analysis, Cox regression, SAP development, clinical trial analytics, and real-world data studies
- Skills: statistics, clinical research, programming, and data visualization
- Contact: email, LinkedIn, GitHub

## Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

Create a production build:

```bash
npm run build
```

Start the production server:

```bash
npm run start
```

## Personalization Checklist

Update the following fields in `lib/site-data.ts`:

- `profile.name`
- `profile.email`
- `profile.linkedin`
- `profile.github`
- project GitHub links
- project report links
- experience details

Replace the resume placeholder:

```text
public/resume/resume-placeholder.pdf
```

You can either keep the same filename or upload your actual resume as:

```text
public/resume/resume.pdf
```

If you rename it, update `profile.resume` in `lib/site-data.ts`.

Replace project images or reports in:

```text
public/projects/
```

## GitHub Upload Steps

1. Create a new repository on GitHub.
2. Stage and commit the project:

```bash
git add .
git commit -m "Initial clinical data science portfolio"
```

3. In this project folder, connect the remote:

```bash
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPOSITORY.git
```

4. Rename the default branch if needed:

```bash
git branch -M main
```

5. Push the project:

```bash
git push -u origin main
```

## Vercel Deployment Steps

1. Go to [Vercel](https://vercel.com).
2. Choose **Add New Project**.
3. Import your GitHub repository.
4. Keep the default framework preset as **Next.js**.
5. Use these default commands:

```text
Install Command: npm install
Build Command: npm run build
Output Directory: .next
```

6. Click **Deploy**.

Vercel will automatically redeploy when you push updates to GitHub.

## Recommended Content Improvements

- Add real internship metrics once available.
- Add one polished project report PDF for survival analysis or clinical trial analytics.
- Add a concise downloadable resume tailored to clinical data science and biostatistics roles.
- Replace placeholder project links with real GitHub repositories.
