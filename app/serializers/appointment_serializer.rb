class AppointmentSerializer < ActiveModel::Serializer
  attributes :id, :name, :date, :time
end
