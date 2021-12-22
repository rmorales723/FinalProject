class Client < ApplicationRecord
    has_many :appointments, dependent: :destroy
    validates_presence_of :name, :number, :img_url, :email
end
