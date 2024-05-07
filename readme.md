
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

![image](https://github.com/kishore28kumar/oral-cancer-detection/assets/139374121/72208b47-db1b-4452-8cc7-1f0921b4e55a)

![image](https://github.com/kishore28kumar/oral-cancer-detection/assets/139374121/334b747e-a8b6-474c-a345-22b3362e14f8)

![image](https://github.com/kishore28kumar/oral-cancer-detection/assets/139374121/82dab384-844f-48bf-92d3-d6a97ed072b7)





## Accuracy

![Model_Accuracy](https://github.com/kishore28kumar/oral-cancer-detection/assets/139374121/5078f98d-86e7-482d-82d7-c942220bd37f)


