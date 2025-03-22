from flask import Flask, request
import datetime

app = Flask(__name__)

@app.route('/logout', methods=['POST'])
def logout_event():
    data = request.json
    username = data.get("user", "Unknown")
    timestamp = datetime.datetime.now().strftime("%Y-%m-%d %H:%M:%S")
    print(f"[{timestamp}] User {username} logout detected from {request.remote_addr}")
    return {"status": "received"}, 200

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)  # Pastikan firewall tidak memblokir port 5000
