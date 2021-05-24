from machine import Pin, UART
import time

# programa en microPython, van en la Raspbery Pi Pico

ledInt = Pin(25, Pin.OUT)
led1 = Pin(13, Pin.OUT)
led2 = Pin(14, Pin.OUT)
led3 = Pin(15, Pin.OUT)
led4 = Pin(16, Pin.OUT)

# comunicacion por protocolo UART
port = UART(0, 9600, parity=None, stop=1, bits=8)
time.sleep(0.1)

print("Inicio de RaspPico")

while True:

    try:
        if port.any() > 0:
            dato = port.read(1)
            datoPrint = str(dato, "ascii")
            print("Dato que llegó es: ", datoPrint)

            if "1" in dato:
                ledInt.value(1)
                print("led Int ON")
            elif "2" in dato:
                ledInt.value(0)
                print("led Int OFF")

            elif "3" in dato:
                led1.value(1)
                print("led 1 ON")
            elif "4" in dato:
                led1.value(0)
                print("led 1 OFF")

            elif "5" in dato:
                led2.value(1)
                print("led 2 ON")
            elif "6" in dato:
                led2.value(0)
                print("led 2 OFF")

            elif "7" in dato:
                led3.value(1)
                print("led 3 ON")
            elif "8" in dato:
                led3.value(0)
                print("led 3 OFF")

            elif "9" in dato:
                led4.value(1)
                print("led 4 ON")
            elif "0" in dato:
                led4.value(0)
                print("led 4 OFF")

            elif "c" in dato:
                port.write("t")
                time.sleep(0.1)
                print("Revisar si hay conexion")
            else:
                print("Dato que llegó a la Pico es invalido")

    except:
        print("Sorry, try again")
