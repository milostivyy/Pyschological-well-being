from flask import Flask, jsonify, request
from flask_cors import CORS
import pickle
import nltk
from nltk.sentiment.vader import SentimentIntensityAnalyzer
from flask_cors import CORS
import numpy as np

app = Flask(__name__)
CORS(app)  # allow CORS for all routes
with open('svm_pickle_model.pkl', 'rb') as f:
    svm_dict = pickle.load(f)

svm_model = svm_dict["model"]
feature_names = svm_dict["feature_names"]
# Initialize the sentiment analyzer
sid = SentimentIntensityAnalyzer()




@app.route('/api/submit', methods=['POST'])
def submit_data():

    input_array= request.get_json()
    input_array = np.array(input_array)
    print("array is",input_array)
    input_array = [text.replace('"', '') for text in input_array if text != '""']
    #print("input array",input_array)

    #Perform sentiment analysis and store the results in a list
    #sentiment_scores = [1,-1,1,1,0,0,1,0,-1,0,1,0,1,-1,1,1]
    sentiment_scores=[]
    for text in input_array:
        score = sid.polarity_scores(str(text))
        if score['compound'] > 0:
            sentiment_scores.append(1)
        elif score['compound'] == 0:
            sentiment_scores.append(0)
        else:
            sentiment_scores.append(-1)
    #print("sentiment socres",sentiment_scores)
    sentiment_scores=np.array(sentiment_scores)
    #print("sentiment scores after np is:",sentiment_scores)
    reshaped_array = [sentiment_scores]
    #print("reshape array",reshaped_array)
    predictions = svm_model.predict(reshaped_array)
    disorder = predictions[0]

    # # data = request.get_json()
    # # # process the data here
    # data = {'name': 'John', 'age': 30, 'city': 'New York'}
    # eturn the processed data as JSON
    #print("disorder",disorde
    print_statement = "If you or someone you know is suffering from anxiety and mood disorders, here are some suggestions and feedback to help manage and cope with these conditions:\n" \
                      "1. Seek professional help: It's crucial to consult with a mental health professional such as a psychologist or psychiatrist. They can provide an accurate diagnosis and develop an appropriate treatment plan tailored to your needs.\n" \
                      "2. Educate yourself: Learn about anxiety and mood disorders to better understand what you're experiencing. Knowledge can help alleviate some of the fear and uncertainty surrounding these conditions.\n" \
                      "3. Build a support system: Surround yourself with understanding and supportive individuals who can offer encouragement and empathy. Consider joining support groups or seeking therapy to connect with others who share similar experiences.\n" \
                      "4. Practice self-care: Prioritize self-care activities that promote physical and mental well-being. Engage in regular exercise, eat a balanced diet, get enough sleep, and engage in activities you enjoy."
    response= jsonify({'You are suffering from': disorder,"Suggestion":print_statement})
    return response
    # return response
if __name__ == '__main__':
    app.run(debug=True)
