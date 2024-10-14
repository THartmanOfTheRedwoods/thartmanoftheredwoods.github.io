// dbWorker.js

// Initialize IndexedDB
let db;
const request = indexedDB.open("chartDataDB", 1);

request.onupgradeneeded = (event) => {
  db = event.target.result;
  db.createObjectStore("dataStore", { autoIncrement: true });
};

request.onsuccess = (event) => {
  db = event.target.result;
};

self.onmessage = (event) => {
  const data = event.data;

  if (db) {
    const transaction = db.transaction("dataStore", "readwrite");
    const store = transaction.objectStore("dataStore");
    store.add({ value: data });
    transaction.oncomplete = () => {
      self.postMessage("Data added to IndexedDB");
    };
  }
};

