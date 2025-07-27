import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import FileUploader from './components/FileUploader';
import PhoneProcessor from './components/PhoneProcessor';
import DownloadExcel from './components/DownloadExcel';

const App = () => {
    const [uniqueNumbers, setUniqueNumbers] = useState([]);

    const handleProcessedNumbers = (numbers) => {
        setUniqueNumbers(numbers);
    };

    return (
        <div>
            <h1>Phone Number Deduplication App</h1>
            <FileUploader onProcessNumbers={handleProcessedNumbers} />
            <PhoneProcessor uniqueNumbers={uniqueNumbers} />
            <DownloadExcel uniqueNumbers={uniqueNumbers} />
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));