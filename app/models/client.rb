class Client < ApplicationRecord
    has_many :appointments
    validates_presence_of :name, :number, :img_url
end
