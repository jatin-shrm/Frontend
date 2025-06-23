import { useState, useEffect } from 'react';

export type FilterType = 'all' | 'male' | 'female';

export interface User {
  id: number;
  username: string;
  full_name: string;
}

export default function useChatUsers(filter: FilterType, accessToken: string | null) {
  const [users, setUsers] = useState<User[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!accessToken) return;
    setIsLoading(true);
    setError(null);
    let url = 'http://127.0.0.1:8000/api/users/chat-users/';
    if (filter === 'male') url += '?gender=M';
    if (filter === 'female') url += '?gender=F';
    fetch(url, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
    })
      .then((response) => {
        if (!response.ok) throw new Error('Failed to fetch users');
        return response.json();
      })
      .then((data) => setUsers(data))
      .catch((err) => setError(err.message || 'An error occurred'))
      .finally(() => setIsLoading(false));
  }, [filter, accessToken]);

  return { users, isLoading, error };
}
