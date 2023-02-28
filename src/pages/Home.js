import supabase from "../supabaseClient";
import { useEffect, useState } from "react";

function Home() {
  const [fetchError, setFetchError] = useState(null);
  const [transactions, setTransactions] = useState(null);

  useEffect(() => {
    const fetchTransactions = async () => {
      const { data, error } = await supabase.from("transactions").select();
      if (error) {
        setFetchError("Cannot fetch transactions");
        setTransactions(null);
        console.log(error);
      }
      if (data) {
        setFetchError(null);
        setTransactions(data);
      }
    };
    fetchTransactions();
  }, []);

  return (
    <div className="page home">
      <div className="result mid">
        {fetchError && <p>{fetchError}</p>} {/* if error exists */}
        {transactions && (
          <table className="transactions mt-5 table-auto">
            <thead>
              <tr>
                <th>Type</th>
                <th>Amount</th>
                <th>Currency</th>
                <th>Detail</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((entry) => (
                <tr key={entry.id}>
                  <td>{entry.type}</td>
                  <td>{entry.amount}</td>
                  <td>{entry.currency}</td>
                  <td className="details">{entry.details}</td>
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
