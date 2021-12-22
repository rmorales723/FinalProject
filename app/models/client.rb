class Client < ApplicationRecord
    has_many :appointments, dependent: :destroy
    validates_presence_of :name, :number, :img_url, :email

    validates :email, format: { with: URI::MailTo::EMAIL_REGEXP }
end
