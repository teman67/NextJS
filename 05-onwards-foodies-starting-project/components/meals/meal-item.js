import Link from "next/link";
import Image from "next/image";
import classes from "./meal-item.module.css";

export default function MealItem({ title, slug, image, summary, creator }) {
  return (
    <article className={classes.meal}>
      <header>
        <div className={classes.image}>
          <Image
            src={image}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority={false}
          />
        </div>
        <div className={classes.headerText}>
          <h2>{title}</h2>
          <p>
            by <span className={classes.creator}>{creator}</span>
          </p>
        </div>
      </header>
      <div className={classes.content}>
        <p className={classes.summary}>{summary}</p>
        <div className={classes.actions}>
          <Link
            href={`/meals/${slug}`}
            aria-label={`View details for ${title}`}
          >
            View Details
          </Link>
        </div>
      </div>
    </article>
  );
}
