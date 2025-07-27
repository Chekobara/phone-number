import React, { Component } from 'react';

class FileUploader extends Component {
    constructor(props) {
        super(props);
        this.state = {
            files: [],
        };
    }

    handleFileChange = (event) => {
        this.setState({ files: Array.from(event.target.files) });
    };

    readFiles = () => {
        const { files } = this.state;
        const filePromises = files.map(file => {
            return new Promise((resolve, reject) => {
                const reader = new FileReader();
                reader.onload = (e) => {
                    resolve(e.target.result);
                };
                reader.onerror = (error) => {
                    reject(error);
                };
                reader.readAsText(file);
            });
        });

        return Promise.all(filePromises);
    };

    render() {
        return (
            <div>
                <input
                    type="file"
                    multiple
                    accept=".txt, .xlsx"
                    onChange={this.handleFileChange}
                />
                <button onClick={() => this.readFiles().then(data => console.log(data))}>
                    Upload and Read Files
                </button>
            </div>
        );
    }
}

export default FileUploader;