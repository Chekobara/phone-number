import React from 'react';
import { saveAs } from 'file-saver';
import { convertToExcel } from '../utils/excelUtils';

class DownloadExcel extends React.Component {
    handleDownload = () => {
        const { uniquePhoneNumbers } = this.props;
        const excelData = convertToExcel(uniquePhoneNumbers);
        const blob = new Blob([excelData], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
        saveAs(blob, 'unique_phone_numbers.xlsx');
    };

    render() {
        return (
            <button onClick={this.handleDownload}>
                Download Excel
            </button>
        );
    }
}

export default DownloadExcel;