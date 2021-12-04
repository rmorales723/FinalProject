class Trainer < ApplicationRecord
    has_secure_password
    has_many :appointments
    has_many :clients, through: :appointments
    validates :username, presence: true, uniqueness: {case_sensitive: false}

end
