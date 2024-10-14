// chartWorker.js

let db;
const request = indexedDB.open("chartDataDB", 1);

request.onsuccess = (event) => {
  db = event.target.result;
  setInterval(fetchData, 1000);
};

function fetchData() {
  const transaction = db.transaction("dataStore", "readonly");
  const store = transaction.objectStore("dataStore");
  const dataPoints = [];

  store.openCursor().onsuccess = (event) => {
    const cursor = event.target.result;
    if (cursor) {
      dataPoints.push(cursor.value.value);
      cursor.continue();
    } else {
      self.postMessage(dataPoints);
    }
  };
}

