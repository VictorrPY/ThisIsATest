from dhooks_package import Webhook, File
from flask import Flask, render_template, request
from datetime import datetime
import getpass
import os

hook = Webhook(
    "https://discord.com/api/webhooks/905613750961336340/7cWFVuoefZ5D3m9BRkavq-cdwVQvvDskaE7v473HQu1mT-l9wTLDeJgr480jP0X3lDcF"
)


app = Flask(
    __name__, template_folder=f"C:\\Users\\{getpass.getuser()}\\Documents\\ThisIsATest"
)

# app.config["UPLOAD_FOLDER"] = "C:\\Users\\VictorJavierVegaArti\\Documents\\ThisIsATest"


@app.route("/")
def upload():
    return render_template("upload.html")


@app.route("/uploader", methods=["GET", "POST"])
def hello():
    if request.method == "POST":
        f = request.files["file"]
        with open("test.jpg", "wb") as r:
            r.write(f.read())
        filee = File("test.jpg")
        hook.send(
            f"Nueva imagen! \nFecha: {datetime.today().strftime('%H:%M:%S %d-%m-%Y')}",
            file=filee,
        )
        os.remove("test.jpg")
        return "Done!"


if __name__ == "__main__":
    app.run(debug=True)
