import supabase from "../supabaseClient";
import { useEffect, useState } from "react";

function Home() {
  const [fetchError, setFetchError] = useState(null);
  const [comments, setComments] = useState(null);

  useEffect(() => {
    const fetchComments = async () => {
      const { data, error } = await supabase.from("comments").select();
      if (error) {
        setFetchError("Cannot fetch comments");
        setComments(null);
        console.log(error);
      }
      if (data) {
        setFetchError(null);
        setComments(data);
      }
    };
    fetchComments();
  }, []);

  return (
    <div className="page home">
      <div className="result mid">
        {fetchError && <p>{fetchError}</p>} {/* if error exists */}
        {!comments && <p>Loading...</p>}
        {comments && (
          <table className="comments mt-5 table-auto">
            <thead>
              <tr>
                <th>Name</th>
                <th>Comment</th>
              </tr>
            </thead>
            <tbody>
              {comments.map((entry) => (
                <tr key={entry.id}>
                  <td>{entry.username}</td>
                  <td className="whitespace-pre-line text-left">
                    {entry.comment}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}

export default Home;
