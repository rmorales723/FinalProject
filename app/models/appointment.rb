class Appointment < ApplicationRecord
    belongs_to :trainer
    belongs_to :client
    validates :client_name, :date, :time, presence: true

    after_create_commit :send_email_to_client

    def client_name
        # client&.name
        client.name
    end

    def send_email_to_client
        ClientMailer.new_appointment_email(self, self.client).deliver_now
    end
end
