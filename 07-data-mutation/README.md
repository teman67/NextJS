# NextJS Posts App - Data Mutation Example

A social media-like application built with Next.js 14 demonstrating server actions, optimistic updates, and data mutations.

## Features

✅ **Create Posts**: Users can create posts with images, titles, and content
✅ **Like Posts**: Interactive like button with optimistic updates
✅ **View Feed**: Display all posts with real-time like counts
✅ **Image Upload**: Cloudinary integration for image hosting
✅ **Loading States**: Proper loading indicators for better UX
✅ **Server Actions**: Modern Next.js server-side form handling

## Setup Instructions

### 1. Install Dependencies

```bash
npm install
```

### 2. Setup Cloudinary (Optional)

Create a `.env.local` file with your Cloudinary credentials:

```env
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

_Note: If you don't set up Cloudinary, the app will use placeholder images._

### 3. Run the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Key Implementation Details

### Server Actions

- `createPost`: Handles form submission for new posts
- `togglePostLike`: Manages like/unlike functionality

### Optimistic Updates

The like button uses React's `useOptimistic` hook to provide immediate feedback while the server action is processing.

### File Upload

Images are processed and uploaded to Cloudinary, with fallback to placeholder images if not configured.

### Database

Uses SQLite with better-sqlite3 for local development. Tables include:

- `users`: User information
- `posts`: Post content and metadata
- `likes`: Many-to-many relationship for post likes

## Usage

1. **View Posts**: Visit the home page to see recent posts
2. **Browse All Posts**: Click "Feed" to see all posts
3. **Create Post**: Click "New Post" to create a new post with image and content
4. **Like Posts**: Click the heart icon to like/unlike posts

## Technology Stack

- **Next.js 14**: React framework with App Router
- **React 18**: UI library with server components
- **SQLite**: Local database with better-sqlite3
- **Cloudinary**: Image hosting and processing
- **Server Actions**: Form handling without API routes
