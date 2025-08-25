import { createPost } from "@/lib/actions";
import FormSubmit from "@/components/FormSubmit";

export default function NewPostPage() {
  return (
    <>
      <div className="hero-section">
        <h1>Create a New Post</h1>
        <p>Share your thoughts, experiences, and images with the community.</p>
      </div>
      <form action={createPost}>
        <div className="form-control">
          <label htmlFor="title">Post Title</label>
          <input
            type="text"
            id="title"
            name="title"
            placeholder="Enter an engaging title for your post..."
            required
          />
        </div>
        <div className="form-control">
          <label htmlFor="image">Upload Image</label>
          <input
            type="file"
            accept="image/png, image/jpeg, image/jpg, image/webp"
            id="image"
            name="image"
            required
          />
        </div>
        <div className="form-control">
          <label htmlFor="content">Content</label>
          <textarea
            id="content"
            name="content"
            rows="6"
            placeholder="Share your story, thoughts, or experiences..."
            required
          />
        </div>
        <div className="form-actions">
          <FormSubmit />
        </div>
      </form>
    </>
  );
}
