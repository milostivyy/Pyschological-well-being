# import pickle
# with open('svm_pickle_model.pkl', 'rb') as f:
#     svm_dict = pickle.load(f)

# # Extract the SVM model and feature names from the dictionary
# svm_model = svm_dict["model"]
# feature_names = svm_dict["feature_names"]
# # Predict the disorder type using the SVM model
# sentiment_scores=[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
# predictions = svm_model.predict([sentiment_scores])
# disorder = predictions[0]
# print("disorder",disorder)
#sentiment_scores = [1,-1,1,1,0,0,1,0,-1,0,1,0,1,-1,1,1]
import nltk
from nltk.sentiment.vader import SentimentIntensityAnalyzer
# Initialize the sentiment analyzer
sid = SentimentIntensityAnalyzer()
import numpy as np
input_array=["yes","no","yes","yes","maybe","maybe","yes","maybe","no","maybe","yes","maybe","yes","no","yes","yes"]
sentiment_scores=[]
for text in input_array:
        score = sid.polarity_scores(str(text))
        if score['compound'] > 0:
            sentiment_scores.append(1)
        elif score['compound'] == 0:
            sentiment_scores.append(0)
        else:
            sentiment_scores.append(-1)
sentiment_scores=np.array(sentiment_scores)
print("sentiment is:",sentiment_scores)