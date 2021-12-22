# Preview all emails at http://localhost:3000/rails/mailers/client_mailer
class ClientMailerPreview < ActionMailer::Preview

  # Preview this email at http://localhost:3000/rails/mailers/client_mailer/new_appointment_email
  def new_appointment_email
    ClientMailer.new_appointment_email
  end

end
