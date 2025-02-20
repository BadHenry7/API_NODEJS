const express = require("express");
const twilio = require("twilio");
const cors = require("cors");


const app = express();
const port = 3000;

//
app.use(express.json());
app.use(cors());

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const twilioNumber = process.env.TWILIO_NUMBER;

const client = twilio(accountSid, authToken);

app.post("/send-sms", async (req, res) => {
    const { phoneNumber, message } = req.body;

    try {
        console.log("Intentando enviar SMS...");
        console.log("Número destino:", phoneNumber);
        console.log("Mensaje:", message);

        const response = await client.messages.create({
            body: message,
            from: twilioNumber,
            to: phoneNumber
        });

        console.log("SMS enviado con éxito:", response.sid);
        res.json({ success: true, message: "SMS enviado correctamente", sid: response.sid });
    } catch (error) {
        console.error("Error enviando SMS:", error);
        res.status(500).json({ success: false, message: "Error enviando SMS", error: error.message });
    }
});


app.listen(port, () => {
    console.log(`Servidor ejecutándose en el puerto ${port}`);
});
