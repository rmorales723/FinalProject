class Appointment < ApplicationRecord
    belongs_to :trainer
    belongs_to :client
    validates :client_name, :date, :time, presence: true

    def client_name
        # client&.name
        client.name
    end
end
