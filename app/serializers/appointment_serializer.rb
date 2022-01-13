class AppointmentSerializer < ActiveModel::Serializer
  attributes :id, :date, :time, :client_name, :trainer_id, :client_id

  def date
    Date.parse(object.date).strftime("%Y-%m-%d")
  end
end
