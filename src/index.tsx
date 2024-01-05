import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'bootstrap-icons/font/bootstrap-icons.css'
import reportWebVitals from './reportWebVitals';
import { registerLicense } from '@syncfusion/ej2-base'
registerLicense('Mgo+DSMBaFt+QHJqVk1nQ1BCaV1CX2BZd1lzRGlbeE4QCV5EYF5SRHBeRF9iTH9RfkVnX3c=;Mgo+DSMBPh8sVXJ1S0R+X1pDaV5EQmFJfFBmTGlcflRyc0UmHVdTRHRcQltiT3xSc0RhUX9YdHw=;ORg4AjUWIQA/Gnt2VFhiQlJPcUBDW3xLflF1VWpTel96dlJWACFaRnZdQV1lSHhRd0BiW3ded31d;MjQ0NDQwMEAzMjMxMmUzMDJlMzBiYjY5b3B2cVJjS3NHT2oxM3J4dFNTVDJrWEZ5L2lUeGxXWHEzbS92YTJvPQ==;MjQ0NDQwMUAzMjMxMmUzMDJlMzBET3RSTkpzcHRNU3dsY3V5Qnc3ZTJzNzJHcTBQd0tHV0hYeVlWbWNaRi9NPQ==;NRAiBiAaIQQuGjN/V0d+Xk9HfVhdXGVWfFN0RnNQdVtxfldBcDwsT3RfQF5jT39VdERmWH1WcXdTTg==;MjQ0NDQwM0AzMjMxMmUzMDJlMzBZblRyc1ZsT1ZMZnJQbHJqNkRLVmhpcE5kRi9VSUloNXZURWJjVGg4R2JnPQ==;MjQ0NDQwNEAzMjMxMmUzMDJlMzBUQWlrRGtlRnNlMnV4M1IvV05QMnhOMzlwbzJHbG9kcmtzTWJYcDNNSWJVPQ==;Mgo+DSMBMAY9C3t2VFhiQlJPcUBDW3xLflF1VWpTel96dlJWACFaRnZdQV1lSHhRd0BiW3dfeXFd;MjQ0NDQwNkAzMjMxMmUzMDJlMzBNK1Y1eUFicERNV2RTVFowaGo3aUp1ZWhZTCtiYnFPRVBKaEpJRlQwejJZPQ==;MjQ0NDQwN0AzMjMxMmUzMDJlMzBOV2hmeUJVVE5iRVJUa1pYVW45enlodHY1NlhrYUF0Z0FmZ1M1NEZjK053PQ==;MjQ0NDQwOEAzMjMxMmUzMDJlMzBZblRyc1ZsT1ZMZnJQbHJqNkRLVmhpcE5kRi9VSUloNXZURWJjVGg4R2JnPQ==')

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
