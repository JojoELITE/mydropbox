import React, { useState } from "react";
import { storage } from "./firebaseConfig";

const SharedLink = ({ fileUrl }) => {
  const [expirationDate, setExpirationDate] = useState(new Date());

  const generateSharedLink = () => {
    // Generate a random encrypted URL
    const encryptedUrl = "https://example.com/encrypted/" + Math.random().toString(36).substring(2, 15);

    // Store the encrypted URL and expiration date in a secure database or cloud storage
    // Implement logic to check expiration date and decrypt the URL when accessed

    return <a href={encryptedUrl} target="_blank" rel="noreferrer">Shared Link</a>;
  };

  return (
    <div>
      <input type="date" value={expirationDate} onChange={(event) => setExpirationDate(event.target.value)} />
      <button onClick={generateSharedLink}>Generate Shared Link</button>
    </div>
  )
}

export default SharedLink;