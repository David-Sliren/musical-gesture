# Augen Pro Style Music Interface

Based on the provided references and requests, we will build a minimalist, futuristic frontend application leveraging React, Framer Motion for revolutionary transitions, and Tailwind CSS V4 for styling.

## User Review Required
Please review the proposed design system tokens and architecture. Let me know if you would like me to use `lucide-react` for some simple sleek vector icons (Play, Pause, Library, etc.), as they fit perfectly with minimal designs.

## Proposed Architecture

1. **Tech Stack**:
   - Framework: React via Vite (`npx create-vite`)
   - Styling: `tailwindcss` (v4 with `@tailwindcss/vite` plugin)
   - State: `zustand` (manage player state & gestures)
   - Animations: `motion` (Framer motion for layout transitions)
   - Routing: `react-router-dom` (Declarative `RouterProvider`)
   - Media: `react-youtube`

2. **Design System (Tailwind V4)**:
   - Primary BG: `#ffffff` (White)
   - Primary Text: `text-neutral-900`
   - Secondary Text: `text-neutral-500`
   - Accent: `#007bff` (Vibrant Blue)
   - Shadows: `0 4px 40px rgba(0,0,0,0.03)`
   - Border Radius: `3xl` for cards, `full` for buttons.
   - Core Aesthetic: Clean lines, lots of whitespace, glassmorphism (`backdrop-blur-md`) on floating elements.

### 1. Boilerplate Setup

We'll scaffold the Vite app and install the necessary dependencies exactly as requested. We'll configure `@tailwindcss/vite` in `vite.config.js` and set up the base `@import "tailwindcss";` in `src/index.css`.

### 2. Global State

#### [NEW] `src/store/useStore.js`
A Zustand store managing:
- `currentTrack`: Metadata of the song currently playing (id for youtube, title, artist, cover art).
- `isPlaying`: boolean.
- `lastGesture`: string (to prepare for your future gesture integration).
- Actions to toggle play, set track, etc.

### 3. Routing

#### [NEW] `src/router.jsx`
Implement declarative routing with `createBrowserRouter`:
- `/` -> `<HomeLayout>` with `<HomeView />`
- `/player` -> `<PlayerView />`

### 4. Views & Components

#### [NEW] `src/views/HomeView.jsx`
- Clean grid layout showing "Playlists" or "Recent Tracks".
- Sidebar for navigation (Home, Search, Library).
- When a track is selected, sets it in global state.

#### [NEW] `src/components/FloatingPlayer.jsx`
- The "Mini Player" that appears dynamically at the bottom of the screen (`fixed bottom-6 left-1/2 -transform-x-1/2`).
- Glassmorphism: `bg-white/80 backdrop-blur-md border border-white/20`.
- Has a `Link` to `/player`.
- **Framer Motion**: Uses `layoutId="player-wrapper"` to connect seamlessly to the `PlayerView`.

#### [NEW] `src/views/PlayerView.jsx`
- The immersive, expanded player screen.
- Matches `layoutId="player-wrapper"` to expand from the floating player smoothly using Framer's Shared Element Transitions.
- Integrates `<YouTube>` component minimally.
- Uses `motion` for staggered entrance animations of lyrics or up-next queues.

#### [NEW] `src/components/AnimatedBackground.jsx`
- A wrapper component that receives the `isPlaying` state.
- Implements a subtle, slow CSS/Motion background pulse/glow (`box-shadow` or pseudo-element opacity) along the edges of the screen to give the "alive" feeling.

## Open Questions

- Should I add mock song data with some placeholder images (or use unsplash/your provided images) to demonstrate the layout transition?
- For `react-youtube`, we will need actual YouTube Video IDs for the songs. I will use some royalty-free YouTube video IDs as placeholders. Is this acceptable?
- Would you like `lucide-react` for minimalist SVG icons to complete the UI?

## Verification Plan

### Automated Tests
- N/A for this visual task.

### Manual Verification
- Start the Vite dev server.
- Verify that `tailwindcss v4` compiles correctly.
- Click a song on the Home page -> Floating player must appear with an entrance animation.
- Background must start to subtly pulse.
- Click on the Floating player -> The router moves to `/player` and the component physically expands across the screen using `layoutId` without unmounting instantly.
- Click "Back" -> seamlessly shrinks back to the floating island.
