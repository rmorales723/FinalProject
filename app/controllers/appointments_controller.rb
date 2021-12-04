class AppointmentsController < ApplicationController
    before_action :set_appointment, only: [:update, :destroy] 
     skip_before_action :authorized

    def index 
        appointment = Appointment.all
        render json: appointment, status: :ok
    end

    def show
        appointment = Appointment.find_by(id: params[:id])
        render json: appointment, status: :ok
    end

    def create
        appointment = Appointment.create!(appointment_params)
        render json: appointment, status: :created
    end

    def update
        @appointment = Appointment.update(appointment_params)
        render json: @appointment, status: :accepted
    end

    def destroy
        @appointment.destroy
        head :no_content, status: :ok
     end

    private

    def appointment_params
        params.require(:appointment).permit(:date, :time, :client_name, :client_id, :trainer_id)
    end

    def set_appointment
        @appointment = Appointment.find_by(id: params[:id])
    end
end
