import { useEffect, useState } from "react";

export default function useLoading(delay: number = 3000): boolean {  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const timer: ReturnType<typeof setTimeout> = setTimeout(() => {
      setIsLoading(false);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  return isLoading;
}