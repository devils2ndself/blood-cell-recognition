# Blood Cell Recognition

REST API for spotting blood cell types from an image made in Python using TensorFlow.

## Python dependencies

Run the following to install all needed packages:

```
pip install -r requirements.txt
```

## Getting the Dataset

Run the following to get the dataset as .zip file:

```
kaggle datasets download -d paultimothymooney/blood-cells
```

Then, unzip the archive as `/backend/dataset` using any tools at hand.  
Make sure that the `/backend/dataset` has 2 subdirectories: `dataset-master` and `dataset2-master`.