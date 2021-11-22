from flask import Flask, jsonify
import json
import sqlite3
app = Flask(__name__)
app.config['JSONIFY_PRETTYPRINT_REGULER'] = False
@app.route("/api/v1/info")

def home_index():
    conn = sqlite3.connect('mydb.db')
    print ("Opened database successfully");
    api_list=[]
    cursor = conn.execute("SELECT buildtime, version, methods, links from apirelease")
    for row in cursor:
        api = {}
        api['version'] = row[1]
        api['buildtime'] = row[0]
        api['methods'] = row[2]
        api['links'] = row[3]
        api_list.append(api)
    conn.close()
    return jsonify({'api_version': api_list}), 200

@app.route('/api/v1/users', methods=['GET'])
def get_users():
   return list_users()

def list_users():
    conn = sqlite3.connect('mydb.db')
    print ("Opened database successfully");
    api_list=[]
    cursor = conn.execute("SELECT username, full_name,  emailid, password, id from users")
    for row in cursor:
        a_dict = {}
        a_dict['username'] = row[0]
        a_dict['fullname'] = row[1]
        a_dict['emailid'] = row[2]
        a_dict['password'] = row[3]
        a_dict['id'] = row[4]
        api_list.append(a_dict)

    conn.close()
    return jsonify({'user_list': api_list})


@app.route('/api/v1/users/<int:user_id>', methods=['GET'])
def get_user(user_id):
    return list_user(user_id)

def list_user(user_id):
    conn = sqlite3.connect('mydb.db')
    print ("Opened database Successfully");
    api_list=[]
    cursor=conn.cursor()
    cursor.execute("SELECT * FROM users where id=?",(user_id,))
    data = cursor.fetchall()
    if len(data) != 0:
       user = {}
       user['username'] = data[0][0]
       user['fullname'] = data[0][3]
       user['emailid'] = data[0][1]
       user['password'] = data[0][2]
       user['id'] = data[0][4]
    conn.close()
    return jsonify(user)

if __name__ == "__main__":
   app.run(host='0.0.0.0', port=5000, debug=True)
