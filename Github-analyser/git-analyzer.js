require('dotenv').config()

const GITHUB_TOKEN = process.env.GITHUB_TOKEN
const BASE = 'https://api.github.com'

const headers ={
    'AUTHORIZATION': `Bearer ${GITHUB_TOKEN}`,
    'Accept': 'application/vnd.github.v3+json'
}

async function getProfile(username) {
    const res = await fetch(`${BASE}/users/${username}`,{ headers })
    if (!res.ok) throw new Error (`Username fetch failed: ${res.status}`)
    return res.json()
}

async function getTopRepos(username) {
    const res = await fetch(`${BASE}/users/${username}/repos?sort=stars&per_page=5`, { headers })
    if (!res.ok) throw new Error (`repo fetch failed: ${res.status}`)
    return res.json()
}

async function analyseUser(username) {
    try{
        const [profile, repos] = await Promise.all([getProfile(username), getTopRepos(username)])
    
        const result ={
            profile: {
                name: profile.name,
                location: profile.location,
                public_repos: profile.public_repos,
                followers: profile.followers
            },
            top_repos: repos.map(repo => ({
                name: repo.name,
                stars: repo.stargazers_count,
                language: repo.language
            }))
        }
        console.log(JSON.stringify(result, null, 2))
    }catch(err){
        console.log('Analysis Failed', err.message)
    }
}

analyseUser('gaurav-900')

