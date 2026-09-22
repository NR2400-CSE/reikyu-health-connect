# Reikyu — Multilingual Public Health Chatbot

An AI-driven multilingual chatbot for public health awareness and disease prevention in rural and urban India — built for **Smart India Hackathon 2025, Problem Statement ID 25049** (Ministry of Health & Family Welfare, Government of India).


## Team project

This was built by a six-person team for Smart India Hackathon. It is not a solo project — see the [About page](src/pages/AboutPage.tsx) in this repo for the full team.

## Problem

Language barriers, low awareness, and slow access to verified health information make it hard for many communities in India to get timely, trustworthy health guidance — especially during outbreaks or vaccination drives.

## What it does

- **Multilingual chat interface** — conversational health assistant in English, Hindi, and Odia, with context-aware responses
- **Symptom assessment** — preliminary AI-assisted symptom checks with guidance on when to see a doctor
- **Vaccination reminders** — automated SMS/WhatsApp reminders for routine and emergency vaccinations
- **Outbreak alerts** — real-time notifications about disease outbreaks and public health emergencies in the user's area
- **Health etiquette guide** — practical disease-prevention guidance (hand hygiene, respiratory etiquette, etc.)
- **Government data integration** — designed to connect with health department databases and official sources
- **SMS/WhatsApp integration** — reaches users on messaging platforms they already use, not just a web app

## Tech stack

| Layer | Technology |
|---|---|
| Frontend | React, TypeScript, Vite |
| UI | Tailwind CSS, shadcn/ui, Radix UI |
| Routing / Data | React Router, TanStack Query |
| Forms | React Hook Form |

## Project structure

```
src/
  pages/
    Index.tsx            # homepage
    ChatbotPage.tsx        # chat interface
    FeaturesPage.tsx        # feature overview
    DashboardPage.tsx        # health etiquette guide
    AboutPage.tsx             # problem statement, team, objectives
  components/
    ChatInterface.tsx           # multilingual chat UI + quick actions
    NavBar.tsx
    ui/                            # shadcn/ui component library
```

## Running locally

```bash
npm install
npm run dev
```

Visit `http://localhost:5173`.

## Status

Prototype built for Smart India Hackathon 2025. Chat, vaccination reminders, outbreak alerts, and government data integration are represented in the UI; verify current integration status before citing specific features as fully functional in a production sense.
