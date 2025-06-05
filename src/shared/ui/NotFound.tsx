import { Link } from 'react-router-dom';

export function NotFound() {
  return (
    <div className="flex flex-col items-center mt-20">
      <h2 className="text-2xl font-bold">Not Found</h2>
      <p className="text-sm text-muted-foreground">Could not find requested resource</p>

      <Link to="/" className="text-sm text-blue-500">
        Return Home
      </Link>
    </div>
  );
}
