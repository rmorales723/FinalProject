class AppointmentSerializer < ActiveModel::Serializer
  attributes :id, :date, :time, :client_name, :trainer_id, :client_id
end
