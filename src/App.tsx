import { useState } from "react";
import { useGetUsers } from "./lib/services/user";

function App() {
  const [limit] = useState(10);
  const [skip] = useState(0);
  const [q, setQ] = useState("");

  const { data, error, isLoading } = useGetUsers({
    limit,
    skip,
    q,
  });

  console.log({ q });
  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        value={q}
        onChange={(e) => setQ(e.target.value)}
      />
      {isLoading ? (
        <div>loading...</div>
      ) : error ? (
        <div>{JSON.stringify(error, null, 2)}</div>
      ) : null}
      <ul>
        {data?.users.map((user) => (
          <li key={user.id}>
            {user.firstName} - {user.lastName}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
