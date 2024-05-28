# Pune House Price Prediction using Regression Mini Project

## Table of Contents
- [Introduction](#introduction)
- [Project Overview](#project-overview)
- [Features](#features)
- [Usage](#usage)
- [Data](#data)
- [Model](#model)
- [Model details](#model-details)
- [Results](#results)
- [Contact](#contact)

## Introduction
Welcome to the Pune House Price Prediction Mini Project! This project aims to predict the prices of properties in Pune using various machine learning techniques. It serves as an educational tool for understanding and implementing price prediction models.

## Project Overview
This project involves data collection, preprocessing, exploratory data analysis, model training, and evaluation. The main objective is to build a predictive model that can accurately estimate property prices based on given features. <br>
The project involves systematic data cleaning, feature extraction, and modeling. A web interface is built using Python Flask as the backend, with the model retrieved from a pickle file. The frontend is constructed using HTML, CSS, JavaScript, and jQuery, built upon the Flask `server.py` file.


## Features
- Data preprocessing and cleaning
- Exploratory Data Analysis (EDA)
- Feature engineering
- Model training and evaluation
- Prediction and visualization
- Web interface for price prediction
- Backend using Python Flask
- Frontend using HTML, CSS, JavaScript, and jQuery

## Usage
To use this project, follow these steps:

- Ensure you have the dataset in the data directory.
- Run the Jupyter notebooks in the notebooks directory to preprocess the data, perform EDA, and train the models.
- Use the trained model to make predictions on new data.

## Data
The dataset used for this project is taken from Kaggle's data repository and includes various features such as location, size, number of bedrooms, etc., and the target variable is the price of houses in the year 2018-19. 
Please refer to the "Pune house data.csv" directory for the dataset and detailed description

## Model
The project explores several machine learning models, including:
- Linear Regression
- Decision Trees
- Lasso Regression <br>
The models are evaluated based on metrics such as Mean Absolute Error (MAE), Mean Squared Error (MSE), and R-squared score.

## Model Details

- **Data Cleaning**: Handled missing values, outliers, and irrelevant features.
- **Feature Extraction**: Extracted and engineered relevant features from the dataset.
- **Modeling**: Compared multiple regression models and selected the linear regression model with 89% accuracy.
- **Model Persistence**: The chosen model is saved and loaded using a pickle file.

## Technologies Used

- **Backend**: Python Flask
- **Frontend**: HTML, CSS, JavaScript, jQuery
- **Modeling**: scikit-learn
- **Deployment**: Flask server

## Results

The best-performing model is used for making predictions on new data thorugh  a web interface named index.html. <br>The output of this project is as follows: <br><br><br>
![Screenshot (274)](https://github.com/mahima-nair/Pune-House-Price-Prediction-Mini-Project/assets/121349384/c8f6d265-d60d-414d-afcc-ea7aae7565e6) <br><br><br><br>
![Screenshot (275)](https://github.com/mahima-nair/Pune-House-Price-Prediction-Mini-Project/assets/121349384/56e43b04-81f1-4ab0-a181-2415531129a9)

## Contact

If you have any questions or suggestions feel free to contact me!<br>

Thank you for checking out the Pune House Price Prediction using Regression Mini Project !





