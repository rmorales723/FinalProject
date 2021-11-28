Trainer.destroy_all
Client.destroy_all
Appointment.destroy_all

Trainer.create!(name: "Rob", username: "rob", password: "password", skill: "Fat Loss, Body Building, Cross Training, Contest Prep", credential: "National Strength & Conditiong Association, USA Weightlifting, KettleBell Concepts, CPR")
Client.create!(name:"Sarah", number:"917-386-6955", img_url: "https://publicdomainvectors.org/photos/1389952697.png")
Appointment.create!(client_name:"Sarah", date:"12-30-2021", time: "10:00")