import tensorflow as tf
import numpy as np
from flask import Flask, request, jsonify
import cv2
from flask_cors import CORS

app=Flask(__name__)

CORS(app,resources={r"/predict/*": {"origins": "*"}})

result = ['hbv','he','ipcl','le']

# Load the TFLite model
interpreter = tf.lite.Interpreter(model_path="effmodel.tflite")
interpreter.allocate_tensors()

# Define input and output details
input_details = interpreter.get_input_details()
output_details = interpreter.get_output_details()


@app.route('/',methods=['GET'])
def startServer():
    return "Server is started"

@app.route('/predict',methods=['POST'])
def getResult():
    f = request.files['file']
    f = f.read()

    processed_img = process_img(f)
    interpreter.set_tensor(interpreter.get_input_details()[0]['index'], processed_img)
    interpreter.invoke()
    tflite_model_prediction = interpreter.get_tensor(interpreter.get_output_details()[0]['index'])
    predicted_index = int(np.argmax(tflite_model_prediction))
    
    return jsonify({'prediction': result[predicted_index]})


def process_img(img_bytes):
    nparr = np.frombuffer(img_bytes, np.uint8)
    img = cv2.imdecode(nparr ,cv2.IMREAD_COLOR)
    img = cv2.resize(img, (100,100))
    img_array = img.astype(np.float32)
    img_array = np.expand_dims(img_array, axis=0)
    return img_array


if __name__=='__main__':
    app.run()