# Four-Acre Flora Deployment Guide

## Source Control

Stage changes:

```bash
git add .
```

Commit changes:

```bash
git commit -m "your message"
```

Push changes:

```bash
git push -u origin main
```

---

## Hosting

Platform:

```text
Vercel
```

Website:

```text
https://vercel.com
```

---

## Initial Vercel Setup

1. Create a Vercel account.
2. Sign in with GitHub.
3. Import repository:

```text
four-acre-flora-atlas
```

4. Click Deploy.

---

## Database

Platform:

```text
Supabase
```

Website:

```text
https://supabase.com
```

### Create Project

Project Name:

```text
four-acre-flora-atlas
```

Save:

```text
Project URL
Anon Public Key
Database Password
```

Do NOT expose:

```text
Service Role Key
```

---

## Architecture

```text
GitHub
  ↓
Vercel
  ↓
Next.js
  ↓
Supabase
```

---

## Future Features

- Species database
- Observation tracking
- Zone management
- Image storage
- Interactive maps
- User accounts
- AI-assisted plant identification
