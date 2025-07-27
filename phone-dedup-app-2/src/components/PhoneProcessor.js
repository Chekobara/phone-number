import React from 'react';

class PhoneProcessor {
    constructor() {
        this.phoneNumbers = new Set();
        this.duplicates = new Set();
    }

    processPhoneNumbers(numbers) {
        numbers.forEach(number => {
            const cleanedNumber = this.cleanPhoneNumber(number);
            if (this.phoneNumbers.has(cleanedNumber)) {
                this.duplicates.add(cleanedNumber);
            } else {
                this.phoneNumbers.add(cleanedNumber);
            }
        });
    }

    cleanPhoneNumber(number) {
        return number.replace(/[^0-9]/g, ''); // Remove non-numeric characters
    }

    getUniqueNumbers() {
        return Array.from(this.phoneNumbers);
    }

    getDuplicates() {
        return Array.from(this.duplicates);
    }
}

export default PhoneProcessor;