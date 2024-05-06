
# OralScan AI

A user-friendly web application designed to aid in the rapid
detection of early-stage cancerous laryngeal tissues from tissue images. Utilizing machine
learning algorithms,our solution analyses uploaded images in realtime, providing instant feedback on the presence or absence of
laryngeal with tissue classes. With a focus on simplicity and efficiency, OralScan AI
aims to assist healthcare professionals in making timely and
accurate diagnoses, ultimately improving patient outcomes and
enhancing overall healthcare efficiency.


## Local Setup
Run Backend first then start frontend

Backend
```bash
  pip install flask tensorflow flask_cors numpy
  cd backend
  python server.py
```
Frontend

```bash
  cd frontend
  npm install
```
head over to "oral-cancer-detection/frontend/src/components/ImgForm.jsx"

```bash
  replace https://oral-cancer-backend-1.onrender.com/predict with http://127.0.0.1:5000/predict

```

start the frontend server

```bash
  npm run dev
```

## Screenshots




## Accuracy



