const bodyParser = require('body-parser');

const express = require('express');

const app = express();
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));

const PORT = 3000;

const { getAllPatientsPlans, getAllPlans, createPatients, getPatientsAndSurgeriesNoDoctor, getDoctorSurgeries } = require('./Controller/controller')

app.post('/create', createPatients);

app.get('/patients', getAllPatientsPlans);

app.get('/allPlans/:id', getAllPlans);

app.get('/surgeries/nodoctor', getPatientsAndSurgeriesNoDoctor);

app.get('/getDoctorSurgeries/:name', getDoctorSurgeries);

app.listen(PORT, () => {
  console.log(`Port: ${PORT}`);
});
