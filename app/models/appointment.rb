class Appointment < ApplicationRecord
    belongs_to :trainer
    belongs_to :client

    validates :date, :time, presence: true

    def client_name 
        client.name
    end
end
