# Blood Cell Recognition

REST API for spotting blood cell types from an image made in Python using TensorFlow.

## Backend

Backend consists of API and model-training script.

### Python dependencies

Run the following to install all needed packages:

```
cd backend
pip install -r requirements.txt
```

### Running the API server

Run the following to run the development server on `localhost:8000`:

```
cd backend
uvicorn api:app --reload
```

### Getting the Dataset

Run the following to get the dataset as .zip file:

```
kaggle datasets download -d paultimothymooney/blood-cells
```

Then, unzip the archive as `/backend/dataset` using any tools at hand.  
Make sure that the `/backend/dataset` has 2 subdirectories: `dataset-master` and `dataset2-master`.

## Frontend

Frontend is a React app built with Vite.

### Installing dependencies

Run the following to install the npm packages:

```
cd frontend
npm install
```

### Running the app on localhost

To start the development app server run the following inside of `frontend` directory:

```
npm run dev
```