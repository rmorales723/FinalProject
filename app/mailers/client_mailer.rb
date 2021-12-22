class ClientMailer < ApplicationMailer
  def new_appointment_email(appointment, client)    
    @client = client
    @appointment = appointment

    mail to: client.email
  end
end
