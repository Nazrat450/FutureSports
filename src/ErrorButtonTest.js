import React, { useState } from 'react';

function ErrorButton() {
  const [throwError, setThrowError] = useState(false);
  
  if (throwError) {
    throw new Error("Button clicked: Error triggered!");
  }

  return (
    <div>
      <button onClick={() => setThrowError(true)}>
        Trigger Error
      </button>
      Main content
    </div>
  );
}
export default ErrorButton;
