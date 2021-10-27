let db;
let budgetVersion;

// Create a new db request for a "budget" database.
const request = indexedDB.open('BudgetDB', budgetVersion || 21);

request.onupgradeneeded = function (e) {
console.log('Upgrade needed in IndexDB');

const { oldVersion } = e;
const newVersion = e.newVersion || db.version;

console.log(`DB Updated from version ${oldVersion} to ${newVersion}`);

db = e.target.result;

if (db.objectStoreNames.length === 0) {
    db.createObjectStore('BudgetStore', { autoIncrement: true });
}
};

request.onerror = function (e) {
console.log(`Woops! ${e.target.errorCode}`);
};



            // Assign the current store to a variable
            const currentStore = transaction.objectStore('BudgetStore');

            // Clear existing entries because our bulk add was successful
            currentStore.clear();
            console.log('Clearing store 🧹');
        }
        });
    }
};
}

request.onsuccess = function (e) {
console.log('success');
db = e.target.result;

  // Check if app is online before reading from db
if (navigator.onLine) {
    console.log('Backend online! 🗄️');
    checkDatabase();
}
};

const saveRecord = (record) => {
console.log('Save record invoked');
  // Create a transaction on the BudgetStore db with readwrite access
const transaction = db.transaction(['BudgetStore'], 'readwrite');

  // Access your BudgetStore object store
const store = transaction.objectStore('BudgetStore');

  // Add record to your store with add method.
store.add(record);
};

// Listen for app coming back online
window.addEventListener('online', checkDatabase);