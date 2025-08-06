# 📦 DWS Profiling System Backend (Built with Bun.js)

> A high-performance backend system to capture, process, and store **Dimension & Weight data** from logistics hardware (via PLC over TCP), built using **Bun.js**. Designed for logistics, e-commerce, and warehouse automation.

---

## 🔧 Tech Stack

- ⚡ **[Bun.js](https://bun.sh/)** — Fast JavaScript runtime (alternative to Node.js)
- 🌐 **Express.js** — API framework
- 🧠 **MongoDB** — Document database for storing dimension-weight records
- 🔌 **TCP Server (net module)** — For receiving real-time data from PLC
- 🔐 **Dotenv** — For managing environment variables

---

## 🎯 Features

- 📡 **PLC Integration via TCP/IP**
  - Receives data like SKU, dimensions, and weight in real-time
- 🧮 **Calculates Volumetric & Chargeable Weight**
- 💾 **Stores each scan in MongoDB**
- 📊 **REST API for viewing records**
- 🛠️ **Clean, Modular Code** — Separates logic into routes, services, and TCP handlers

---

## 🛠️ Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/Tushar-CodeSpace/Profiling_System.git
cd Profiling_System
```

### 2. Install Bun (if not already installed)

```bash
curl -fsSL https://bun.sh/install | bash
```

Then reload your shell and check:

```bash
bun --version
```

### 3. Install Dependencies

```bash
bun install
```

### 4. Configure Environment Variables

Create a `.env` file:

```
# Root ENVs
PORT=4004
SECONDARY_PORT=4001

# Database ENVs
DATABASE_HOST = ""
DATABASE_PORT = ""
DATABASE = ""
DATABASE_USER = ""
DATABASE_PASSWORD = ""

# PLC Connection Request ENVs
REQUEST_SOCKET_SERVER_ADDRESS = ""
REQUEST_SOCKET_SERVER_PORT = 

# PLC Connection Response ENVs
RESPONSE_SOCKET_SERVER_ADDRESS = ""
RESPONSE_SOCKET_SERVER_PORT = 
DEBUG = false

LOG_NAME = "client_communication"
LOG_PATH = "./logs"
PROFILER = true
MULTIVALIDATION = false
RESPONSE_TYPE = "PDW"
TIME = 20000
```

### 5. Run the Backend Server

```bash
bun start
```

---

## 🧪 Sample PLC Data Format

The TCP server expects data in this format from the PLC:

```
SKU123,30,20,10,2.5
```

Where:
- `SKU123` = Item code (The Barcode of the shipment)
- `30,20,10` = Dimensions (L x W x H) mm
- `2.5` = Actual weight in kg

---

## 📁 Folder Structure

```
Profiling_System/
    |--client_communication         # Handle the TCP string coming from the PLC
    |       |--logs/
    |       |--src/
    |       |   |--utils
    |       |   |   |--logger.js
    |       |   |--app.js
    |       |   |--server.js
    |       |--.env
    |       |--package.json
    |--alarm_service                # Monitor the health of the machine and the server
```

---

## 📌 Sample API: `GET /api/dws` (WIP)

Returns all stored dimension-weight records in JSON format:

```json
[
  {
    "sku": "SKU123",
    "dimensions": { "length_cm": 30, "width_cm": 20, "height_cm": 10 },
    "weight_kg": 2.5,
    "volumetric_weight_kg": 1.2,
    "chargeable_weight_kg": 2.5,
    "captured_at": "2025-08-06T10:30:00Z"
  }
]
```

---

## 👤 About Me

I'm an **Electrical Engineering graduate** passionate about **automation, embedded systems**, and now expanding into **backend development** with real-world industrial integration. This project demonstrates my ability to:

- Integrate backend code with hardware (PLCs via TCP)
- Build and expose APIs using Bun.js & Express
- Design clean, scalable backend architecture
- Work across both hardware and software layers

📫 **Reach out** if you’re hiring for backend roles or looking for someone who can **bridge the gap between physical hardware and modern backend systems**.

---

## 🧠 Future Improvements

- Add JWT-based admin authentication
- WebSocket support for live frontend updates
- Frontend dashboard for real-time visual feedback
- Dockerization for deployment

---

## 📜 License

MIT — use freely with credit.
