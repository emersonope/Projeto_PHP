from flask import Flask, render_template, request
porta = 4500;
app = Flask (__name__, template_folder='./static')

def add(x,y):
	return float(x + y)

def subtract(x,y):
	return float(x - y)

def multply(x,y):
	return float(x * y)

def divide(x,y):
	return float(x / y)

@app.route('/', methods=['GET', 'POST'])
def home():

    if (request.method == "GET"):
        return render_template("index.html")
    else:
        if (request.form["num1"] != "" and request.form["num2"] != ""):
            num1 = float(request.form["num1"])
            num2 = float(request.form["num2"])


            if (request.form["choose"] == "soma"):
                
                return {
                    # para exibir tem que transforma em texto
                    "Resultado": str(add(num1,num2))
                }
            
            elif (request.form["choose"] == "sub"):
                
                return {
                    "Resultado": str(subtract(num1,num2))
                }

            elif (request.form["choose"] == "div"):
                
                return {
                    "Resultado": str(divide(num1,num2))
                }
            elif (request.form['choose'] == "mult"):

                return {
                    "Resultado": str(multply(num1,num2))
                }
            else:
                return "Valor inválido!"


@app.errorhandler(404)
def not_found(error):
    return render_template('index.html')

app.run(port=porta, debug=True)