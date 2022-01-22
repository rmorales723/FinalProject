class AppointmentSerializer < ActiveModel::Serializer
  attributes :id, :date, :time, :client_name, :trainer_id, :client_id, :start, :end, :title  

  def date
    Date.parse(object.date).strftime("%Y-%m-%d")
  end

  def start    
    DateTime.parse(Date.parse(object.date).strftime("%Y-%m-%d") + " #{object.time}").strftime("%Y-%m-%d %H:%M")
  end

  def end    
    (DateTime.parse(start) + 1.hour).strftime("%Y-%m-%d %H:%M")
  end

  def title
    "Appointment with #{object.client_name}"
  end
end


