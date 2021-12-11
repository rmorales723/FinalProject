class Appointment < ApplicationRecord
    belongs_to :trainer, optional: true
    belongs_to :client, optional: true

    validates :date, :time, :client_name, presence: true
end
