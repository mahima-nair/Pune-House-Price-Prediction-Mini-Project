import json
import pickle
import numpy as np

__locations = None
__data_columns = None
__model = None


def get_estimsted_price(location,sqft,bhk,bath):
    try:
        loc_index = __data_columns.index(location.lower()) #finding the location from data columns list using index() function
    except:
        loc_index = -1

    x = np.zeros(len(__data_columns))
    x[0] = sqft
    x[1] = bath
    x[2] = bhk
    if loc_index >=0:
        x[loc_index]=1
    
    return round(__model.predict([x])[0],2)#provide a @-D array to the predict function of ML model that takes the input and predicts the output


def get_location_names():
    load_saved_artifacts()
    return __locations

def load_saved_artifacts():
    print("loading saved artifacts ... start")
    global __data_columns
    global __locations

    with open("./artifacts/columns.json", "r") as f:
        __data_columns = json.load(f)['data_columns']
        __locations = __data_columns[3:]#indexing in python. start from location 3 where actual location names start


    global __model
    with open("./artifacts/Pune_House_Price_Prediction_Model.pickle", "rb") as f:
        __model = pickle.load(f)



if __name__ == "__main__":
    load_saved_artifacts()
    # print(get_location_names())
    # print(get_estimsted_price('Wadgaon Sheri',1000,2,2))
    # print(get_estimsted_price('pashan',1500,3,2))
    # print(get_estimsted_price('kalyani nagar',1500,2,2))