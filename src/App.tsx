import { useState } from "react";
import { useGetUsers } from "./lib/services/user";

function App() {
  const [limit, setLimit] = useState(10);
  const [skip, setSkip] = useState(0);
  const [q, setQ] = useState("");

  const { data, error, isLoading } = useGetUsers({
    limit,
    skip,
    q,
  });

  function handlePrevious() {
    if (skip > 0) {
      setSkip((skip) => skip - limit);
    }
  }
  function handleNext() {
    setSkip((skip) => skip + limit);
  }
  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        value={q}
        onChange={(e) => {
          setQ(e.target.value);
          setSkip(0);
        }}
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

      <div>
        <button disabled={skip === 0} onClick={handlePrevious}>
          Previous
        </button>
        <button onClick={handleNext}>Next</button>
      </div>
      <div>Total: {data?.total}</div>
      <div>Limit: {data?.limit}</div>
      <div>Skip: {data?.skip}</div>
    </div>
  );
}

export default App;
