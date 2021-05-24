
import serial
import time
import json

# este archivo lee los datos del data.json y los envia a las Raspberry Pi pico
# usando pyserial

# para escanear puertos en python -m serial.tools.list_ports
# el archivo serialTest3 funciona

dev = serial.Serial("COM7", 9600)
time.sleep(0.1)


print("arranca programa python PC")
print("este programa recibe los datos del navegador y los envia a la raspberry pi pico")

# funcion que hace un barrido


while True:
    f = open("data.json",)
    data = json.load(f)
    time.sleep(0.1)

    # enviar datos
    # *******************
    if (data["boton1"] == "ON"):
        cad = "1"
        dev.write(cad.encode("ascii"))

    elif (data["boton1"] == "OFF"):
        cad = "2"
        dev.write(cad.encode("ascii"))

    # *******************
    if (data["boton2"] == "ON"):
        cad = "3"
        dev.write(cad.encode("ascii"))

    elif (data["boton2"] == "OFF"):
        cad = "4"
        dev.write(cad.encode("ascii"))

    # *******************
    if (data["boton3"] == "ON"):
        cad = "5"
        dev.write(cad.encode("ascii"))

    elif (data["boton3"] == "OFF"):
        cad = "6"
        dev.write(cad.encode("ascii"))

    # *******************
    if (data["boton4"] == "ON"):
        cad = "7"
        dev.write(cad.encode("ascii"))

    elif (data["boton4"] == "OFF"):
        cad = "8"
        dev.write(cad.encode("ascii"))

    # *******************
    if (data["boton5"] == "ON"):
        cad = "9"
        dev.write(cad.encode("ascii"))

    elif (data["boton5"] == "OFF"):
        cad = "0"
        dev.write(cad.encode("ascii"))
