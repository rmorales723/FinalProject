Trainer.destroy_all
Client.destroy_all
Appointment.destroy_all

trainer = Trainer.create!(name: "Rob", username: "rob", password: "password", skill: "Fat Loss, Body Building, Cross Training, Contest Prep", credential: "National Strength & Conditiong Association, USA Weightlifting, KettleBell Concepts, CPR")
client = Client.create!(name:"Sarah", email: 'sarah@email.com', number:"917-386-6955", img_url: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500")
Appointment.create!(client: client, trainer: trainer, date:"2021-12-31", time: "10:00am")