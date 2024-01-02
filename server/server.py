from flask import Flask, jsonify, request,session
from flask_cors import CORS
import psycopg2
import psycopg2.extras
import base64
from base64 import b64decode
from werkzeug.security import generate_password_hash,check_password_hash


from configparser import ConfigParser
# App instance
app = Flask(__name__)
CORS(app)
config =ConfigParser()
config.read("env.ini")




# connecting to the data base
database_session=psycopg2.connect(
    database=config["Database_info"]["dataBaseName"], #enter the name of the database
    port=5432, #Enter the port your database connect to
    host='localhost', 
    user='postgres',
    password= config["Database_info"]["dataBasePassword"] #Enter the password for your postgres
)

#creating a session for the database access
cursor = database_session.cursor(cursor_factory=psycopg2.extras.DictCursor)






if __name__ == "__main__":
    app.run(debug=True, port=8080)
