# Project Index & AI Context

This document serves as a comprehensive index of all projects and experiments within this portfolio. It is designed to provide AI agents with a quick overview of the work, technical summaries, and key insights from case studies.

## Profile Summary
**Thomas Graphics**  
*UI/UX Designer & Engineer*  
Bridging the gap between human intent and functional code. Focused on rapid prototyping, HCI research, and systems-level frontend engineering.

---

## 🚀 Featured Projects (Case Studies)

### 1. Digital Parking Solution for Ohrid
*   **Path:** `work/parking-app/index.html`
*   **Role:** Product Designer & Full Stack Developer
*   **Core Problem:** Revenue leakage and high user friction in legacy SMS-only parking systems in a UNESCO heritage city.
*   **Solution:** A user-centric digital transformation that reduced payment time from 120s to 25s.
*   **Key Metrics:** 92% payment success rate (vs 60% legacy). NPS: +64.
*   **Tech Stack:** Figma, React, Tailwind CSS.
*   **Insights:** UX is a means to an end; pitching "revenue recovery" secured stakeholder buy-in immediately. Removing 40% of planned features increased success rates.

### 2. DocMatch: AI Triage Engine
*   **Path:** `work/docMatch/index.html`
*   **Role:** HCI / UX Engineer
*   **Core Problem:** High cognitive load during medical distress. Patients struggle to self-diagnose and select the right department.
*   **Solution:** An AI-driven triage system that translates natural language symptoms into precise medical routing vectors.
*   **Key Features:** Real-time tokenizer, Provider Dashboard, Secure Patient Records via Supabase.
*   **Tech Stack:** Vanilla JS, Tailwind CSS, Gemini 2.5 Flash, Supabase.
*   **Insights:** Shifting the "translation burden" from human to machine significantly lowers friction. Implements graceful AI degradation with local keyword matching.

### 3. Bank Log: Adaptive NLI Interface
*   **Path:** `work/bank-log/index.html`
*   **Role:** HCI Researcher & Lead Developer
*   **Core Problem:** Industry standard data input (Amount + Currency + Description) forces users to match database structures, increasing friction and cognitive load.
*   **Solution:** A "Notepad-First" PWA utilizing a Natural Language Input (NLI) paradigm. A regex-based processing core structures unstructured text entry.
*   **Design Philosophy:** "The system should adapt to human input format. The user should never be asked to think like a database."
*   **Tech Stack:** Vanilla JS, IndexedDB (PWA), Regex Engine, Tailwind CSS, ApexCharts.
*   **Insights:** By shifting the "translation work" from the human to the background processor, data entry friction was reduced by over 60%. Successfully handles varied inputs like "30300", "30.3k", and "30,300" seamlessly.

---

## 🛠️ Other Work

### 4. QR-Based Ordering Ecosystem (Dine.QR)
*   **Path:** `work/qr-restaurant/index.html`
*   **Focus:** Service Design & Sales-Ready MVP.
*   **Core Problem:** Slow order cycles and high labor costs in restaurants.
*   **Solution:** A full-service architecture connecting customer phones (QR) or table-fixed tablets directly to a Kitchen Display System (KDS).
*   **Key Features:** Real-time inventory sync (WebSockets), behavioral engineering for higher AOV (upselling algorithms), neuromorphic feedback loops.
*   **Business Strategy:** Currently in "Pre-order Validation Phase" to minimize technical waste.

### 5. Reliability-First Weather IoT
*   **Path:** `work/weather-station/index.html`
*   **Focus:** Systems-Level UX & Data Integrity.
*   **Core Problem:** 6°C gap between cloud weather APIs and local reality (UX collapse).
*   **Solution:** A decoupled IoT system using ESP32-C3 for data acquisition and a Netlify-hosted Vanilla JS dashboard for visualization.
*   **Architecture Decision:** Rejected monolithic ESP32 rendering in favor of a decoupled API approach to ensure 100% sensor uptime and premium UI performance.

### 6. Workout App (Gym Core)
*   **Description:** A workout tracking application focused on progress monitoring.
*   **Tech Stack:** Design Tokens, Tailwind CSS.
*   **Status:** Live at [gym-core.netlify.app](https://gym-core.netlify.app/)

### 7. Prompt Library
*   **Description:** A curated library for AI prompts.
*   **Tech Stack:** Figma, Tailwind, AI Integration.
*   **Status:** Live at [prompt-core.netlify.app](https://prompt-core.netlify.app/)

### 8. Graph Visualizer
*   **Description:** Lightweight browser-based tool for practicing graph algorithms.
*   **Tech Stack:** Vanilla JS, Tailwind, Figma.
*   **Open Source:** [GitHub Repository](https://github.com/TomceGraphics/graph-visualizer)

---

## 🧪 Labs (Experiments)

### L1. Song Engine (Concept)
*   **Path:** `labs/song-engine.md`
*   **Hypothesis:** Can AI-powered vector search improve music discovery beyond human curation?
*   **Technical:** Uses semantic vectorization to map songs and find matches based on mathematical similarity.

### L2. Native Music Downloader
*   **Path:** `labs/music-downloader.md`
*   **Hypothesis:** Can we build a high-performance native utility that avoids Electron bloat?
*   **Technical:** Multithreaded download engine with a premium modern interface, optimized for minimal RAM usage.

### L3. Engine.py
*   **Path:** `labs/engine-py.md`
*   **Hypothesis:** Automating programmatic visual generation at scale.
*   **Technical:** Python-based pipeline for rendering static and motion graphics with 90% less manual effort.

### L4. Modern Pokédex
*   **Path:** `labs/modern-pokedex.md`
*   **Hypothesis:** Reimagining classic apps with premium native-feel micro-interactions.
*   **Technical:** REST API integration with 60fps CSS animations.

### L5. K&I Branding
*   **Path:** `labs/k-and-i.md`
*   **Scope:** Full branding package for a fashion brand (Logo, Typography, Visual Language).
