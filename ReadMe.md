# JavaScript API Fundamentals

Progressive API integration exercises built while learning 
async JavaScript, HTTP, authentication, and data transformation.

---

## Projects

### 02 — Parallel Data Fetcher
Fetches a user and their todos simultaneously using `Promise.all`.
Filters and counts completed vs incomplete todos.
Demonstrates parallel async calls, query parameters, and 
shaped output from raw API responses.

**Run:** `node 02-promise-all-filter.js`  
**API:** JSONPlaceholder (public)

---

### 03 — GitHub Profile Analyser
Fetches any GitHub user's profile and top repositories 
in a single call. Returns a clean summary object with 
only relevant fields extracted from the raw response.

**Run:** `node 03-github-analyser.js`  
**API:** GitHub REST API (requires auth token)  
**Setup:** Copy `.env.example` to `.env`, add your GitHub token

---

## Setup
1. Clone: `git clone https://github.com/yourusername/js-api-fundamentals`
2. Install: `npm install`
3. Add `.env` file with required keys (see `.env.example`)
4. Run any file with `node filename.js`

## Key concepts covered
Async/await · Promise.all · Bearer token auth · 
Query parameters · Error handling · Data transformation