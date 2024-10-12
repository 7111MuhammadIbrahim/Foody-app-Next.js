import Link from "next/link";
import classes from "./not-found.module.css";
export default function NotFound() {
  return (
    <main className="not-found">
      <h1>Not found</h1>
      <p>Unfortunately, we could not find the requested page or resource.</p>
      <p>
        Click here to go to the home page
        <Link href="/" className={classes.link}>
          <br />
          <br />

          <button className={classes.button}>Home</button>
        </Link>
      </p>
    </main>
  );
}
