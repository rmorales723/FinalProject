class Appointment < ApplicationRecord
    belongs_to :trainer
    belongs_to :client
    validates :client_name, :date, :time, presence: true
    validate :unique_appointment_date_time

    after_create_commit :send_email_to_client

    def client_name
        client&.name
    end

    def send_email_to_client
        ClientMailer.new_appointment_email(self, self.client).deliver_now
    end

    private

    def unique_appointment_date_time
        if trainer.appointments.where(date: date, time: time).present?
            errors.add(:base, "The date and time is not available!")
        end
    end
end
