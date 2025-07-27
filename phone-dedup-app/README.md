# Phone Deduplication Application

This project is a phone number deduplication application that allows users to upload multiple text or Excel files containing phone numbers, checks for duplicates, and enables downloading the results as an Excel file.

## Features

- Upload multiple text or Excel files.
- Process phone numbers to identify and remove duplicates.
- Download the unique phone numbers as an Excel file.

## Project Structure

```
phone-dedup-app
├── src
│   ├── index.js               # Entry point of the application
│   ├── components
│   │   ├── FileUploader.js     # Component for uploading files
│   │   ├── PhoneProcessor.js    # Component for processing phone numbers
│   │   └── DownloadExcel.js     # Component for downloading results as Excel
│   └── utils
│       └── excelUtils.js       # Utility functions for Excel operations
├── public
│   └── index.html              # Main HTML file for the user interface
├── package.json                 # npm configuration file
└── README.md                    # Documentation for the project
```

## Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```
   cd phone-dedup-app
   ```
3. Install the dependencies:
   ```
   npm install
   ```

## Usage

1. Open `public/index.html` in a web browser.
2. Use the file uploader to select and upload your text or Excel files containing phone numbers.
3. The application will process the uploaded files and display the unique phone numbers.
4. Click the download button to save the results as an Excel file.

## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue for any enhancements or bug fixes.

## License

This project is licensed under the MIT License.