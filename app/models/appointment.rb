class Appointment < ApplicationRecord
    beloongs_to :trainer
    beloongs_to :client
end
