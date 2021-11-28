class Appointment < ApplicationRecord
    belongs_to :trainer, optional: true
    belongs_to :client, optional: true
end
